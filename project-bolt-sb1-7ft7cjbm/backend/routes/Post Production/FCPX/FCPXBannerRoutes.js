const express = require('express');
const router = express.Router();
const FCPXBannerControllerr = require('../../../controllers/Post Production/FCPX/FCPXBannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', FCPXBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, FCPXBannerControllerr.getAllBanners);
router.post('/', auth, FCPXBannerControllerr.createBanner);
router.put('/:id', auth, FCPXBannerControllerr.updateBanner);
router.delete('/:id', auth, FCPXBannerControllerr.deleteBanner);

module.exports = router;