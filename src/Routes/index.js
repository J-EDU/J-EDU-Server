/* eslint-disable*/
const express = require('express');

const router = express.Router();

const users = require("./users")
const videos = require("./videos")
const comments = require("./comments")
const course = require("./courses");
const feedback = require("./feedback");
const reports = require("./videoReport");
const replay = require("./replay");
const quiz=require("./quiz")
const question=require("./question.js")
const __isBlocked = require('../middlewares/__userMiddlewares/__isBlocked');
const __isAuth = require('../middlewares/__userMiddlewares/__isAuth');


router.get('/', (req, res) => {
  res.json({
    message: 'hello Root',
  });
});

router.use('/user',users );
router.use('/video',__isBlocked ,__isAuth,videos );
router.use('/comment',__isBlocked ,__isAuth,comments)
router.use('/course',__isBlocked ,__isAuth,course)
router.use('/feedback',__isAuth,feedback)
router.use('/report',__isAuth,reports )
router.use('/replay',__isAuth,replay )
router.use('/question',question )
router.use('/quiz',quiz )

module.exports = router;
