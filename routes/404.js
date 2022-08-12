const express = require('express');
const router = express.Router();
const path = require('path');

const errorController = require('../controllers/errors');
router.use(errorController.get404);

module.exports = router;