const express = require('express');
const router = express.Router();
const CinemaCameraBannerControllerr = require('../../../controllers/Cine Equipment/Cinema Camera/CinemaCameraBannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', CinemaCameraBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, CinemaCameraBannerControllerr.getAllBanners);
router.post('/', auth, CinemaCameraBannerControllerr.createBanner);
router.put('/:id', auth, CinemaCameraBannerControllerr.updateBanner);
router.delete('/:id', auth, CinemaCameraBannerControllerr.deleteBanner);

module.exports = router;