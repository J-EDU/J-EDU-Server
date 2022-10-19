/* eslint-disable*/
const { UsersDB, CommentDB, CoursesDB, VideosDB, VideosReportsDB } = require("../models");


const __getReports = async (req, res, next) => {
  try {
    const Reports = await VideosReportsDB.findAll({
      include: [
        {
          model: UsersDB,
        },
        {
          model: VideosDB,
        },
      ],
    });
    res.status(200).json({ Reports });
    return;
  } catch (error) {
    next({ message: `Error happend in getAll Reports ${error}` });
  }
};


  const __deleteReport= async (req, res, next) => {

          try {

  
            let id = req.params.id;
            
            let deletedReport = await VideosReportsDB.destroy({ where: { id } });

            res.status(202).json({ item: deletedReport });
          } catch (err) {
            console.log("Hassan ~ err", err);
        
            next(`Error inside deleteOneComment function : ${err}`);
          }
  
        };


  
  const __addReport= async (req, res, next) => {

    try {
      
      let createdReport = await VideosReportsDB.create({...req.body,userID:req.user.id});
      res.status(201).json(createdReport);
    } catch (err) {
      next(`Error inside addCourse function : ${err}`);
    }

    // try {
    //     const users = await UsersDB.findAll({
    //       where: {
    //         role: "teacher"
    //       }
    //     });
    //     const usersData= users.map((item,idx)=>{
    //       return {
    //         id : item.id,
    //         email : item.email,
    //         name : item.fullName,
    //         isBlocked : item.isBlocked,
    //         phoneNumber : item.phoneNumber,
    //         birthday : item.birthday,
    //         role : item.role,
    //       }
    //     })
    //     res.users = usersData;
    //     res.status(200).json({teachers:res.users});
    //     return;
    //   } catch (error) {
    //     next({message:`Error happend in getAllTeachers${error}`})
    //   }
  };
  

module.exports = {
    __addReport,
    __deleteReport,
    __getReports
};
