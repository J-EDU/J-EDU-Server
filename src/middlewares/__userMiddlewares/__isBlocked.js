/* eslint-disable*/
const JWT = require("jsonwebtoken");
const { UsersDB } = require("../../models");
const bcrypt = require("bcrypt");
const base = require("base-64");


const __isBlocked = async (req, res, next) => {
  if(!req.headers.authorization){
    res.send("please add token or sign in again")
    return;
  }

  const type = req.headers.authorization.split(" ")[0];
  const auth = req.headers.authorization.split(" ")[1];
  let email ;
  if(type == "Bearer"){
    try {
      email = JWT.verify(auth, process.env.JWT_SECRET_KEY);
      email = email.email
      
    } catch (error) {
        res.status(409).json({ messgae: "Token is Expired or is not correct" });
        return;
      }

    }
    else{
    const userinfo = base.decode(auth).split(":");
   email = userinfo[0];
  }
  
if(email){
  try {
  
          const user = await UsersDB.findOne({ where: { email} });
          if (user) {
            if(!user.isBLocked){
                req.user = user;
                next();
            }else{
                res.status(401).json({ messgae: "You'ar blocked user" });
                return;    
            }
          } else {
            res.status(400).json({ messgae: "Invalid Credentials" });
            return;
          }
      
      } catch (error) {
        res.status(500).json({ messgae: "Internal Server Error" });

      }

}


};

module.exports = __isBlocked;