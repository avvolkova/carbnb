const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Article = require("../models/article");

const Moment = require("moment");
const MomentRange = require("moment-range");

const moment = MomentRange.extendMoment(Moment);

/* отрисовывает главную страницу */
router.get("/", function(req, res, next) {
    res.render("main");
});

/* осуществляет поиск и отрисовывает страницу с результатами поиска */
router.post('/search', async function(req, res, next) {
    const { city, datepicker } = req.body;
    const articlesByCity = await Article.find({ city });
    const rentStart = new Date(new Date(datepicker.split(' - ')[0]).setHours(3));
    const rentEnd = new Date(new Date(new Date(datepicker.split(' - ')[1]).setHours(3)));

    // console.log('datepicker---->', rentStart, rentEnd);

    const isIntersection = (startDate, endDate, checkedDate) => {
        // console.log('startDate, endDate, checkedDate---->', startDate, endDate, checkedDate);
        const range = moment().range(startDate, endDate);
        return range.contains(checkedDate);
    }

    const articlesToShow = articlesByCity.filter(article => {
        const intervals = article.busyIntervals;
        for (let i = 0; i < intervals.length; i++) {
            const interval = intervals[i];
            const busyFrom = interval[0];
            const busyUntil = interval[1];

            console.log('busyFrom', busyFrom);
            console.log('busyUntil', busyUntil);
            console.log('rentStart', rentStart);
            console.log('rentStart', rentEnd);
            console.log('intersec??--->', isIntersection(new Date(busyFrom), new Date(busyUntil), rentStart) && isIntersection(new Date(busyFrom), new Date(busyUntil), rentEnd));
            if ((isIntersection(new Date(busyFrom), new Date(busyUntil), rentStart) &&
                    isIntersection(new Date(busyFrom), new Date(busyUntil), rentEnd))) {
                continue
            } else {
                return article;
            }
        }
    })

    console.log('articlesToShow--->', articlesByCity);

    res.render('search', { articlesByCity });
});

router.get("/:id", async function(req, res, next) {
    const id = req.params.id;
    const article = await Article.findById(id);
    res.render("article", { article });
});




module.exports = router;