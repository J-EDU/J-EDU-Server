/* eslint-disable*/
const JWT = require("jsonwebtoken");
const { UsersDB } = require("../../models");

const __isBlocked = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    const {email} = JWT.verify(token, process.env.JWT_SECRET_KEY);
    if (email) {
      const user = await UsersDB.findAll({ where: { isBlocked } });
      if (user) {
          if(user.isBlocked == true){
            req.user = user;
            next();
        }else{
            res.status(409).json({ messgae: "You'ar not user blocked" });
            return;    
        }
      } else {
        res.status(409).json({ messgae: "User Not Found" });
        return;
      }
    } else {
      res.sendStatus(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    next({ message: `the Token is in correct || Expired ${error}` });
  }
};

module.exports = __isBlocked;