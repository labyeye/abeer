const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const homeslidesController = require('../controllers/homeslidesController');

router.get('/', homeslidesController.getSlides);
router.post('/', auth, homeslidesController.createSlide);
router.post('/reorder', auth, homeslidesController.reorderSlides);
router.delete('/:id', auth, homeslidesController.deleteSlide);

module.exports = router;