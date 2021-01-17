const express = require("express");
const router = express.Router();

const UserSchema = require("../models/user");
/* функция для разлогирования */
const check = (req, res, next) => {
  console.log(req.session);
  if (req.session.userID) {
    next();
  } else {
    res.redirect("/");
  }
};



/* клик по кнопке регистрации. */
router
  .route("/login")
  .get(function (req, res, next) {
    res.render("login");
  })
  .post(async function (req, res, next) {
    let username = req.body.nameUser;
    let userDB = await UserSchema.findOne({ name: username });
    let id = userDB._id;
    req.session.userID = id;
    req.session.username = userDB.name;
    res.redirect(`/`);
  });

router
  .route("/signup")
  .get(function (req, res, next) {
    res.render("signup");
  })
  .post(async function (req, res) {
    console.log(req.body);
    let newUser = new UserSchema({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      isCarOwner: false,
    });
    await newUser.save();
    req.session.userID = newUser._id;
    req.session.username = newUser.name;
    res.redirect(`/`);
  });

/* роутер разлогирования */
router.get("/logout", async function (req, res) {
  await req.session.destroy();
  res.redirect("/service");
});

router.get("/:id", check, async function (req, res, next) {
  let id = req.params.id;
  let user = await UserSchema.findById(id);
  res.render("profile", { user });
});

module.exports = router;
