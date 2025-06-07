const express = require('express');
const router = express.Router();
const phoModelBannerControllerr = require('../../../controllers/PhotoGraphy/Modelling/phoModelController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', phoModelBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, phoModelBannerControllerr.getAllBanners);
router.post('/', auth, phoModelBannerControllerr.createBanner);
router.put('/:id', auth, phoModelBannerControllerr.updateBanner);
router.delete('/:id', auth, phoModelBannerControllerr.deleteBanner);

module.exports = router;