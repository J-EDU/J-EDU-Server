/* eslint-disable*/
const JWT = require("jsonwebtoken");
const { UsersDB } = require("../../models");

const isTeacher = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token){
  try {
    const {email} = JWT.verify(token, process.env.JWT_SECRET_KEY);
    if (email) {
      const user = await UsersDB.findOne({ where: { email } });
      if (user) {
          if(user.role === "teacher"){
            req.user = user;
            next();
        }else{
            res.status(409).json({ messgae: "You'ar not a teacher" });
            return;    
        }
      } else {
        res.status(409).json({ messgae: "Teacher not found" });
        return;
      }
    } else {
      res.sendStatus(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    next({ message: `the Token is in correct || Expired ${error}` });
  }}
};

module.exports = isTeacher;