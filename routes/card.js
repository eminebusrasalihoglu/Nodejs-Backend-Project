const express = require('express');
const router = express.Router();
const path = require('path');

const add = require('./add');
const cardController = require('../controllers/cards');
router.get('/card', cardController.getCard);


module.exports = router;


//res.sendFile(path.join(__dirname, '../', 'views', 'card.html'));