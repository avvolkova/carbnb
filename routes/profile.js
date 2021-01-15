const express = require("express");
const router = express.Router();

/* переход на профиль */
router.get("/:id", function (req, res) {
  let idUser = req.params.id;
  res.redirect(`profile/${idUser}`);
});

/* клик по кнопке создать объявление */
router.get("/create", function (req, res) {
  res.redirect('create')
})
     