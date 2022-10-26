/* eslint-disable*/
const { UsersDB, CommentDB, CommentreportsCollection } = require("../models");


const __getCommentReports = async (req, res, next) => {
  try {
    const Reports = await CommentreportsCollection.READ_ALL(
      [
        {
          model: UsersDB,
        },
        {
          model: CommentDB,
        },
      ]
    )
    res.status(200).json({ Reports });
    return;
  } catch (err) {
    next(`CommentReportCRUD.js ~ line 20 ${err}`);
  }
};


  const __deleteCommentReport= async (req, res, next) => {

    try {
      let id = req.params.id;
      let deletedCommentReport = await CommentreportsCollection.DELETE(id,req.user.role,req.user.id);
      if(deletedCommentReport)
        return res.status(200).json({msg:"deleted done"});
        return res.status(404).json({msg:"delete CRUD not working"});
      
    } catch (err) {
      next(`commentsReportCRUD.js ~ line 35  ${err}`);
    }

}
      

  
  const __addCommentReport= async (req, res, next) => {

    try {
      
      let createdCommentReport = await CommentreportsCollection.CREATE({...req.body,userID:req.user.id});
      res.status(201).json(createdCommentReport);
    } catch (err) {
      next(`Error inside addCOMMENTReport function : ${err}`);
    }

  };
  

module.exports = {
    __addCommentReport,
    __deleteCommentReport,
    __getCommentReports
};
