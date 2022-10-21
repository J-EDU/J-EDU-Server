/* eslint-disable*/
const { CommentDB,VideosDB } = require("../models");
const cloudinary = require('cloudinary').v2;

const __addVideo = async (req, res, next) => {
  try {
    const createdVideo = await VideosDB.create({...req.body,URL :req.mediaUrl,cloudinary_id: req.cloudinary_id ,userID:req.user.id});
    res.status(200).send(createdVideo);
  } catch (err) {
    console.log("Hassan ~ err", err)
    res.status(301).json({
      msg: err ||"there is an error happend in add video video"
  });
  }
};


const __deleteVideo = async (req, res, next) => {

  cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret:process.env.API_SECRET 
  });
  
  try {
    let id = req.params.id;
    let video = await VideosDB.findOne({ where: { id } });
    await VideosDB.destroy({ where: { id } });

    if(video){
      let public_id = video.cloudinary_id;
      let result =  await cloudinary.uploader.destroy(public_id, {type : 'upload', resource_type : 'video'}, result => {
        return result;
      })
      res.status(202).json({result})
      return;
    }
    else{
      res.status(301).json({"msg" : "there is no video with this id "})

    }

  } catch (err) {
    console.log("Hassan ~ err", err)
    next(`Error inside deleteVideo function : ${err}`);
  }
};

const __getVideos = async (req, res, next) => {

  try {
    const videos = await VideosDB.findAll({
      include: [
        {
          model: CommentDB,
          // include: [{ model: Comment }],
        },
      ],
    });
    res.videos = videos;
    res.status(200).json({videos});
    return;
  } catch (error) {
    bayan({message:`Error happend in getAllusers ${error}`})
  }
};

module.exports = {
  __addVideo,
  __deleteVideo,
  __getVideos
};
