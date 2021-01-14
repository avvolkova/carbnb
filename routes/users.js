const express = require("express");
const router = express.Router();
const UserSchema = require("../models/user");

/* клик по кнопки регистрации. */
router.get("/login", function (req, res, next) {
  res.render("login");
});


router.get("/signup", function (req, res, next) {
  res.render("signup");
});

/* добавление юзера в базу */
router.post("/signup", async function (req, res) {
  console.log(req.body);
  let newUser = new UserSchema({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
    isCarOwner: false,
  });
  await newUser.save();
  res.redirect(`/profile/${newUser.id}`);
});

module.exports = router;
