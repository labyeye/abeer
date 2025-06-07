const express = require('express');
const router = express.Router();
const cineSportsBannerControllerr = require('../../../controllers/Cinematography/Sports/cineSportsBannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', cineSportsBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, cineSportsBannerControllerr.getAllBanners);
router.post('/', auth, cineSportsBannerControllerr.createBanner);
router.put('/:id', auth, cineSportsBannerControllerr.updateBanner);
router.delete('/:id', auth, cineSportsBannerControllerr.deleteBanner);

module.exports = router;