/* eslint-disable*/
const { VideosDB, CommentDB, courseCollection, FilesDB, QuestionDB, QuizDB, UsersDB, CoursesDB } = require("../models");

const __addCourse = async (req, res, next) => {
	try {
		let tag = req.body.tag
		let fullName = req.body.fullName.split(" ");
		let descreption = req.body.description.split(" ");


		tag.push(...fullName)
		tag.push(...descreption)


		let uniqueChars = [];
		tag.forEach((element) => {
			if (!uniqueChars.includes(element)) {
				uniqueChars.push(element);
			}

		});
		tag=uniqueChars;
		
	
	let reg = /^(?!or|and|what|the|is|how|who)([a-zA-Z0-9]+)$/i

	const newArr=tag.filter(item=>reg.test(item))
		console.log(newArr)

   

		tag = newArr
		console.log(tag)
		let course = await CoursesDB.create({ ...req.body, userID: req.user.id, tag })
		// let createdCourse = await courseCollection.CREATE({ ...req.body, userID: req.user.id, tag })

		res.status(201).json(course);
	} catch (err) {
		console.log("Hassan ~ file: courseCRUD.js ~ line 38 ~ err", err)
		next(`Error courseCRUD.js ~ line 11 : ${err}`);
	}
};


const __deleteCourse = async (req, res, next) => {
  try {
    let id = req.params.id;
    let deletedCourse= await courseCollection.DELETE(id,req.user.role,req.user.id)
    if(deletedCourse)
    return res.status(200).json({msg:"deleted done"});
    return res.status(404).json({msg:"No Course OR you are not Authoize to delete"});
  
  } catch (err) {
    next(`Error courseCRUD.js ~ line 24 : ${err}`);
  }

};

const __updateCourse = async (req, res, next) => {
	try {
		let id = req.params.id;
		let newCourseData = req.body;
		await courseCollection.UPDATE(id, newCourseData,req.user.id);
		let course = await courseCollection.READ_ONE(id,
			[
				{
					model: VideosDB,
					include: [{ model: CommentDB }],
				},
			]
		)
		if (course)
			return res.status(200).json({ course });
			return res.status(201).json({ msg: "there is no Courses" });
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
        {
          model: QuizDB,
        }
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
