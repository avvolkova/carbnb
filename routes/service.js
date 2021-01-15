const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Article = require('../models/article')

/* отрисовывает главную страницу */
router.get('/', function(req, res, next) {
    res.render('main');
});

/* осуществляет поиск и отрисовывает страницу с результатами поиска */
router.post('/search', async function(req, res, next) {
    const city = req.body.city;
    const { city, datepicker } = req.body;
    const articlesByCity = await Article.find({ city });
    const rentStart = datepicker.split(' - ')[0];
    const rentEnd = datepicker.split(' - ')[1];
    console.log('datepicker---->', datepicker);
    const carAvalabilityArray = articlesByCity.map(car => [...car.busyFrom, ...car.busyUntil]);
    console.log('arr---->', carAvalabilityArray);

    articles.forEach(a => console.log(a.nameAuto));
    res.render('search', { articles });
});

module.exports = router;