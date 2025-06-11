const express = require('express');
const router = express.Router();
const EducationalBannerControllerr = require('../../../controllers/Audio Studio/Educational/EducationalBannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', EducationalBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, EducationalBannerControllerr.getAllBanners);
router.post('/', auth, EducationalBannerControllerr.createBanner);
router.put('/:id', auth, EducationalBannerControllerr.updateBanner);
router.delete('/:id', auth, EducationalBannerControllerr.deleteBanner);

module.exports = router;