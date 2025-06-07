const express = require('express');
const router = express.Router();
const phoWeddingBannerControllerr = require('../../../controllers/PhotoGraphy/Wedding/phoweddingBannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', phoWeddingBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, phoWeddingBannerControllerr.getAllBanners);
router.post('/', auth, phoWeddingBannerControllerr.createBanner);
router.put('/:id', auth, phoWeddingBannerControllerr.updateBanner);
router.delete('/:id', auth, phoWeddingBannerControllerr.deleteBanner);

module.exports = router;