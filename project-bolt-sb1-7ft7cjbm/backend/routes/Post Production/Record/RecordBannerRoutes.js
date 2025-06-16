const express = require('express');
const router = express.Router();
const RecordBannerControllerr = require('../../../controllers/Post Production/Record/RecordBannerController');
const auth = require('../../../middleware/auth');

// Public routes
router.get('/active', RecordBannerControllerr.getActiveBanner);

// Admin routes
router.get('/', auth, RecordBannerControllerr.getAllBanners);
router.post('/', auth, RecordBannerControllerr.createBanner);
router.put('/:id', auth, RecordBannerControllerr.updateBanner);
router.delete('/:id', auth, RecordBannerControllerr.deleteBanner);

module.exports = router;