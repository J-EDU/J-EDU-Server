/*eslint-disable */
const express = require('express');
const { __getCourses,__deleteCourse,__addCourse,__updateCourse } = require('../../controller/courseCRUD');
const __search = require('../../middlewares/__courseMiddlrewares/__search');
const ___isAuth = require('../../middlewares/__userMiddlewares/__isAuth');

const router = express.Router();


router.get('/',__getCourses );
router.delete('/deletecourse/:id',___isAuth,__deleteCourse );
router.post('/addCourse',___isAuth,__addCourse);
router.put('/updateCourse/:id',___isAuth,__updateCourse);
router.get('/search',__search);





module.exports = router;