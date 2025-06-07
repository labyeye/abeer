const express = require('express');
const router = express.Router();
const phoBirthdayBannerControllerr = require('../../../controllers/PhotoGraphy/Birthday/phobirthdayBannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', phoBirthdayBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, phoBirthdayBannerControllerr.getAllBanners);
router.post('/', auth, phoBirthdayBannerControllerr.createBanner);
router.put('/:id', auth, phoBirthdayBannerControllerr.updateBanner);
router.delete('/:id', auth, phoBirthdayBannerControllerr.deleteBanner);

module.exports = router;