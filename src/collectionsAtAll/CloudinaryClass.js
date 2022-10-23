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
            folder: "Videos"
        })
      } catch (err) {
        throw new Error(err);
      }
    }

    async do_Certificate(data) {
      try {

        let result=cloudinary.image("dark_xvcelz", 
        {
          transformation: [
          {width: 500 ,crop: "scale"},
          {color: "#000000", overlay: {font_family: "Times", font_size: 15, font_weight: "bold", text: `${data.course}` }},
          {flags: "layer_apply", gravity: "center", y: -45},

          {width: 500 ,crop: "scale"},
          {color: "#03A5C7", overlay: {font_family: "Sacramento", font_size: 30, font_weight: "bold", text: `${data.name}`}},
          {flags: "layer_apply", gravity: "center", y: 15}

          ]
         
        }

        )
        const src = result.split("'")
        console.log("Hassan ~ file: CloudinaryClass.js ~ line 48 ~ src", src)

          return src[1]
    
      } catch (err) {
        throw new Error(err);
      }
    }

    async upload_image(image) {
        try {
            return await cloudinary.uploader.upload(image,{
              public_id: `${Date.now()}`,
              resource_type: "image",
              folder: "Images"
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
                folder: "Files"
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
                folder: "Avatars"
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
        throw new Error(err);
      }
    }



  }
  
  module.exports = CloudinaryClass;
  