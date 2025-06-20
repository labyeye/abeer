const express = require('express');
const router = express.Router();
const GovernmentBannerControllerr = require('../../controllers/Government Tender/GovernmentBannerController');
const auth = require('../../middleware/auth');

// Public routes
router.get('/active', GovernmentBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, GovernmentBannerControllerr.getAllBanners);
router.post('/', auth, GovernmentBannerControllerr.createBanner);
router.put('/:id', auth, GovernmentBannerControllerr.updateBanner);
router.delete('/:id', auth, GovernmentBannerControllerr.deleteBanner);

module.exports = router;