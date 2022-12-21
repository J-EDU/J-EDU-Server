/*eslint-disable*/
const { wishListDB, CoursesDB } = require("../models");


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
		const courses = await CoursesDB.findAll()
		let keys = [];
		let courseResult = []
		whishList.map((val) => {
			keys.push(val.dataValues.courseID)
		})
		courses.map((val) => val.dataValues).filter((val) => {
			if (keys.includes(val.id)){
				courseResult.push(val)
			}
		})
		console.log(courseResult)
		res.status(200).json({"result" : courseResult});
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

//   "courses": [
// 	{
// 		"id": "1d8f09e7-1b81-40c7-98b6-809f17f70d89",
// 		"fullName": "test cours215",
// 		"description": "Course Description",
// 		"category": "DEVELOPMENT",
// 		"language": "Arabic",
// 		"Thumbnail": "test",
// 		"userID": "9b4541c2-1fa0-4252-96a3-ba2c671a9d3e",
// 		"tag": [
// 			"test1",
// 			"test2",
// 			"test",
// 			"cours215",
// 			"Course",
// 			"Description"
// 		],
// 		"createdAt": "2022-12-15T13:58:00.335Z",
// 		"updatedAt": "2022-12-15T13:58:00.335Z"
// 	},
// 	{
// 		"id": "eb8317f9-2d27-4ee5-ab3d-d6932671902e",
// 		"fullName": "test cours21",
// 		"description": "Course Description",
// 		"category": "DEVELOPMENT",
// 		"language": "Arabic",
// 		"Thumbnail": "test",
// 		"userID": "9b4541c2-1fa0-4252-96a3-ba2c671a9d3e",
// 		"tag": [
// 			"test1",
// 			"test2",
// 			"test",
// 			"cours21",
// 			"Course",
// 			"Description"
// 		],
// 		"createdAt": "2022-12-15T13:58:06.972Z",
// 		"updatedAt": "2022-12-15T13:58:06.972Z"
// 	}


// "whishList": [
// 	{
// 		"whishListID": "1360e36b-4546-47ce-8b1d-d58f06955fd9",
// 		"userID": "9b4541c2-1fa0-4252-96a3-ba2c671a9d3e",
// 		"courseID": "eb8317f9-2d27-4ee5-ab3d-d6932671902e",
// 		"createdAt": "2022-12-15T13:59:14.840Z",
// 		"updatedAt": "2022-12-15T13:59:14.840Z"
// 	}
// ]