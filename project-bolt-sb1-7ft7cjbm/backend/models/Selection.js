// models/Selection.js
const mongoose = require('mongoose');

const selectionSchema = new mongoose.Schema({
  customerName: String,
  customerEmail: String,
  notes: String,
  images: [{
    id: String,
    name: String,
    thumbnailLink: String,
    webContentLink: String
  }],
  folderId: String,
  folderUrl: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Selection', selectionSchema);