const express = require("express");
const router = express.Router();

const User = require("../models/user");
/* функция для разлогирования */
const check = (req, res, next) => {
    console.log(req.session);
    if (req.session.userID) {
        next();
    } else {
        res.redirect("/");
    }
};

/* авторизация */
router
    .route("/login")
    .get(function(req, res, next) {
        res.render("login");
    })
    .post(async function(req, res, next) {
        let { name, password } = req.body;
        console.log(req.body);
        let userDB = await User.findOne({ name });
        console.log(userDB);
        if (userDB) {
            if (password == userDB.password) {
                req.session.userID = userDB._id;
                req.session.username = userDB.name;
                res.redirect(`/`);
            } else {
                res.render('login', { wrongPassword: true });
            }
        } else {
            res.render('login', { notFound: true });
        }
    });

/* регистрация */

router.get('/signup', function(req, res, next) {
    res.render("signup");
})

router.post('/signup', async function(req, res) {
    if (req.body) {
        const isExist = await User.findOne({ name: req.body.name })
        if (!isExist) {
            console.log('here');
            const newUser = new User({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,
                isCarOwner: false,
                img: '/img/user-avatar.jpg',
            });
            await newUser.save();
            req.session.userID = newUser._id;
            req.session.username = newUser.name;
            res.redirect(`/`);
        }
    } else {
        res.render('signup', { userExists: true });
    }
});

/* роутер разлогирования */
router.get("/logout", async function(req, res) {
    await req.session.destroy();
    res.redirect("/service");
});

router.get("/:id", check, async function(req, res, next) {
    let id = req.params.id;
    let user = await User.findById(id);
    res.render("profile", { user });
});

module.exports = router;
