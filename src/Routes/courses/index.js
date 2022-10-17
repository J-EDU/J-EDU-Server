/*eslint-disable */
const express = require('express');
const __getAllCourses = require("./__getAllCourses");
const __deleteCourse = require("./__deletecourse");
const __addCourse= require("./__addCourse");



const router = express.Router();

router.get('/',(req,res)=>{
    res.json({
        message : 'Course Home'
    })
} );
router.use('/getCourse',__getAllCourses );
router.use('/deletecourse',__deleteCourse );
router.use('/addCourse',__addCourse);



module.exports = router;