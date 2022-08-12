const express = require('express');
const router = express.Router();
const path = require('path');

const add = require('./add');
const cardController = require('../controllers/cards');
router.get('/cardlist/:cardId', cardController.getEditCard);
router.post('/cardlist', cardController.postEditCard);

module.exports = router;
