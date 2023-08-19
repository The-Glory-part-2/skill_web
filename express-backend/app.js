var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var authsRouter = require('./routes/auths');  // 추후 토큰 기반 인증서비스 추가용 라우터 
var membersRouter = require('./routes/members');  // 회원기능 관리 라우터

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auths', authsRouter);
app.use('/members', membersRouter);

module.exports = app;
