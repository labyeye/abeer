const express = require('express');
const router = express.Router();
const MusicEntertainmentBannerControllerr = require('../../../controllers/Audio Studio/MusicEntertainment/MusicEntertainmentBannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', MusicEntertainmentBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, MusicEntertainmentBannerControllerr.getAllBanners);
router.post('/', auth, MusicEntertainmentBannerControllerr.createBanner);
router.put('/:id', auth, MusicEntertainmentBannerControllerr.updateBanner);
router.delete('/:id', auth, MusicEntertainmentBannerControllerr.deleteBanner);

module.exports = router;