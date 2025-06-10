const express = require('express');
const router = express.Router();
const CampaigningBannerControllerr = require('../../controllers/Campaigning/CampaigningBannerController');
const auth = require('../../middleware/auth');

// Public routes
router.get('/active', CampaigningBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, CampaigningBannerControllerr.getAllBanners);
router.post('/', auth, CampaigningBannerControllerr.createBanner);
router.put('/:id', auth, CampaigningBannerControllerr.updateBanner);
router.delete('/:id', auth, CampaigningBannerControllerr.deleteBanner);

module.exports = router;