const express = require('express');
const router = express.Router();
const phoBabyShootBannerControllerr = require('../../../controllers/PhotoGraphy/Baby Shoot/phobabyShootBannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', phoBabyShootBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, phoBabyShootBannerControllerr.getAllBanners);
router.post('/', auth, phoBabyShootBannerControllerr.createBanner);
router.put('/:id', auth, phoBabyShootBannerControllerr.updateBanner);
router.delete('/:id', auth, phoBabyShootBannerControllerr.deleteBanner);

module.exports = router;