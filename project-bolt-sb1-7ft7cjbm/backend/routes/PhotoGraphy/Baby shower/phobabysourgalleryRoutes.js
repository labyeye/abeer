const express = require('express');
const router = express.Router();
const galleryController = require('../../../controllers/PhotoGraphy/Baby shower/phobabysourController');

// Get all gallery items
router.get('/', galleryController.getAllGalleryItems);

// Create new gallery item
router.post('/', galleryController.createGalleryItem);

// Update gallery item
router.put('/:id', galleryController.updateGalleryItem);

// Delete gallery item
router.delete('/:id', galleryController.deleteGalleryItem);

module.exports = router;