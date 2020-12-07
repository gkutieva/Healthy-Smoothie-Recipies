const Recipe = require("../models/recipe");

module.exports = {
    index,
    create,
    new: newRecipe,
}

function index(req, res) {
    Recipe.find({}, function(err, recipe) {
        res.render(`recipe/index`, {title: 'home', recipe});
    });
};

function create(req, res) {
    const recipe = new Recipe(req.body);
    recipe.save(function(err) {
        if (err) return res.render('recipes/new');
        res.redirect('/recipes');
    });
}

function newRecipe(req, res) {
    res.render('recipes/new');
}