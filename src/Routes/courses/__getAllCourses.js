/* eslint-disable*/
const express = require('express');
const { CoursesDB, VideosDB} = require('../../models');

const router = express.Router();

router.get('/',async (req, res,next) => {

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
});


module.exports = router;