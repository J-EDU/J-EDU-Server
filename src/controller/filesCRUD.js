/* eslint-disable*/
const { CommentDB,VideosDB, FilesDB } = require("../models");
const cloudinary = require('cloudinary').v2;

const __addFiles = async (req, res, next) => {
  try {
    const createdFile = await FilesDB.create({...req.body,URL :req.mediaUrl,cloudinary_id: req.cloudinary_id ,userID:req.user.id});
    res.status(200).send(createdFile);
  } catch (err) {
    console.log("Hassan ~ err", err)
    res.status(301).json({
      msg: err ||"there is an error happend in add video video"
  });
  }
};


const __deleteFile = async (req, res, next) => {

  cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret:process.env.API_SECRET 
  });
  
  try {
    let id = req.params.id;
    let file = await FilesDB.findOne({ where: { id } });
    await FilesDB.destroy({ where: { id } });

    if(video){
      let public_id = file.cloudinary_id;
      let result =  await cloudinary.uploader.destroy(public_id, {type : 'upload', resource_type : 'video'}, result => {
        return result;
      })
      res.status(202).json({result})
      return;
    }
    else{
      res.status(301).json({"msg" : "there is no File with this id "})

    }

  } catch (err) {
    console.log("Hassan ~ err", err)
    next(`Error inside deleteFile function : ${err}`);
  }
};

const __getFiles = async (req, res, next) => {

  try {
    const files = await FilesDB.findAll(
      // {include: [
      //   {
      //     model: CommentDB,
      //     // include: [{ model: Comment }],
      //   },
      // ],}
      );
    res.files =files;
    res.status(200).json({files});
    return;
  } catch (error) {
    bayan({message:`Error happend in getAllfiles ${error}`})
  }
};

module.exports = {
 __getFiles,
 __addFiles,
 __deleteFile
};
