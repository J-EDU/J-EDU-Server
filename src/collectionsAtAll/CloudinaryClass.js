/*eslint-disable */

const cloudinary = require('cloudinary').v2;

class CloudinaryClass{
    constructor() {
        cloudinary.config({ 
            cloud_name: process.env.CLOUD_NAME, 
            api_key: process.env.API_KEY, 
            api_secret:process.env.API_SECRET 
          });
    }
 
  
  
    async upload_video(video) {
      try {
      return await cloudinary.uploader.upload(video,{
            public_id: `${Date.now()}`,
            resource_type: "video",
            folder: "videos"
        })
      } catch (err) {
        throw new Error(err);
      }
    }

    async upload_image(image) {
        try {
            return await cloudinary.uploader.upload(image,{
              public_id: `${Date.now()}`,
              resource_type: "image",
              folder: "images"
          })
        } catch (err) {
          throw new Error(err);
        }
      }

      async upload_file(file) {
        try {
           return await cloudinary.uploader.upload(file,{
                public_id: `${Date.now()}`,
                resource_type: "auto",
                folder: "files"
            })
        } catch (err) {
          throw new Error(err);
        }
      }

      async upload_avatar(avatar) {
        try {
           return await cloudinary.uploader.upload(avatar,{
                public_id: `${Date.now()}`,
                resource_type: "image",
                folder: "avatar"
            })
        } catch (err) {
          throw new Error(err);
        }
      }
  
    async update_avatar(public_id, newAvatar) {
      try {
       this.delete_image(public_id)
       return this.upload_avatar(newAvatar)

      } catch (err) {
        throw new Error(err);
      }
    }
  
    async delete_video(public_id) {
      try {
       const result = await cloudinary.uploader.destroy(
          public_id,
          { type: "upload", resource_type: "video" },
          (result) => {
            return result;
          }
        );
        return result.result;
      } catch (err) {
        throw new Error(err);
      }
    }

    async delete_image(public_id) {
      try {
       const result = await cloudinary.uploader.destroy(
          public_id,
          { type: "upload", resource_type: "image" },
          (result) => {
            return result;
          }
        );
        return result.result;
      } catch (err) {
        throw new Error(err);
      }
    }

    async delete_file(public_id) {
      try {
       const result = await cloudinary.uploader.destroy(public_id);
        return result.result;
      } catch (err) {
        console.log("Hassan ~ file: CloudinaryClass.js ~ line 100 ~ err", err)
        throw new Error(err);
      }
    }



  }
  
  module.exports = CloudinaryClass;
  