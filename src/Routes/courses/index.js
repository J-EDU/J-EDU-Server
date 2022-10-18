/*eslint-disable */
const express = require('express');
const __getAllCourses = require("./__getAllCourses");
const __deleteCourse = require("./__deletecourse");
const __addCourse= require("./__addCourse");
const __updateCourse= require("./__updateCourse");



const router = express.Router();

router.get('/',(req,res)=>{
    res.json({
        message : 'Course Home'
    })
} );
router.use('/getCourse',__getAllCourses );
router.use('/deletecourse',__deleteCourse );
router.use('/addCourse',__addCourse);
router.use('/updateCourse',__updateCourse);



module.exports = router;