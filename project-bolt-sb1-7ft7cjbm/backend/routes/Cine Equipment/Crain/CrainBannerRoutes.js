const express = require('express');
const router = express.Router();
const CrainBannerControllerr = require('../../../controllers/Cine Equipment/Crain/CrainBannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', CrainBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, CrainBannerControllerr.getAllBanners);
router.post('/', auth, CrainBannerControllerr.createBanner);
router.put('/:id', auth, CrainBannerControllerr.updateBanner);
router.delete('/:id', auth, CrainBannerControllerr.deleteBanner);

module.exports = router;