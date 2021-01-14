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
    const articles = await Article.find({ nameAuto: 'mazda' })
        // const findByCity = async(city) => {
        //     return await Article.find({ city })
        // }
        // const citySearchResults = await findByCity(temp);
    "TODO: поиск по дате"
    // if (temp2) {
    //     citySearchResults
    // }
    articles.forEach(a => console.log(a.nameAuto));
    res.render('search', { articles });
});

module.exports = router;
