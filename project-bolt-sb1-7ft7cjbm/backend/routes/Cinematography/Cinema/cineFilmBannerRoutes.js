const express = require('express');
const router = express.Router();
const cineFilmBannerControllerr = require('../../../controllers/Cinematography/Cinema/cineFilmBannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', cineFilmBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, cineFilmBannerControllerr.getAllBanners);
router.post('/', auth, cineFilmBannerControllerr.createBanner);
router.put('/:id', auth, cineFilmBannerControllerr.updateBanner);
router.delete('/:id', auth, cineFilmBannerControllerr.deleteBanner);

module.exports = router;