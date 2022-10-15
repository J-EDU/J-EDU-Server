/* eslint-disable*/
const express = require('express');

const router = express.Router();

const users = require("./users")

router.get('/', (req, res) => {
  res.json({
    message: 'hello Root',
  });
});

router.use('/user',users );

module.exports = router;
