const express = require('express');
const router = express.Router();
const phoFilmBannerControllerr = require('../../../controllers/PhotoGraphy/PhotoBook/phobookController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', phoFilmBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, phoFilmBannerControllerr.getAllBanners);
router.post('/', auth, phoFilmBannerControllerr.createBanner);
router.put('/:id', auth, phoFilmBannerControllerr.updateBanner);
router.delete('/:id', auth, phoFilmBannerControllerr.deleteBanner);

module.exports = router;