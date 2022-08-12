const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    res.render('main.pug', { title: 'Lingua' });
});
router.get('/Lingua', (req, res, next) => {
    res.render('main.pug', { title: 'Lingua' });
});

module.exports = router;