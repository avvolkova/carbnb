const express = require('express');
const router = express.Router();

/* отрисовывает главную страницу */
router.get('/', function(req, res, next) {
    res.render('main');
});

/* осуществляет поиск и отрисовывает страницу с результатами поиска */
router.post('/seach', async function(req, res, next) {
    const form = document.getElementById('temp');
    const temp = form.temp.value;
    const temp = form.temp.value;
    const temp = form.temp.value;
    const findByCity = async(city) => {
        return await Article.find({ city })
    }
    const citySearchResults = await findByCity(temp);
    "TODO: поиск по дате и цене"
    if (temp2) {
        citySearchResults
    }
    res.render('search');
});

module.exports = router;
module.exports = router;