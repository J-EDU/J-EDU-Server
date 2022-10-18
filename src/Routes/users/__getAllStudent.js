/* eslint-disable*/
const express = require('express');
const { UsersDB } = require('../../models');

const router = express.Router();

router.get('/',async (req, res,next) => {

    try {
      const users = await UsersDB.findAll({
		where:{ role :'student'}
	});

      const usersData=users.map((item,idx)=>{
        return {
          id : item.id,
          email : item.email,
          name : item.fullName,
          isBlocked : item.isBlocked,
          phoneNumber : item.phoneNumber,
          birthday : item.birthday,
          role : item.role,
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