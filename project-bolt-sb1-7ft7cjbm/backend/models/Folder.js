const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  folderId: { type: String, required: true },
  parentFolderId: { type: String },
  isRoot: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Folder', folderSchema);