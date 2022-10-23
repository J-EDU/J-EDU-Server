/* eslint-disable*/
const cloudinaryClass = require("../../collectionsAtAll/CloudinaryClass");
const { userCollection } = require("../../models");
const cloudinary = new cloudinaryClass()

async function __updateAvatar(req, res,next){
    try {
      if(!req.files){
        res.status(301).json({
            msg:"please add the image"
        });
        return;
      }

      if(req.user.cloudinary_id){
        await cloudinary.delete_image(req.user.cloudinary_id)
      }
          const result= await cloudinary.upload_avatar(req.files.image.tempFilePath)
        
          const  cloudinary_id= result.public_id;
          const  URL = result.url 
          
          const user = await userCollection.UPDATE(req.user.id,{cloudinary_id,URL})
          res.status(200).json({user})
    } catch (err) {
        res.status(301).json({
            msg: err||"there is an error happend in uplad avatar"
        });
    }
  }

  
 module.exports = __updateAvatar ;