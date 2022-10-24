/*eslint-disable */
const express = require('express');
const { __getCategory,__deleteCategory,__addCategory } = require('../../controller/categoryCRUD');
const ___isAdmin = require('../../middlewares/__userMiddlewares/__isAdmin');

const router = express.Router();


router.get('/',__getCategory );
router.delete('/deleteCategory/:id',___isAdmin,__deleteCategory );
router.post('/addCategory',___isAdmin,__addCategory);






module.exports = router;