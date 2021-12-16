const express = require('express');
const router = express.Router();
const restaurants = require('../controllers/restaurants')
const wrapAsync = require('../utils/wrapAsync');
const { isLoggedIn, isAuthor, validateRestaurant } = require('../utils/middleware')
const multer = require('multer')
const { storage } = require('../cloudinary')
const upload = multer({ storage })

router.route('/')
    .get(wrapAsync(restaurants.index))
    .post(isLoggedIn, upload.array('Image'), validateRestaurant, wrapAsync(restaurants.createRestaurant));

router.get('/new', isLoggedIn, restaurants.renderNewForm);

router.route('/:id')
    .get(wrapAsync(restaurants.showRestaurant))
    .put(isLoggedIn, isAuthor, upload.array('Image'), validateRestaurant, wrapAsync(restaurants.updateRestaurant))
    .delete(isLoggedIn, isAuthor, wrapAsync(restaurants.deleteRestaurant));


router.get('/:id/edit', isLoggedIn, isAuthor, wrapAsync(restaurants.renderEditForm));

module.exports = router;