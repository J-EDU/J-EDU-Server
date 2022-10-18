/* eslint-disable*/
const express = require('express');
const { UsersDB } = require('../../models');
const ___isAuth = require('./__isAuth');
const ___isTeacher = require('./__isTeacher');

const router = express.Router();

router.get('/',___isAuth,async (req, res,next) => {

    try {
      const users = await UsersDB.findAll({
        where: {
          role: "teacher"
        }
      });
      const usersData= users.map((item,idx)=>{
        return {
          id : item.id,
          email : item.email,
          name : item.fullName,
          isBlocked : item.isBlocked,
          phoneNumber : item.phoneNumber,
          birthday : item.birthday,
          role : item.role,
        }
      })
      res.users = usersData;
      res.status(200).json({teachers:res.users});
      return;
    } catch (error) {
      next({message:`Error happend in getAllTeachers${error}`})
    }
});


module.exports = router;