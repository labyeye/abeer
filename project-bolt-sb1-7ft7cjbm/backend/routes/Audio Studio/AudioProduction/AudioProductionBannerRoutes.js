const express = require('express');
const router = express.Router();
const AudioProductionBannerControllerr = require('../../../controllers/Audio Studio/AudioProduction/AudioProductionBannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', AudioProductionBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, AudioProductionBannerControllerr.getAllBanners);
router.post('/', auth, AudioProductionBannerControllerr.createBanner);
router.put('/:id', auth, AudioProductionBannerControllerr.updateBanner);
router.delete('/:id', auth, AudioProductionBannerControllerr.deleteBanner);

module.exports = router;