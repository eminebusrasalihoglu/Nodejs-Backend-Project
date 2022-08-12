const express = require('express');
const router = express.Router();
const path = require('path');

const add = require('./add');
const cardController = require('../controllers/cards');
router.get('/card/:cardId', cardController.getCardDetails);
module.exports = router;