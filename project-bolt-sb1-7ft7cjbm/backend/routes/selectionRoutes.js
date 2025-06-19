const express = require('express');
const router = express.Router();
const Selection = require('../models/Selection');
const { google } = require('googleapis');
const JSZip = require('jszip');
const stream = require('stream');

const drive = google.drive({
  version: 'v3',
  auth: new google.auth.GoogleAuth({
    keyFile: 'path/to/your/service-account-key.json',
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  }),
});

// Save customer selection
router.post('/', async (req, res) => {
  try {
    const selection = new Selection(req.body);
    await selection.save();
    res.status(201).json(selection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all selections
router.get('/', async (req, res) => {
  try {
    const selections = await Selection.find().sort({ date: -1 });
    res.json(selections);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});router.post('/download', async (req, res) => {
  try {
    const { imageIds } = req.body;
    if (!imageIds || !Array.isArray(imageIds) || imageIds.length === 0) {
      return res.status(400).json({ error: 'Invalid or empty image IDs array' });
    }

    const zip = new JSZip();
    let filesAdded = 0;
    const errors = [];

    // Process each image using req.drive instead of the local drive client
    await Promise.all(imageIds.map(async (imageId) => {
      try {
        // Get file metadata
        const fileResponse = await req.drive.files.get({  // Changed to use req.drive
          fileId: imageId,
          fields: 'name,mimeType,size',
        });

        console.log(`Processing file: ${fileResponse.data.name}`);

        // Get file content
        const fileStream = await req.drive.files.get({  // Changed to use req.drive
          fileId: imageId,
          alt: 'media',
        }, { responseType: 'stream' });

        // Rest of the code remains the same...
        const buffer = await new Promise((resolve, reject) => {
          const chunks = [];
          fileStream.data.on('data', (chunk) => chunks.push(chunk));
          fileStream.data.on('error', reject);
          fileStream.data.on('end', () => resolve(Buffer.concat(chunks)));
        });

        const extension = fileResponse.data.mimeType.split('/')[1] || 'bin';
        zip.file(`${fileResponse.data.name}.${extension}`, buffer);
        filesAdded++;
      } catch (error) {
        console.error(`Error processing image ${imageId}:`, error.message);
        errors.push({ id: imageId, error: error.message });
      }
    }));

    // Rest of the code remains the same...
    if (filesAdded === 0) {
      return res.status(404).json({ 
        error: 'No files could be added to the ZIP',
        details: errors 
      });
    }

    const zipContent = await zip.generateAsync({ type: 'nodebuffer' });
    res.set('Content-Type', 'application/zip');
    res.set('Content-Disposition', 'attachment; filename=selection_images.zip');
    res.send(zipContent);
  } catch (error) {
    console.error('Error creating zip file:', error);
    res.status(500).json({ 
      error: 'Failed to create zip file',
      details: error.message 
    });
  }
});

module.exports = router;