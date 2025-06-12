const express = require('express');
const router = express.Router();
const CinemaLightBannerControllerr = require('../../../controllers/Cine Equipment/Cinema Light/CinemaLightBannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', CinemaLightBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, CinemaLightBannerControllerr.getAllBanners);
router.post('/', auth, CinemaLightBannerControllerr.createBanner);
router.put('/:id', auth, CinemaLightBannerControllerr.updateBanner);
router.delete('/:id', auth, CinemaLightBannerControllerr.deleteBanner);

module.exports = router;