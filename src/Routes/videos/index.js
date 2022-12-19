/* eslint-disable*/
const express = require('express');
const ___isAuth = require('../../middlewares/__userMiddlewares/__isAuth');
const {__addVideo,__getVideos,__deleteVideo}= require("../../controller/videosCRUD");
const __isBlocked = require('../../middlewares/__userMiddlewares/__isBlocked');
const __isTeacher=require('../../middlewares/__userMiddlewares/__isTeacher')

const router = express.Router();

router.get('/', ___isAuth,__isBlocked,__getVideos );
router.post('/addVideo',___isAuth,__isBlocked,__addVideo);
router.delete('/deleteVideo/:id',___isAuth,__isBlocked,__deleteVideo );


module.exports = router;