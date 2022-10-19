/* eslint-disable*/
const { CommentDB,VideosDB } = require("../models");

const __addVideo = async (req, res, next) => {
  try {
    let createdVideo = await VideosDB.create({...req.body,URL : req.mediaUrl,userID:req.user.id});
    res.status(201).json(createdVideo);
  } catch (err) {
    console.log("Hassan ~ err", err)
    res.status(301).json({
      msg: err ||"there is an error happend in add video video"
  });
  }
};

const __deleteVideo = async (req, res, next) => {
  try {
    let id = req.params.id;
    let deletevideo = await VideosDB.destroy({ where: { id } });
    res.status(202).json({iten: deletevideo})
  } catch (err) {
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
  __getVideos,
};
