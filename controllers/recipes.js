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
        res.render(`recipes/index`, {title: 'Home', recipe});
    });
};

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
      const recipe = new Recipe(req.body);
      recipe.save(function(err) {
        if (err) return res.redirect('/recipes/new');
        res.redirect(`/recipes/${recipe._id}`);
      });
}

function newRecipe(req, res) {
    res.render('recipes/new', {title: 'New Recipe'});
}

function show(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        res.render('recipes/show', {title: 'Recipe Details', recipe});
    });
   
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