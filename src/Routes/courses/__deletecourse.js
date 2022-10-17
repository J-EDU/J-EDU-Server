/* eslint-disable*/
const express = require('express');
const {  CoursesDB } = require('../../models');
const router = express.Router();



router.delete('/:id',async (req, res,next) => {

    try {
        let id = req.params.id;
        let deletedCourse= await CoursesDB.destroy({ where: { id } });
        res.status(202).json({item: deletedCourse})
      } catch (err) {
        console.log("Hassan ~ err", err)
        
        next(`Error inside deleteOneComment function : ${err}`);
      }
    });



module.exports = router;