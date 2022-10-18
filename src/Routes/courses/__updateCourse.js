/*eslint-disable */
const express = require("express");
const { CoursesDB } = require('../../models');

const router = express.Router();


router.put('/:id',async (req, res,next) => {
	try {
		let id = req.params.id;
		let newCourseData = req.body;  
		await CoursesDB.update(newCourseData, { where: { id } });
		let updatedCourse = await CoursesDB.findOne({ where: { id } });
		res.status(200).send(updatedCourse);
	} catch (err) {
		next(`Error inside updatedCourse function : ${ err }`);
	}
})
module.exports = router;