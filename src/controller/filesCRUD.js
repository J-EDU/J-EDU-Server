/* eslint-disable*/
const cloudinaryClass = require("../collectionsAtAll/CloudinaryClass");
const { CommentDB,VideosDB, FilesDB, filesCollection } = require("../models");
// const cloudinary = require('cloudinary').v2;
const cloudinary = new cloudinaryClass()

const __addFiles = async (req, res, next) => {
  try {
    if(req.files){
    const result = await cloudinary.upload_file(req.files.file.tempFilePath);
     const createdFile = await filesCollection.CREATE({...req.body,URL :result.url,cloudinary_id:result.public_id ,userID:req.user.id});
     res.status(200).send(createdFile);
    }
    else{
     res.status(404).send("please provide file");
    }
  } catch (err) {
    next(`Error inside add Files function : ${err}`);
  }
};


const __deleteFile = async (req, res, next) => {
  try {
    let id = req.params.id;
    const file = await filesCollection.READ_ONE(id);
    await filesCollection.DELETE(id);
    if(file){
      let result =  await cloudinary.delete_file(file.cloudinary_id)
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
    const files = await filesCollection.READ_ALL();
    res.status(200).json({files});
    return;
  } catch (error) {
    next(`Error happend in getAllfiles ${error}`)
  }
};

module.exports = {
 __getFiles,
 __addFiles,
 __deleteFile
};
