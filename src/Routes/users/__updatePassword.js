/* eslint-disable*/
const express = require("express");
const bcrypt = require("bcrypt");

const { UsersDB } = require("../../models");

const router = express.Router();

router.put("/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    const { password } = req.body;
    password = await bcrypt.hash(password, 10);

    let findUser = await UsersDB.findOne({ where: { id: id } });
    await UsersDB.update({ ...findUser, password }, { where: { id } });

    res.status(200).json({ msg: "updated Succfully" });
  } catch (err) {
    console.log("Password ~ err", err);

    next(`Error inside updatePassword function : ${err}`);
  }
});

module.exports = router;
