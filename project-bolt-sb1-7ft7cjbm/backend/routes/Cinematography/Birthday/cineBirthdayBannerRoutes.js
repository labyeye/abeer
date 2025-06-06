const express = require('express');
const router = express.Router();
const cineweddingBannerControllerr = require('../../../controllers/Cinematography/Birthday/cinebirthdayBannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', cineweddingBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, cineweddingBannerControllerr.getAllBanners);
router.post('/', auth, cineweddingBannerControllerr.createBanner);
router.put('/:id', auth, cineweddingBannerControllerr.updateBanner);
router.delete('/:id', auth, cineweddingBannerControllerr.deleteBanner);

module.exports = router;