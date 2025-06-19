const express = require('express');
const router = express.Router();
const Folder = require('../models/Folder');
const { getFolderContents } = require('../services/googleDriveService');

// In folderRoutes.js - modify the POST route
router.post('/', async (req, res) => {
  try {
    const { name, url, folderId, parentFolderId } = req.body;
    const folder = new Folder({ 
      name: name || "New Folder", // Use provided name or default
      url, 
      folderId, 
      parentFolderId 
    });
    await folder.save();
    res.status(201).json(folder);
  } catch (error) {
    console.error('Error creating folder:', error);
    res.status(500).json({ 
      error: error.message,
      details: error // Include full error details for debugging
    });
  }
});
// Get all root folders (no parent)
router.get('/', async (req, res) => {
  try {
    const folders = await Folder.find({ parentFolderId: { $exists: false } }).sort({ createdAt: -1 });
    res.json(folders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get subfolders for a parent folder
router.get('/:parentFolderId/subfolders', async (req, res) => {
  try {
    const folders = await Folder.find({ parentFolderId: req.params.parentFolderId }).sort({ createdAt: -1 });
    res.json(folders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:folderId/contents', async (req, res) => {
  try {
    const folder = await Folder.findById(req.params.folderId);
    if (!folder) {
      return res.status(404).json({ error: 'Folder not found' });
    }
    
    if (!folder.folderId) {
      return res.status(400).json({ error: 'Invalid folder configuration - missing Google Drive folderId' });
    }

    // Get both files and subfolders from Google Drive
    const contents = await getFolderContents(folder.folderId);
    
    // Separate folders and files
    const folders = contents.filter(item => item.mimeType === 'application/vnd.google-apps.folder');
    const files = contents.filter(item => item.mimeType !== 'application/vnd.google-apps.folder');
    
    res.json({
      folders,
      files: files.filter(file => file.mimeType.startsWith('image/'))
    });
  } catch (error) {
    console.error('Error fetching folder contents:', error);
    res.status(500).json({ 
      error: 'Failed to fetch folder contents',
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Delete folder
router.delete('/:folderId', async (req, res) => {
  try {
    await Folder.findByIdAndDelete(req.params.folderId);
    // Also delete any subfolders
    await Folder.deleteMany({ parentFolderId: req.params.folderId });
    res.status(200).json({ message: 'Folder deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;