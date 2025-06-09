const express = require('express');
const router = express.Router();
const cineAdBannerControllerr = require('../../../controllers/Cinematography/Advertising/cineAdBannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', cineAdBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, cineAdBannerControllerr.getAllBanners);
router.post('/', auth, cineAdBannerControllerr.createBanner);
router.put('/:id', auth, cineAdBannerControllerr.updateBanner);
router.delete('/:id', auth, cineAdBannerControllerr.deleteBanner);

module.exports = router;