// 인증(회원가입, 로그인) 관리 (/members/~)

var express = require('express');
const mysql = require('mysql');  // mysql 모듈을 임포트
const bcrypt = require('bcrypt');
var router = express.Router();
const saltRounds = 10;

// for test
const connection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
});

connection.connect();

// 신규회원등록 (/members/create)
router.post('/create', async(req, res)=>{
    let {
        email, password, name, birthday, user_type, auth, without_flag,
        ins_user_seq, ins_date, ins_ip_addr, upd_user_seq, upd_date,
        upd_ip_addr, del_user_seq, del_date, del_ip_addr
    } = req.body;

    // 비밀번호 해싱 
    try {
        password = await bcrypt.hash(password, saltRounds);
    } catch (err) {
        console.error('Error hashing password:', err);
        return res.status(500).send({ success: false, message: 'Password hashing error' });
    }

    let sql = `
        INSERT INTO users (
            email, password, name, birthday, user_type, 
            auth, without_flag, ins_user_seq, ins_date, 
            ins_ip_addr, upd_user_seq, upd_date, upd_ip_addr, 
            del_user_seq, del_date, del_ip_addr
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `; // placeholder를 통한 SQL Injection 방지

    // placeholder와 순서 맞춰서 const 배열에 넣기 위함
    const values = [
        email, password, name, birthday, user_type,
        auth, without_flag, ins_user_seq, ins_date,
        ins_ip_addr, upd_user_seq, upd_date, upd_ip_addr,
        del_user_seq, del_date, del_ip_addr
    ];

    connection.query(sql, values, (error, results) => {
        if (error) {
            console.error('Error inserting data:', error);
            return res.status(500).send({ success: false, message: 'Database error' });
        }

        console.log('Inserted successfully with ID:', results.insertId);
        res.send({ success: true, insertedId: results.insertId }); // react에 상태반환
    });
})

// 기존 회원정보 단건 수정 (/members/update) => 로그인한 상태에서만 가능
router.post('/update', async(req, res) => {
    let {
        memberId, email, password, name, birthday, auth, without_flag, 
        upd_user_seq, upd_date, upd_ip_addr
    } = req.body;

    if (!memberId) { // memberId가 req에 없으면 400에러 반환 
        return res.status(400).send({ success: false, message: 'Member ID is required' });
    }

    // 새 비밀번호 해싱하기 
    if (password) {
        try {
            password = await bcrypt.hash(password, saltRounds);
        } catch (err) {
            console.error('Error hashing password:', err);
            return res.status(500).send({ success: false, message: 'Password hashing error' });
        }
    }

    let updateFields = [];
    let values = [];

    if (email) {
        updateFields.push('email = ?');
        values.push(email);
    }
    if (password) {
        updateFields.push('password = ?');
        values.push(password);
    }
    if (name) {
        updateFields.push('name = ?');
        values.push(name);
    }
    if (birthday) {
        updateFields.push('birthday = ?');
        values.push(birthday);
    }
    // user_type은 추후 회의 후 결정 
    if (auth) { // OAuth 인증정보 변경/재인증 시 사용 
        updateFields.push('auth = ?');
        values.push(auth);
    }
    if (without_flag) {
        updateFields.push('without_flag = ?');
        values.push(without_flag);
    }
    if (upd_user_seq) {
        updateFields.push('upd_user_seq = ?');
        values.push(upd_user_seq);
    }
    if (upd_date) {
        updateFields.push('upd_date = ?');
        values.push(upd_date);
    }
    if (upd_ip_addr) {
        updateFields.push('upd_ip_addr = ?');
        values.push(upd_ip_addr);
    }

    values.push(memberId); // WHERE 조건에 사용될 memberId 값을 values 배열에 추가합니다.

    let sql = `
        UPDATE users SET ${updateFields.join(', ')}
        WHERE member_id = ?
    `;

    connection.query(sql, values, (error, results) => {
        if (error) {
            console.error('Error updating data:', error);
            return res.status(500).send({ success: false, message: 'Database error' });
        }

        if (results.affectedRows === 0) {
            return res.status(404).send({ success: false, message: 'Member not found' });
        }

        res.send({ success: true, updatedRows: results.affectedRows });
    });
});

// 기존 회원정보 단건 삭제 (/members/delete)
router.post('/delete', (req, res) => {
    const memberId = req.body.memberId;

    if (!memberId) { // memberId가 req에 없으면 400에러 반환 
        return res.status(400).send({ success: false, message: 'Member ID is required' });
    }

    // member_id 일치하는 회원 정보 레코드 삭제 
    const sql = `
        DELETE FROM users WHERE member_id = ?
    `;

    connection.query(sql, [memberId], (error, results) => {
        if (error) { // 삭제 안된경우 500반환 
            console.error('Error deleting data:', error);
            return res.status(500).send({ success: false, message: 'Database error' });
        }

        if (results.affectedRows === 0) { // member_id 일치하는 회원 정보 없는 경우 404반환
            return res.status(404).send({ success: false, message: 'Member not found' });
        }

        res.send({ success: true, deletedRows: results.affectedRows });
    });
});


// 회원 정보 단건 조회 (QueryString, /members/detail?mid=1)
router.get('/detail', (req, res) => {
    const memberId = req.query.mid;

    if (!memberId) { // member_id 확인 (없으면 400리턴)
        return res.status(400).send({ success: false, message: 'Member ID is required' });
    }

    const sql = `
        SELECT * FROM users WHERE member_id = ?
    `;

    connection.query(sql, [memberId], (error, results) => {
        if (error) { // 알 수 없는 이유로 조회 안된경우 500반환
            console.error('Error fetching data:', error);
            return res.status(500).send({ success: false, message: 'Database error' });
        }

        if (results.length === 0) { // member_id 일치하는 회원 정보 없는 경우 404반환
            return res.status(404).send({ success: false, message: 'Member not found' });
        }

        res.send(results[0]);
    });
});

module.exports = router;