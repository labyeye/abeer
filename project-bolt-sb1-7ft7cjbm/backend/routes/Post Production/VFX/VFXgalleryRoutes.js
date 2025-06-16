const express = require('express');
const router = express.Router();
const galleryController = require('../../../controllers/Post Production/VFX/VFXgalleryController');

// Get all gallery items
router.get('/', galleryController.getAllVFXGalleryItems);

// Create new gallery item
router.post('/', galleryController.createVFXGalleryItem);

// Update gallery item
router.put('/:id', galleryController.updateVFXGalleryItem);

// Delete gallery item
router.delete('/:id', galleryController.deleteVFXGalleryItem);

module.exports = router;