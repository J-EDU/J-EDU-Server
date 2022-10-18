/* eslint-disable*/
const express = require("express");
const { UsersDB, CommentDB } = require("../../models");
const ___isAuth = require("./__isAuth");
const ___isAdmin = require("./__isAdmin");

const router = express.Router();

router.get("/", ___isAuth, async (req, res, bayan) => {
  try {
    const users = await UsersDB.findAll({
      include: [
        {
          model: CommentDB,
          // include: [{ model: Comment }],
        },
      ],
    });
    const usersData = users.map((item, idx) => {
      return {
        id: item.id,
        email: item.email,
        name: item.fullName,
        isBlocked: item.isBlocked,
        phoneNumber: item.phoneNumber,
        birthday: item.birthday,
        role: item.role,
        comments : item.comments
      };
    });
    res.users = usersData;
    res.status(200).json({ users: usersData });
    return;
  } catch (error) {
    bayan({ message: `Error happend in getAllusers ${error}` });
  }
});

module.exports = router;
