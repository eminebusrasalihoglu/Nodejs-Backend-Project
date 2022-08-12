const express = require('express');
const router = express.Router();
const path = require('path');

const addController = require('../controllers/cards');
router.get('/add', addController.getAddCard);
router.post('/add', addController.postAddCard);

module.exports = router;