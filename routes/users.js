const express = require("express");
const router = express.Router();
const UserSchema = require("../models/user");

/* клик по кнопке profile - открытие формы входа */
router.get("/login", function(req, res, next) {
    res.render("login");
});

/* клик по кнопке регистрация в форме входа - открытие формы регистрации */

router.get("/signup", function(req, res, next) {
    res.render("signup");
});

/* добавление юзера в базу */
router.post("/signup", async function(req, res) {
    let newUser = new UserSchema({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        isCarOwner: false,
    });
    await newUser.save();
    req.session.userID = newUser._id;
    req.session.username = newUser.name;

    res.redirect(`/profile/${newUser.id}`);
});


module.exports = router;