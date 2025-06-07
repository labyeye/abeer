const express = require('express');
const router = express.Router();
const phoEventBannerControllerr = require('../../../controllers/PhotoGraphy/Event/phoeventBannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', phoEventBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, phoEventBannerControllerr.getAllBanners);
router.post('/', auth, phoEventBannerControllerr.createBanner);
router.put('/:id', auth, phoEventBannerControllerr.updateBanner);
router.delete('/:id', auth, phoEventBannerControllerr.deleteBanner);

module.exports = router;