/* eslint-disable*/
const express = require("express");
const bcrypt = require("bcrypt");
const base = require("base-64");
const { UsersDB } = require("../../models");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const header = req.headers.authorization.split(" ")[1];
  const userinfo = base.decode(header).split(":");
  const email = userinfo[0];
  const password = userinfo[1];
  try {
    const user = await UsersDB.findOne({ where: { email } });
    if (user) {
      const isAuth = await bcrypt.compare(password, user.password);
      if (!isAuth) return next({ message: `The password is not correct` });
      res.status(200).json({ user });
      return;
    } else {
      res.status(409).json({ messgae: "User Not Found" });
      return;
    }
  } catch (error) {
    next({ message: `Error happend in signin ${error}` });
  }
});

module.exports = router;
