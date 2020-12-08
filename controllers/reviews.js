const Recipe = require('../models/recipe');

module.exports = {
    create,
    delete: deleteReview
};

function create(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
      req.body.user = req.user._id;
      req.body.userName = req.user.name;
      req.body.userAvatar = req.user.avatar;
      recipe.reviews.push(req.body);
      recipe.save(function(err) {
        res.redirect(`/recipes/${recipe._id}`);
      })
    })
}

function deleteReview(req, res, next) {
    Recipe.findOne({'reviews._id': req.params.id})
      .then(function(recipe) {
        const review = recipe.reviews.id(req.params.id);
        // logged in user only for can create reviews
        if (!review.user.equals(req.user._id)) return res.redirect(`/reviews/${review._id}`);
        review.remove();
        review.save().then(function() {
          res.redirect(`/reviews/${review._id}`);
        }).catch(function(err) {
        //error
        return next(err);
        })
      })
}