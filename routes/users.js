var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');
var isLoggedIn = require('../config/auth');

/* GET users listing. */
router.get('/', usersCtrl.index);


module.exports = router;
