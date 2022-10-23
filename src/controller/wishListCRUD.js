/*eslint-disable*/
const { wishListDB } = require("../models");


const __addWishList= async (req, res, next) => {
	try {
		let createdwishList = await wishListDB.create({ ...req.body, userID: req.body.userID,courseID:req.body.courseID})
		
		res.status(201).json(createdwishList);
	} catch (err) {
		next(`Error wishListCRUD.js  : ${err}`);
	}
    
  };


  const __deletewishList = async (req, res, next) => {
    try {
      
      let deletedwishList = await wishListDB.destroy({ where: { courseID:req.body.courseID } });
      res.status(202).json({ item: deletedwishList });
    } catch (err) {
      console.log("Hassan ~ err", err);
  
      next(`Error inside delete wishList function : ${err}`);
    }
  };


  const __getWishList =async(req,res,next)=>{
	try{
		const whishList = await wishListDB.findAll();
		res.status(200).json({whishList});
		return;
	}catch(error){
		next({message:`Error happend in Get wishList ${error}`})
	}
  }


  module.exports={
	__addWishList,
	__deletewishList,
	__getWishList

  }