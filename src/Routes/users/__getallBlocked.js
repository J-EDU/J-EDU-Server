/* eslint-disable*/
const express = require('express');
const { UsersDB } = require('../../models');
const __isBlocked = require("./__isBlocked")


const router = express.Router();

router.get('/',async (req, res,next) => {

    try {
      const users = await UsersDB.findAll({
        where: {
          isBLocked: true
        }
      });
      res.users = users;
      res.status(200).json({users});
      return;
    } catch (error) {
      next({message:`Error happend in getAllBlocked ${error}`})
    }
});


module.exports = router;
