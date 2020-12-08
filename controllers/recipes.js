const Recipe = require("../models/recipe");

module.exports = {
    index,
    create,
    new: newRecipe,
    show,
    update
}

function index(req, res) {
    Recipe.find({}, function(err, recipe) {
        res.render(`recipe/index`, {title: 'home', recipe});
    });
};

function create(req, res) {
    req.body.user = req.user._id;
    const recipe = new Recipe(req.body);
    recipe.save(function(err) {
        if (err) return res.render('recipes/new');
        res.redirect('/recipes');
    });
}

function newRecipe(req, res) {
    res.render('recipes/new');
}

function show(req, res) {
    Recipe.findById(req.params.id)
   
  }

  function update(req, res) {
    Recipe.findOne({'comments._id' : req.params.id})
    .then(function(recipe) {
        comments = recipe.comments.id(req.params.id)
        comments.content = req.body.content;
        recipe.save()
        res.redirect(`/recipes/${recipe._id}`)
    })
  }