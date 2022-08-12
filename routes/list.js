const express = require('express');
const router = express.Router();
const path = require('path');

const listController = require('../controllers/lists');
router.get('/list', listController.getList);

module.exports = router;