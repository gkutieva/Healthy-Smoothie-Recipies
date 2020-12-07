const Recipe = require("../models/recipe");

module.exports = {
    index,
    create,
}

function index(req, res) {
    Recipe.find({}, function(err, recipe) {
        res.render(`recipe/index`, {title: 'home', recipe});
    });
};

function create(req, res) {
    
}
