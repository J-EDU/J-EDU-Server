/* eslint-disable*/
const { UsersDB, CommentDB, CoursesDB, VideosDB } = require("../models");


const __getReports = async (req, res, next) => {
  try {
    const users = await UsersDB.findAll({
      include: [
        {
          model: CommentDB,
         // include: [{ model: Comment }],
        },
        {
          model: CoursesDB,
          include: [
            { 
              model: VideosDB,
              include: [{ model: CommentDB }],
            },
            
          ],
        },
      ],
    });
    const usersData = users.map((item, idx) => {
      return {
        id: item.id,
        email: item.email,
        name: item.fullName,
        isBlocked: item.isBlocked,
        phoneNumber: item.phoneNumber,
        birthday: item.birthday,
        role: item.role,
        comments : item.comments
      };
    });
    res.users = usersData;
    res.status(200).json({ users: users });
    return;
  } catch (error) {
    next({ message: `Error happend in getAllusers ${error}` });
  }
};


  const __deleteReport= async (req, res, next) => {
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
  };


  
  const __addReport= async (req, res, next) => {
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
  };
  

module.exports = {
    __addReport,
    __deleteReport,
    __getReports
};
