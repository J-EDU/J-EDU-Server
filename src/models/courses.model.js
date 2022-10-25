/* eslint-disable */

const CoursesModel = (sequelize, DataTypes) =>
	sequelize.define(
		"courses",
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			fullName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			description: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			category: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: 'DEVELOPMENT',
				validate: {
					customValidator: (value) => {
						const enums = ['IT AND SOFTWARE', 'DESIGN', 'MARKETING', 'FINANCE AND ACCOUNTING', 'HEALTH AND FITNESS', 'BUSINESS', 'MUSIC', 'TEACHING AND ACADEMICS', 'LIFESTYLE', 'DEVELOPMENT']
						if (!enums.includes(value)) {
							throw new Error('not a valid option')
						}
					}
				}
			},
			language: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			Thumbnail: {
				type: DataTypes.STRING,
				defaultValue: "",
			},
			userID: {
				type: DataTypes.UUID,
				references: {
					model: "users",
					key: "id",
				},
			},
			tag: {
				type: DataTypes.ARRAY(DataTypes.STRING),
				allowNull: false
			},
			// wishList: {
			// 	type: DataTypes.UUID,
			// 	references: {
			// 		model: "whishList",
			// 		key: "whishListID",
			// 	},
			// },
		},

		{
			// Options
		}
	);

module.exports = CoursesModel;
