/*eslint-disable*/
const {HistoryDB} = require("../models");


const __addhistoryList= async (req, res, next) => {
	try {
		let createdHistoryList = await HistoryDB.create({ ...req.body, userID: req.body.userID,courseID:req.body.courseID,vedioID:req.body.vedioID})
		
		res.status(201).json(createdHistoryList);
	} catch (err) {
		next(`Error happend in add historyList CRUD.js  : ${err}`);
	}
    
  };



  const __gethistoryList =async(req,res,next)=>{
	try{
		const historyList = await HistoryDB.findAll();
		res.status(200).json({historyList});
		return;
	}catch(error){
		next({message:`Error happend in Get historyList CRUD ${error}`})
	}
  }


  module.exports={
	__addhistoryList,
	__gethistoryList

  }