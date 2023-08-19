import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import './Login.css'


const User = {
    email: 'test@exmaple.com',
    pw: 'test1234!@#$'
};

export default function Login() {
    const [useEmail, setEmail] = useState('');
    const [usePw, setPw] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true)

    const handleEmail = (e) => {
        setEmail(e.target.value);
        const regex =
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (regex.test(useEmail)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    }
    const handlePassword = (e) => {
        setPw(e.target.value);
        const regex =
            /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if (regex.test(e.target.value)) {
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    };
    
    const onClickConfirmButton = () => {
        if(useEmail === User.email && usePw === User.pw) {
            <Route path="/" element={<Home />} />
            alert('로그인에 성공했습니다.');
        } else {
            <Route path="/" element={<Home />} />
            alert('등록되지 않은 회원입니다.');
        }
    }

    useEffect(() => {
        // emailvalid, pwvalid의 변화가 일어날때 변경됨
        if(emailValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    },[emailValid, pwValid]);

    return (
        <div className="page">
            <div className="content">
                <div className="titleWrap">
                    이메일과 비밀번호를
                    <br />
                    입력해주세요
                </div>
                <div className="contentWrap">
                    <div className="inputTitle">이메일 주소</div>
                    <div className="inputWrap">
                        <input
                            type="text"
                            className="input"
                            placeholder="test@gmail.com"
                            value={useEmail}
                            onChange={handleEmail} />
                    </div>
                    <div className="errorMessageWrap">
                        {!emailValid && useEmail.length > 0 && (
                            <div> 올바른 이메일을 입력해주세요.</div>
                        )}
                    </div>
                    <div style={{ marginTop: "26px" }} className="inputTitle">비밀번호</div>
                    <div className="inputWrap">
                        <input
                            type="password"
                            className="input"
                            placeholder="영문, 숫자, 특수문자 포함 8자 이상 입력해주세요."
                            value={usePw}
                            onChange={handlePassword} />
                    </div>
                    <div className="errorMessageWrap">
                        {
                            !pwValid && usePw.length > 0 && (
                                <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                            )
                        }
                    </div>
                </div>
                <div>
                    <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">
                        확인
                    </button>
                </div>
            </div>

        </div>
    );
}