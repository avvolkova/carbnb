var express = require('express');
var router = express.Router();

/* перенаправляет на главную страницу */
router.get('/', function(req, res, next) {
    res.redirect('/service');
});

module.exports = router;