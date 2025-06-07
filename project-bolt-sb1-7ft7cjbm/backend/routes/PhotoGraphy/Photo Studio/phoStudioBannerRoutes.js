const express = require('express');
const router = express.Router();
const phoStudioBannerControllerr = require('../../../controllers/PhotoGraphy/Photo Studio/phoStudioBannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', phoStudioBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, phoStudioBannerControllerr.getAllBanners);
router.post('/', auth, phoStudioBannerControllerr.createBanner);
router.put('/:id', auth, phoStudioBannerControllerr.updateBanner);
router.delete('/:id', auth, phoStudioBannerControllerr.deleteBanner);

module.exports = router;