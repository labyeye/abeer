const express = require('express');
const router = express.Router();
const phoSportsBannerControllerr = require('../../../controllers/PhotoGraphy/Sports/phoSportsBannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', phoSportsBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, phoSportsBannerControllerr.getAllBanners);
router.post('/', auth, phoSportsBannerControllerr.createBanner);
router.put('/:id', auth, phoSportsBannerControllerr.updateBanner);
router.delete('/:id', auth, phoSportsBannerControllerr.deleteBanner);

module.exports = router;