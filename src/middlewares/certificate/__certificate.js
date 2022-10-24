/* eslint-disable*/
const cloudinaryClass = require("../../collectionsAtAll/CloudinaryClass");
const cloudinary = new cloudinaryClass()

const __getCertificate = async (req, res, next) => {
  try {
    const result = await cloudinary.do_Certificate(req.body);
    res.send(result)
  } catch (error) {
    next(`the Token is in correct || Expired ${error}`);
  }
};

module.exports = __getCertificate;


