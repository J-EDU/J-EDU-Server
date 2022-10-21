/* eslint-disable*/
const { CommentDB, videoCollection } = require("../models");
const cloudinary = require("cloudinary").v2;

const __addVideo = async (req, res, next) => {
  try {
    const payload = {
      ...req.body,
      URL: req.mediaUrl,
      cloudinary_id: req.cloudinary_id,
      userID: req.user.id,
    };
    const video = await videoCollection.CREATE(payload);
    return res.status(200).send(video);
  } catch (err) {
    next(`videosCRUD.js ~ line 13 : ${err}`);
  }
};

const __deleteVideo = async (req, res, next) => {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

  try {
    const id = req.params.id;
    const video = await videoCollection.READ(id);
    const deleted = await videoCollection.DELETE(id);
    if (deleted) {
      let public_id = video.cloudinary_id;
      let result = await cloudinary.uploader.destroy(
        public_id,
        { type: "upload", resource_type: "video" },
        (result) => {
          return result;
        }
      );
      res.status(200).json({ result });
      return;
    } else {
      res.status(404).json({ msg: "there is no video with this id " });
    }
  } catch (err) {
    next(`videosCRUD.js ~ line 45: ${err}`);
  }
};

const __getVideos = async (req, res, next) => {
  try {
    const videos = await videoCollection.READ(CommentDB);
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
