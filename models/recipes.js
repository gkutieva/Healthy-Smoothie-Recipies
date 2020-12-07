const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true 
    },

    image: { 
        type: String, 
        required: true 
    },

    recipe: {
         type: String, 
         required: true 
    },

    description: { 
        type: String, 
        required: true 
    },

    user: {type: mongoose.Schema.ObjectId, ref: 'User'}
  });
  
  
  module.exports = mongoose.model('Recipe', recipeSchema);
  