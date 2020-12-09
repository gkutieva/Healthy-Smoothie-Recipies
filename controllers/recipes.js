const Recipe = require("../models/recipe");

module.exports = {
    index,
    create,
    new: newRecipe,
    show,
    edit,
    update
}

function index(req, res) {
    Recipe.find({})
      .populate('user')
      .exec(function (err, recipes) {
      res.render(`recipes/index`, { title: 'Home', recipes });
    });
  };

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
      const recipe = new Recipe(req.body);
      recipe.user = req.user._id;
      recipe.save(function(err) {
        if (err) return res.redirect('/recipes/new');
        res.redirect(`/recipes/${recipe._id}`);
      });
}

function newRecipe(req, res) {
    res.render('recipes/new', {title: 'New Recipe'});
}

function show(req, res) {
    Recipe.findById(req.params.id)
    .populate('user')
    .exec(function (err, recipe) {
      res.render('recipes/show', { title: 'Recipe Details', recipe });
    });
  }

  function edit(req, res) {
    Recipe.findOne({_id: req.params.id, user: req.user._id}, function(err, recipe) {
      if (err || !recipe) return res.redirect('/recipes');
      res.render('recipes/edit', {title: 'Edit Recipe', recipe});
    });
  }

  function update(req, res) {
    Recipe.findOneAndUpdate(
      {_id: req.params.id, user: req.user._id},
      req.body,
      {new: true},
      function(err, recipe) {
        if (err || !recipe) return res.redirect('/recipes');
        res.redirect(`/recipes/${recipe._id}`);
      }
    );
  }

  