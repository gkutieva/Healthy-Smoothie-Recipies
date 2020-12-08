const Recipe = require("../models/recipe");

module.exports = {
    create,
    update,
    delete: deleteComment
}

function create(req, res) {
    Recipe.findById(req.params.id, function(err, book) {
      req.body.userId = req.user._id;
      req.body.userName = req.user.name;
      recipe.comments.push(req.body);
      recipe.save(function(err) {
        res.redirect(`/recipes/${recipe._id}`);
      });
    });
  }

function update(req, res) {
    Recipe.findOne({'comments._id': req.params.id}, function(err, book) {
      const commentSubdoc = recipe.comments.id(req.params.id);
      if (!commentSubdoc.userId.equals(req.user._id)) return res.redirect(`/recipes/${recipe._id}`);
      commentSubdoc.text = req.body.text;
      recipe.save(function(err) {
        res.redirect(`/recipes/${recipe._id}`);
      });
    });
}

function deleteComment(req, res) {
    Recipe.findOne({'comments._id': req.params.id}, function(err, book) {
      const commentSubdoc = book.comments.id(req.params.id);
      if (!commentSubdoc.userId.equals(req.user._id)) return res.redirect(`/recipes/${recipe._id}`);
      commentSubdoc.remove();
      recipe.save(function(err) {
        res.redirect(`/recipes/${recipe._id}`);
      });
    });
}
