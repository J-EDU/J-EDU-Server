/* eslint-disable*/
const express = require('express');
const __uploadvideo = require('../../middlewares/__videoMiddlewares/__uploadvideo');
const ___isAuth = require('../../middlewares/__userMiddlewares/__isAuth');
const {__addVideo,__getVideos,__deleteVideo}= require("../../controller/videosCRUD");

const router = express.Router();

router.get('/', __getVideos );
router.post('/addReport',__addVideo );
router.delete('/deletereport/:id',__deleteVideo );


module.exports = router;