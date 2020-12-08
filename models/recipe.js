const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String,

    rating: {
        type: Number,
        min: 1,
        max: 5
    },

    comments: {
        type: String

    }, 
        
}, {timestamps: true});
   


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
    reviews: [reviewSchema],

    user: {type: mongoose.Schema.ObjectId, ref: 'User'}
  });
  
  
  module.exports = mongoose.model('Recipe', recipeSchema);
  