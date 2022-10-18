/* eslint-disable*/
const express = require('express');

const router = express.Router();

const users = require("./users")
const videos = require("./videos")
const comments = require("./comments")
const course = require("./courses")

router.get('/', (req, res) => {
  res.json({
    message: 'hello Root',
  });
});

router.use('/user',users );
router.use('/video',videos );
router.use('/comment',comments)
router.use('/course',course)


module.exports = router;
