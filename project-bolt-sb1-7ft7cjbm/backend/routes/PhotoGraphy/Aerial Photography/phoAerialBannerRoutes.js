const express = require('express');
const router = express.Router();
const phoAerialBannerControllerr = require('../../../controllers/PhotoGraphy/Aerial Photography/phoFilmBannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', phoAerialBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, phoAerialBannerControllerr.getAllBanners);
router.post('/', auth, phoAerialBannerControllerr.createBanner);
router.put('/:id', auth, phoAerialBannerControllerr.updateBanner);
router.delete('/:id', auth, phoAerialBannerControllerr.deleteBanner);

module.exports = router;