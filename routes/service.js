const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Article = require("../models/article");

const Moment = require("moment");
const MomentRange = require("moment-range");

const moment = MomentRange.extendMoment(Moment);

/* отрисовывает главную страницу */
router.get("/", function (req, res, next) {
  res.render("main");
});

/* осуществляет поиск и отрисовывает страницу с результатами поиска */
router.post("/search", async function (req, res, next) {
  const { city, datepicker } = req.body;
  const articlesByCity = await Article.find({ city });
  const rentStart = datepicker.split(" - ")[0];
  const rentEnd = datepicker.split(" - ")[1];
  console.log("datepicker---->", datepicker);
  const carAvalabilityArray = articlesByCity.map((car) => [
    ...car.busyFrom,
    ...car.busyUntil,
  ]);
  // console.log("arr---->", carAvalabilityArray);
  console.log(articlesByCity);
  // const carAvalabilityTime = articlesByCity.map(car => {
  //     car.busyFrom = new Date(car.busyFrom[0].replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3/$2/$1"));
  //     // return [car.busyFrom, car.busyUntil]
  // });

  // const range = moment().range(startDate, endDate);

  // if (articlesByCity) {
  //     articlesByCity
  // }
  res.render("search", { articlesByCity });
});

router.get("/:id", async function (req, res) {
  let articleId = req.params.id;
  let article = await Article.findById(articleId);
  console.log(article);
  res.render("article", { article });
});

module.exports = router;
