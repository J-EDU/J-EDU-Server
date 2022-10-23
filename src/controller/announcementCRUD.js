/* eslint-disable*/

const {AnnouncementDB,announcementCollection} = require("../models");
const cloudinaryClass = require("../collectionsAtAll/CloudinaryClass");

const cloudinary = new cloudinaryClass()

const __addAnnouncement = async (req, res, next) => {
  try {
    if(req.files){
    const result = await cloudinary.upload_file(req.files.announcement.tempFilePath);
     const createdAnnouncement = await announcementCollection.CREATE({...req.body,URL :result.url,cloudinary_id:result.public_id ,userID:req.user.id});
     res.status(200).send(createdAnnouncement);
    }
    else{
     res.status(404).send("please provide announcement");
    }
  } catch (err) {
    next(`Error inside add announcement function : ${err}`);
  }
};

const __deleteAnnouncement = async (req, res, next) => {
  try {
    let id = req.params.id;
    const file = await announcementCollection.READ_ONE(id);
    await announcementCollection.DELETE(id);
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




const __getAnnouncement = async (req, res, next) => {
  try {
    const files = await announcementCollection.READ_ALL();
    res.status(200).json({files});
    return;
  } catch (error) {
    next(`Error happend in getAllAnnouncements ${error}`)
  }
};


module.exports = {
  __addAnnouncement,
  __deleteAnnouncement,
  __getAnnouncement,
  
};