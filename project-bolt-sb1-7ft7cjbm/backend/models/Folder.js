const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
  name: { type: String, default: "New Folder" },
  url: { type: String, required: true },
  folderId: { type: String, required: true },
  parentFolderId: { type: String },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Folder', folderSchema);