/* eslint-disable*/
const express = require('express');

const router = express.Router();

const users = require("./users")
const videos = require("./videos")
const comments = require("./comments")
const course = require("./courses");
const feedback = require("./feedback");
const __isBlocked = require('../middlewares/__userMiddlewares/__isBlocked');
const ___isAuth = require('../middlewares/__userMiddlewares/__isAuth');


router.get('/', (req, res) => {
  res.json({
    message: 'hello Root',
  });
});

router.use('/user',users );
router.use('/video',__isBlocked ,___isAuth,videos );
router.use('/comment',__isBlocked ,___isAuth,comments)
router.use('/course',__isBlocked ,___isAuth,course)
router.use('/feedback',___isAuth,feedback)


module.exports = router;
