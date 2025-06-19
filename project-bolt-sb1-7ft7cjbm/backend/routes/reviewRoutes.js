const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// GET all reviews
router.get('/', reviewController.getReviews);

// POST create a new review
router.post('/', reviewController.createReview);

module.exports = router;