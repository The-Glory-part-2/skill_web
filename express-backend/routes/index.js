var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET Login Page
router.get('/login', async(req, res)=>{
  res.render('login.ejs')
})

// GET Register Page
router.get('/register', async(req, res)=>{
  res.render('register.ejs')
})

module.exports = router;
