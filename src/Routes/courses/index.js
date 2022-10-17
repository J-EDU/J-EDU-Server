const express = require('express');
const __getAllCourses = require("./__getAllCourses");
const __deleteCourse = require("./__deleteCourse");
const __addCourse= require("./__addCourse");



const router = express.Router();

router.get('/',(req,res)=>{
    res.json({
        message : 'Course Home'
    })
} );
router.use('/getCourse',__getAllCourses );
router.use('/deleteComment',__deleteCourse );
router.use('/addCourse',__addCourse);



module.exports = router;