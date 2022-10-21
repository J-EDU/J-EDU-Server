/* eslint-disable*/
const { VideosDB, CoursesDB, CommentDB, courseCollection, FilesDB } = require("../models");

const __addCourse = async (req, res, next) => {
  try {
    let createdCourse = await courseCollection.CREATE({...req.body,userID:req.user.id})
    res.status(201).json(createdCourse);
  } catch (err) {
    next(`Error courseCRUD.js ~ line 11 : ${err}`);
  }
};

const __deleteCourse = async (req, res, next) => {
  try {
    let id = req.params.id;
    let deletedCourse= await courseCollection.DELETE(id)
    if(deletedCourse)
    return res.status(200).json({msg:"Ok"});
    return res.status(404).json({msg:"No Course"});
  
  } catch (err) {
    next(`Error courseCRUD.js ~ line 24 : ${err}`);
  }
};

const __updateCourse = async (req, res, next) => {
	try {
		let id = req.params.id;
		let newCourseData = req.body;  
		await courseCollection.UPDATE(id,newCourseData);
		let course = await courseCollection.READ_ONE(id,
      [
        {
          model: VideosDB,
          include: [{ model: CommentDB }],
        },
      ]
      )
    if(course)
    return res.status(200).json({course});
    return res.status(201).json({msg : "there is no Courses"});
	} catch (err) {
    next(` courseCRUD.js ~ line 35  ${err}`)

	}
};

const __getCourses = async (req, res, next) => {

  try {
    const courses = await courseCollection.READ_ALL(
      [
        {
          model: VideosDB,
          include: [{ model: CommentDB }],
        },
        {
          model: FilesDB,
        },
      ]
    )
    if(courses)
      return res.status(200).json({courses});
      return res.status(201).json({msg : "there is no Courses"});
  
  } catch (err) {
    next(` courseCRUD.js ~ line 55  ${err}`)
  }
};

module.exports = {
  __addCourse,
  __deleteCourse,
  __updateCourse,
  __getCourses
};
