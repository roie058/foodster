const express = require('express');
const passport = require('passport');
const users = require('../controllers/user');
const router = express.Router();
const User = require('../models/users')
const wrapAsync = require('../utils/wrapasync');

router.route('/register')
    .get(users.renderSignup)
    .post(wrapAsync(users.signUp));


router.route('/login')
    .get(users.renderLogin)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.Login);


router.get('/logout', users.logOut);



module.exports = router;