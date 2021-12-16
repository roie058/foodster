const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/wrapasync');
const reviews = require('../controllers/reviews');
const { validateReview, isLoggedIn, isReviewAuthor } = require('../utils/middleware')

router.post('/', isLoggedIn, validateReview, wrapAsync(reviews.createReview));

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, wrapAsync(reviews.deleteReview))

module.exports = router;