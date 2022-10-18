/* eslint-disable*/
const express = require('express');
const { UsersDB } = require('../../models');
const __isBlocked = require("./__blockedList")


const router = express.Router();

router.get('/',__isBlocked ,async (req, res,next) => {

    try {
      const users = await UsersDB.findAll();
      const usersData= users.map((item,idx)=>{
        return {
          
          isBlocked : item.isBlocked
         
        }
      })
      res.users = usersData;
      res.status(200).json({usersData});
      return;
    } catch (error) {
      next({message:`Error happend in getAllusers ${error}`})
    }
});


module.exports = router;
