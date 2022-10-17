/* eslint-disable*/
const express = require('express');
const { CoursesDB } = require('../../models');
const router = express.Router();


router.post('/',async (req, res,next) => {
    try {
      
      let createdCourse = await CoursesDB.create(req.body);
      res.status(201).json(createdCourse);
    } catch (err) {
      next(`Error inside addComment function : ${err}`);
    }
  });
  module.exports = router;