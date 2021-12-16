const User = require('../models/users')



module.exports.renderSignup = (req, res) => {
    res.render('auth/register');
};

module.exports.signUp = async(req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const regUser = await User.register(user, password);
        req.login(regUser, err => {
            if (err) return next(err);
            req.flash('success', 'Wolcome to Foodster!');
            res.redirect('/restaurants');
        })

    } catch (error) {
        req.flash('error', error.message);
        res.redirect('register');
    }


};
module.exports.renderLogin = (req, res) => {
    res.render('auth/login');
};

module.exports.Login = (req, res) => {
    req.flash('success', 'Welcome back!');
    const redirectUrl = req.session.returnTo || '/restaurants';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
};

module.exports.logOut = (req, res) => {
    req.logOut();
    req.flash('success', 'Goodbye!');
    res.redirect('/restaurants');
};