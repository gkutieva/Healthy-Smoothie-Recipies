var express = require('express');
var router = express.Router();
var smoothieCtrl = require('../controllers/smoothies');
const isLoggedIn = require('../config/auth');

router.get('/', smoothieCtrl.index);
router.get('/', isLoggedIn, smoothieCtrl.create);


module.exports = router;