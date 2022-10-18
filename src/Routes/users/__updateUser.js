const express = require("express");
const {  UsersDB } = require('../../models');

const router = express.Router();


router.put('/:id',async (req, res,next) => {
	try {
		let id = req.params.id;
		let newUserData = req.body;  
		await UsersDB.update(newUserData, { where: { id } });
		let updatedUser = await UsersDB.findOne({ where: { id } });
		res.status(200).send(updatedUser);
	} catch (err) {
		next(`Error inside updatedUser  function : ${ err }`);
	}
})
module.exports = router;