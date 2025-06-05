// models/CategoryShowcase.js
const mongoose = require('mongoose');
const categoryShowcaseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  images: [{
    id: Number,
    image: String,
    title: String
  }],
  order: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('CategoryShowcase', categoryShowcaseSchema);