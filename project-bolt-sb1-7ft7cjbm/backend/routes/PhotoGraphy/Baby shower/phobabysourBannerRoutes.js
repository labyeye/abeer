const express = require('express');
const router = express.Router();
const phoBabySourBannerControllerr = require('../../../controllers/PhotoGraphy/Baby shower/phobabysourBannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', phoBabySourBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, phoBabySourBannerControllerr.getAllBanners);
router.post('/', auth, phoBabySourBannerControllerr.createBanner);
router.put('/:id', auth, phoBabySourBannerControllerr.updateBanner);
router.delete('/:id', auth, phoBabySourBannerControllerr.deleteBanner);

module.exports = router;