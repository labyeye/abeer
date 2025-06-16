const express = require('express');
const router = express.Router();
const GradingBannerControllerr = require('../../../controllers/Post Production/Grading/GradingBannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', GradingBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, GradingBannerControllerr.getAllBanners);
router.post('/', auth, GradingBannerControllerr.createBanner);
router.put('/:id', auth, GradingBannerControllerr.updateBanner);
router.delete('/:id', auth, GradingBannerControllerr.deleteBanner);

module.exports = router;