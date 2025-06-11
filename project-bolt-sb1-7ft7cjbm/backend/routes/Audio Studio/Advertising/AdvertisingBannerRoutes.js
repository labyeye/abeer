const express = require('express');
const router = express.Router();
const AdvertisingBannerControllerr = require('../../../controllers/Audio Studio/Advertising/AdvertisingBannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', AdvertisingBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, AdvertisingBannerControllerr.getAllBanners);
router.post('/', auth, AdvertisingBannerControllerr.createBanner);
router.put('/:id', auth, AdvertisingBannerControllerr.updateBanner);
router.delete('/:id', auth, AdvertisingBannerControllerr.deleteBanner);

module.exports = router;