/* eslint-disable*/
const JWT = require("jsonwebtoken");
const { UsersDB } = require("../../models");

const __checkRegex = async (req, res, next) => {

  console.log("Hassan ~ req.body", "req.body")

  var emailREGEX = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
  var PhoneREGEX = new RegExp(/(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/g);
  var passwordREGEX = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g);

  const {email,password,phoneNumber}  = req.body;
  let passwordTest = passwordREGEX.test(password)
  let phoneTest = PhoneREGEX.test(phoneNumber)
  let emailTest = emailREGEX.test(email)

  let passwordMessage = `
  the Password Must have at least one numeric character
  Must have at least one lowercase character
  Must have at least one uppercase character
  Must have at least one special symbol among @#$%
  Password length should be at least 8 character `
  
  if(!emailTest){
    res.status(401).send("check the Email")
    return;
  }

  if(!passwordTest){
    res.status(401).send(passwordMessage)
    return;
  }

  if(!phoneTest){
    res.status(401).send("check the Phone")
    return;
  }

  next();

};



module.exports = __checkRegex;

