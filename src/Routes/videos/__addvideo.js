/* eslint-disable*/
const express = require('express');
const { VideosDB } = require('../../models');
const uplaodVideo = require('./__uploadvideo');
const router = express.Router();



router.post('/',uplaodVideo , async (req, res,next) =>{
    try {
      
    
      let createdVideo = await VideosDB.create(req.body);
      res.status(201).json(createdVideo);
    } catch (err) {
      console.log("Hassan ~ err", err)
      next(`Error inside addVideo function : ${err}`);
    }
  });
  
  module.exports = router;