const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const galleryController = require('../controllers/galleryController');

router.get('/', galleryController.getAllImages);
router.post('/', auth, galleryController.createImage);
router.put('/:id', auth, galleryController.updateImage);
router.delete('/:id', auth, galleryController.deleteImage);
router.post('/reorder', auth, galleryController.reorderImages);

module.exports = router;