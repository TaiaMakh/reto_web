const express = require('express');
const router  = express.Router();
const phonesList = require('../phones.json')

/* GET home page */
router.get('/', (req, res, next) => {
  res.json(phonesList)
});

module.exports = router;
