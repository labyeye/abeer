const express = require('express');
const router = express.Router();
const VFXBannerControllerr = require('../../../controllers/Post Production/VFX/VFXBannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', VFXBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, VFXBannerControllerr.getAllBanners);
router.post('/', auth, VFXBannerControllerr.createBanner);
router.put('/:id', auth, VFXBannerControllerr.updateBanner);
router.delete('/:id', auth, VFXBannerControllerr.deleteBanner);

module.exports = router;