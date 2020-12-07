var express = require('express');
var router = express.Router();
var recipeCtrl = require('../controllers/recipes');
const isLoggedIn = require('../config/auth');

router.get('/', recipeCtrl.index);
router.get('/', isLoggedIn, recipeCtrl.create);


module.exports = router;