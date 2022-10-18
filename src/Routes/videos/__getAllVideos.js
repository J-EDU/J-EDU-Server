/* eslint-disable*/
const express = require('express');
const {  VideosDB } = require('../../models');


const router = express.Router();

router.get('/',async (req, res,bayan) => {

    try {
      const videos = await VideosDB.findAll();
      res.videos = videos;
      res.status(200).json({videos});
      return;
    } catch (error) {
      bayan({message:`Error happend in getAllusers ${error}`})
    }
});

module.exports = router;

