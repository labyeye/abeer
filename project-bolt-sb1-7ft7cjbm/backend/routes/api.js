// routes/api.js
const express = require('express');
const router = express.Router();
const Folder = require('../models/Folder');
const Selection = require('../models/Selection');
const { getFolderContents } = require('../services/googleDriveService');

// Add new folder
router.post('/folders', async (req, res) => {
  try {
    const { url, folderId } = req.body;
    const folder = new Folder({ url, folderId });
    await folder.save();
    res.status(201).json(folder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all folders
router.get('/folders', async (req, res) => {
  try {
    const folders = await Folder.find().sort({ createdAt: -1 });
    res.json(folders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get images for a folder
router.get('/folders/:folderId/images', async (req, res) => {
  try {
    const folder = await Folder.findById(req.params.folderId);
    if (!folder) {
      return res.status(404).json({ error: 'Folder not found' });
    }
    
    const images = await getFolderContents(folder.folderId);
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Save customer selection
router.post('/selections', async (req, res) => {
  try {
    const selection = new Selection(req.body);
    await selection.save();
    res.status(201).json(selection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all selections
router.get('/selections', async (req, res) => {
  try {
    const selections = await Selection.find().sort({ date: -1 });
    res.json(selections);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;