var express = require('express');
var router = express.Router();
var recipeCtrl = require('../controllers/recipes');
const isLoggedIn = require('../config/auth');
var reviewsCtrl = require('../controllers/reviews');

router.get('/', recipeCtrl.index);
router.post('/', isLoggedIn, recipeCtrl.create);
router.get('/new', isLoggedIn, recipeCtrl.new);
router.get('/:id', recipeCtrl.show);
router.post('/:id/reviews', reviewsCtrl.create);

module.exports = router;