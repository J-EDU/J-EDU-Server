/* eslint-disable*/
const { CoursesDB } = require("../../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const __search = async (req, res, next) => {
    
  const search = req.query.search
  try {
   
		var course = await CoursesDB.findAll({
			where: {
				tag: {


					[Op.contains]: [search]

				}
			}
		})
		
		if(course.length==0){

		 course = await CoursesDB.findAll({
			where: {
				fullName: {

					[Op.iLike]: `%${search}%`


				}
			}
		}
		 )}
		res.send(course)
    res.send(course)
  } catch (error) {
    next(`the Token is in correct || Expired ${error}`);
  }
}


module.exports = __search;


