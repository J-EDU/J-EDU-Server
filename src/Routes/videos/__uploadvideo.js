/* eslint-disable*/
const express = require('express');
const { VideosDB } = require('../../models');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const router = express.Router();



async function uplaodVideo(req, res,next){
    try {
        cloudinary.config({ 
            cloud_name: process.env.CLOUD_NAME, 
            api_key: process.env.API_KEY, 
            api_secret:process.env.API_SECRET 
          });
          var file= req.files
          
          res.json({file})


          if(req.files.image){
              const result = await cloudinary.uploader.upload(req.files.image.tempFilePath,{
                  public_id: `${Date.now()}`,
                  resource_type: "auto",
                  folder: "images"
              })
              res.json(result.url);
              
          }   
          if(req.files.video){
            const result = await cloudinary.uploader.upload(req.files.video.tempFilePath,{
                public_id: `${Date.now()}`,
                resource_type: "auto",
                folder: "videos"
            })
            res.json(result.url);
          } 

    } catch (err) {
      console.log("Hassan ~ err", err)
      next(`Error inside addVideo function : ${err}`);
    }
  }
  
  module.exports = uplaodVideo;