/*eslint-disable */
const express = require('express');
const { __getCourses,__deleteCourse,__addCourse,__updateCourse } = require('../../controller/courseCRUD');



const router = express.Router();

router.get('/',__getCourses );
router.delete('/deletecourse/:id',__deleteCourse );
router.post('/addCourse',__addCourse);
router.put('/updateCourse/:id',__updateCourse);



module.exports = router;