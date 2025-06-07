const express = require('express');
const router = express.Router();
const cinePoliticalBannerControllerr = require('../../../controllers/Cinematography/Political/cinePoliticalBannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', cinePoliticalBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, cinePoliticalBannerControllerr.getAllBanners);
router.post('/', auth, cinePoliticalBannerControllerr.createBanner);
router.put('/:id', auth, cinePoliticalBannerControllerr.updateBanner);
router.delete('/:id', auth, cinePoliticalBannerControllerr.deleteBanner);

module.exports = router;