const express = require('express');
const router = express.Router();
const phoPoliticalBannerControllerr = require('../../../controllers/PhotoGraphy/Political/phoPoliticalBannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', phoPoliticalBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, phoPoliticalBannerControllerr.getAllBanners);
router.post('/', auth, phoPoliticalBannerControllerr.createBanner);
router.put('/:id', auth, phoPoliticalBannerControllerr.updateBanner);
router.delete('/:id', auth, phoPoliticalBannerControllerr.deleteBanner);

module.exports = router;