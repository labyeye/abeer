const express = require('express');
const router = express.Router();
const phoPreWeddingBannerControllerr = require('../../../controllers/PhotoGraphy/Pre Wedding/phopreweddingBannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', phoPreWeddingBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, phoPreWeddingBannerControllerr.getAllBanners);
router.post('/', auth, phoPreWeddingBannerControllerr.createBanner);
router.put('/:id', auth, phoPreWeddingBannerControllerr.updateBanner);
router.delete('/:id', auth, phoPreWeddingBannerControllerr.deleteBanner);

module.exports = router;