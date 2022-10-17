/* eslint-disable*/
const express = require('express');

const router = express.Router();

const users = require("./users")
const videos = require("./videos")

router.get('/', (req, res) => {
  res.json({
    message: 'hello Root',
  });
});

router.use('/user',users );
router.use('/video',videos );

module.exports = router;
