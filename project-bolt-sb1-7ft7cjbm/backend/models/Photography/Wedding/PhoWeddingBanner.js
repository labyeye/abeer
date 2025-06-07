const mongoose = require('mongoose');

const PhoweddingBannerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: "Wedding Films"
  },
  description: {
    type: String,
    required: true,
    default: "Capturing your special moments with cinematic elegance"
  },
  backgroundImageUrl: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('PhoWeddingBanner', PhoweddingBannerSchema);