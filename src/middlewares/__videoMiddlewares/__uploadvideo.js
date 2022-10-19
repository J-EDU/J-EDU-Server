/* eslint-disable*/
const cloudinary = require('cloudinary').v2;

async function uplaodVideo(req, res,next){
    
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
                  resource_type: "auto",
                  folder: "images"
              })
          }   
          else if(req.files.video){
        result = await cloudinary.uploader.upload(req.files.video.tempFilePath,{
                public_id: `${Date.now()}`,
                resource_type: "auto",
                folder: "videos"
            })
          }else{
            res.status(301).json({
                msg:"we accept image and video for now "
            });

          }
          if(result.url){
            req.mediaUrl = result.url 
            console.log("Hassan ~ req.mediaUrl", req.mediaUrl)
            next();
            return;
          } 

    } catch (err) {
        console.log("Hassan ~ err", err)
        res.status(301).json({
            msg: err||"there is an error happend in uplad video"
        });
    }
  }
  
  module.exports = uplaodVideo;