const express = require("express");
const router = express.Router();
const UserSchema = require("../models/user");


/* клик по кнопки регистрации. */
router.get("/login", function (req, res, next) {
  res.render("login");
});

/* добавление юзера в базу */
router.post("/login", async function (req, res) {
  let newUser = new UserSchema({
    name: req.body.value,
    registration: req.body.value,
    isCarOwner: req.body.value,
  });
  await newUser.save();
  res.redirect(`/profile/${newUser.id}`);
});

module.exports = router;
