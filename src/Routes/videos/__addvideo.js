/* eslint-disable*/
const express = require('express');
const { VideosDB } = require('../../models');
const uplaodVideo = require('./__uploadvideo');
const router = express.Router();


router.post('/',uplaodVideo , async (req, res,next) =>{
    try {
      let createdVideo = await VideosDB.create({...req.body,URL : req.mediaUrl,userID:req.user.id});
      res.status(201).json(createdVideo);
    } catch (err) {
      console.log("Hassan ~ err", err)
      res.status(301).json({
        msg: err ||"there is an error happend in add video video"
    });
    }
  });
  
  module.exports = router;