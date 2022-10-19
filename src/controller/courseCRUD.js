/* eslint-disable*/
const { VideosDB, CoursesDB } = require("../models");

const __addCourse = async (req, res, next) => {
  
  try {
      
    let createdCourse = await CoursesDB.create({...req.body,userID:req.user.id});
    res.status(201).json(createdCourse);
  } catch (err) {
    next(`Error inside addCourse function : ${err}`);
  }
};

const __deleteCourse = async (req, res, next) => {
  try {
    let id = req.params.id;
    let deletedCourse= await CoursesDB.destroy({ where: { id } });
    res.status(202).json({item: deletedCourse})
  } catch (err) {
    console.log("Hassan ~ err", err)
    
    next(`Error inside deleteOneCourse function : ${err}`);
  }
};

const __updateCourse = async (req, res, next) => {
	try {
		let id = req.params.id;
		let newCourseData = req.body;  
		await CoursesDB.update(newCourseData, { where: { id } });
		let updatedCourse = await CoursesDB.findOne({ where: { id } });
		res.status(200).send(updatedCourse);
	} catch (err) {
		next(`Error inside updatedCourse function : ${ err }`);
	}
};

const __getCourses = async (req, res, next) => {

  try {
    const courses = await CoursesDB.findAll({
      include: [
        {
          model: VideosDB,
          // include: [{ model: Comment }],
        },
      ],
    });
    const courseData=  courses.map((item,idx)=>{
      return {
        id : item.id,
        name : item.fullName,
        description : item.description,
        language : item.language,
        thumbnail: item.thumbnail,
        videos : item.videos
      }
    })
    res.courses = courseData;
    res.status(200).json({courseData});
    return;
  } catch (error) {
    next({message:`Error happend in getAllCourses ${error}`})
  }
};

module.exports = {
  __addCourse,
  __deleteCourse,
  __updateCourse,
  __getCourses
};
