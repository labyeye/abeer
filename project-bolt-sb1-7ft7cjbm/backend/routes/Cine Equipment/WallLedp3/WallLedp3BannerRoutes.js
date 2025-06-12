const express = require('express');
const router = express.Router();
const WallLedp3BannerControllerr = require('../../../controllers/Cine Equipment/WallLedP3/WallLedP3BannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', WallLedp3BannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, WallLedp3BannerControllerr.getAllBanners);
router.post('/', auth, WallLedp3BannerControllerr.createBanner);
router.put('/:id', auth, WallLedp3BannerControllerr.updateBanner);
router.delete('/:id', auth, WallLedp3BannerControllerr.deleteBanner);

module.exports = router;