/* eslint-disable*/
const express = require('express');

const router = express.Router();

const users = require("./users")
const videos = require("./videos")
const comments = require("./comments")
const course = require("./courses");
const feedback = require("./feedback");
const reports = require("./videoReport");
const files = require("./files");
const replay = require("./replay");
const whishList = require('./wishList')
const quiz = require("./quiz");
const certeficate = require("./certeficate");
const __isBlocked = require('../middlewares/__userMiddlewares/__isBlocked');
const __isAuth = require('../middlewares/__userMiddlewares/__isAuth');
const announcement = require("./announcement");
const watchHistory = require("./watchHistory")



router.get('/', (req, res) => {
  res.json({
    message: 'hello ',
  });
});

router.use('/user',users );
router.use('/video',videos );
router.use('/comment',comments)
router.use('/course',course)
router.use('/feedback',__isAuth,feedback)
router.use('/report',__isAuth,reports )
router.use('/replay',__isAuth,replay )
router.use('/files',__isAuth,files )
router.use('/wishList',whishList)
router.use('/announcement',announcement )
router.use('/quiz',quiz )
router.use('/certificate',certeficate )
router.use('/watchhistory',watchHistory )


module.exports = router;
