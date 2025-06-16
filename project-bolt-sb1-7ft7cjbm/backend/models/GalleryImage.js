const mongoose = require('mongoose');

const GalleryImageSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: ['wedding', 'pre wedding', 'event','government & political event','filmmaking']
  },
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    default: 1,
    enum: [1, 2]
  },
  order: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('GalleryImage', GalleryImageSchema);