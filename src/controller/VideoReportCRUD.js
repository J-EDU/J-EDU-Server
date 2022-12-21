/* eslint-disable*/
const { UsersDB, VideosDB, reportsCollection } = require("../models");


const __getReports = async (req, res, next) => {
  try {
    const Reports = await reportsCollection.READ_ALL(
      [
        {
          model: UsersDB,
        },
        {
          model: VideosDB,
        },
      ]
    )
    res.status(200).json({ Reports });
    return;
  } catch (err) {
    next(`VideoReportCRUD.js ~ line 20 ${err}`);
  }
};


  const __deleteReport= async (req, res, next) => {

    try {
      let id = req.params.id;
      let deletedReport = await reportsCollection.DELETE(id,req.user.role,req.user.id);
      if(deletedReport)
        return res.status(200).json({msg:"deleted done"});
        return res.status(404).json({msg:"delete CRUD not working"});
      
    } catch (err) {
      next(`commentsCRUD.js ~ line 35  ${err}`);
    }

}
      

  
  const __addReport= async (req, res, next) => {

    try {
      
      let createdReport = await reportsCollection.CREATE({...req.body,userID:req.user.id});
      res.status(201).json(createdReport);
    } catch (err) {
      next(`Error inside addCourse function : ${err}`);
    }

  };
  

module.exports = {
    __addReport,
    __deleteReport,
    __getReports
};