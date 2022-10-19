/* eslint-disable*/
const JWT = require("jsonwebtoken");
const { UsersDB } = require("../../models");

const isTeacher = (req, res, next) => {
  const role = req.user.role;
  if(role === "teacher"){
    next()
    return;
  } 
  res.send("you are not Teacher ")
};

module.exports = isTeacher;