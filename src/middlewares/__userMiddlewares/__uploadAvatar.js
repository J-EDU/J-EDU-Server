/* eslint-disable*/
const cloudinary = require('cloudinary').v2;

async function __uplaodVideo(req, res,next){
    console.log("__uplaodVideo,__addVideo")
    try {

        let result = null; 
        cloudinary.config({ 
            cloud_name: process.env.CLOUD_NAME, 
            api_key: process.env.API_KEY, 
            api_secret:process.env.API_SECRET 
          });
          
          if(!req.files){
            res.status(301).json({
                msg:"please add the file"
            });
            return;
          }
          if(req.files.image){
            result = await cloudinary.uploader.upload(req.files.image.tempFilePath,{
                  public_id: `${Date.now()}`,
                  resource_type: "image",
                  folder: "Avatars"
              })
          }   
            else{
            res.status(301).json({
                msg:"we accept image"
            });

          }

          if(result.url){
            req.cloudinary_id= result.public_id;
            req.mediaUrl = result.url 
            console.log("Hassan ~ req.mediaUrl", req.mediaUrl)
            next();
            return;
          } 

    } catch (err) {
        console.log("Hassan ~ err", err)
        res.status(301).json({
            msg: err||"there is an error happend in uplad avatar"
        });
    }
  }

  
 module.exports = __uplaodVideo ;