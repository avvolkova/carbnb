const express = require("express");
const router = express.Router();
const ArticleSchema = require("./article");

/* создание объявления */
router.get("/:id", function (req, res) {
  let newArticle = {
    nameAuto: req.body.value,
    carOwner: req.body.value,
    transmission: req.body.value,
    yearAuto: req.body.value,
    mileage: req.body.value,
    isActive: req.body.value,
  };
});
