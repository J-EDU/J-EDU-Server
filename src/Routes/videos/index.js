/* eslint-disable*/
const express = require('express');
const __isBlocked = require('../../middlewares/__userMiddlewares/__isBlocked');
const ___isAuth = require('../../middlewares/__userMiddlewares/__isAuth');
const {__addVideo,__getVideos,__deleteVideo}= require("../../controller/videosCRUD");

const router = express.Router();

router.get('/', __getVideos );
router.post('/addVideo',___isAuth,__addVideo );
router.delete('/deleteVideo/:id',__deleteVideo );


module.exports = router;