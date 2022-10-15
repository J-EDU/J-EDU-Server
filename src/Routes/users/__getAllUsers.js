/* eslint-disable*/
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Get All users',
  });
});


module.exports = router;
