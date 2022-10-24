/* eslint-disable*/
const JWT = require("jsonwebtoken");
const { UsersDB } = require("../../models");

const __canDelete = async (req, res, next) => {
  try {
        if(req.user.role === "admin"){
            next();
        }
        
        else{
            res.status(409).json({ messgae: "You'ar not Admin" });
            return;    
        }
      
   
  } catch (error) {
    next({ message: `the Token is in correct || Expired ${error}` });
  }
};

module.exports = __canDelete;