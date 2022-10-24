/*eslint-disable */

const {userCollection } = require("../../models");

const __makeTeacher = async (req, res, next) => {
  try {
		let id = req.user.id;
		let newUserData = req.body;
		await userCollection.UPDATE(id, newUserData);
		let user = await userCollection.READ_ONE(id)
		if (user)
			return res.status(200).json({ user });
			return res.status(201).json({ msg: "there is no Courses" });
	} catch (err) {
		next(`User CRUD.js ~ line 35  ${err}`)
	}
};

module.exports = __makeTeacher