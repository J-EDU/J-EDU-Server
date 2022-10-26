/* eslint-disable*/
const CloudinaryClass = require("../collectionsAtAll/CloudinaryClass");
const { CommentDB, videoCollection } = require("../models");
const cloudinary = new CloudinaryClass()

const __addVideo = async (req, res, next) => {
  try {
    if(req.files){
      console.log(req.files.video.tempFilePath)
    const result = await cloudinary.upload_video(req.files.video.tempFilePath);
    const video = await videoCollection.CREATE({...req.body,URL :result.url,cloudinary_id:result.public_id ,userID:req.user.id});
     res.status(200).send(video);
    }
    else{
     res.status(404).send("please provide Video");
    }
  } catch (err) {
    next(`videosCRUD.js ~ line 13 : ${err}`);
  }
};

const __deleteVideo = async (req, res, next) => {
  try {
    const id = req.params.id;
    const video = await videoCollection.READ_ONE(id);
   await videoCollection.DELETE(id,req.user.role,req.user.id);
    if (video) {
     const result = await cloudinary.delete_video(video.cloudinary_id)
      res.status(200).json({ result });
      return;
    } else {
      res.status(404).json({ msg: "there is no video with this id " });
    }
  } catch (err) {
    console.log("Hassan ~ file: videosCRUD.js ~ line 36 ~ err", err)
    next(`videosCRUD.js ~ line 37: ${err}`);
  }
};

const __getVideos = async (req, res, next) => {
  try {
    const videos = await videoCollection.READ_ALL(CommentDB);
    if (videos) return res.status(200).json({ videos });
    return res.status(202).json({ msg: "No Videos" });
  } catch (err) {
    next(`videosCRUD.js ~ line 59 ${err}`);
  }
};

module.exports = {
  __addVideo,
  __deleteVideo,
  __getVideos,
};
