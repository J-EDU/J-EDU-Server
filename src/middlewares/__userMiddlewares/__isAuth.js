/* eslint-disable*/
const JWT = require("jsonwebtoken");
const { UsersDB } = require("../../models");

const ___isAuth = async (req, res, next) => {

  if(!req.headers.authorization){
    res.send("please add token or sign in again")
    return;
  }
  const type = req.headers.authorization.split(" ")[0];
  if(type == "Basic"){
    res.send("no Valid ")
    return;
  }


  const token = req.headers.authorization.split(" ")[1];
  try {
    const {email} = JWT.verify(token, process.env.JWT_SECRET_KEY);
    if (email) {
      const user = await UsersDB.findOne({ where: { email } });
      if (user) {
        req.user = user;
        next();
      } else {
        res.status(409).json({ messgae: "User Not Found" });
        return;
      }
    } else {
      res.sendStatus(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    next({ message: `the Token is incorrect || Expired ${error}` });
  }

};



module.exports = ___isAuth;

