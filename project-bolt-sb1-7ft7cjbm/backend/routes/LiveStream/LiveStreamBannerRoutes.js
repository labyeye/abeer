const express = require('express');
const router = express.Router();
const LiveStreamBannerControllerr = require('../../controllers/LiveStream/LiveStreamBannerController');
const auth = require('../../middleware/auth');

// Public routes
router.get('/active', LiveStreamBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, LiveStreamBannerControllerr.getAllBanners);
router.post('/', auth, LiveStreamBannerControllerr.createBanner);
router.put('/:id', auth, LiveStreamBannerControllerr.updateBanner);
router.delete('/:id', auth, LiveStreamBannerControllerr.deleteBanner);

module.exports = router;