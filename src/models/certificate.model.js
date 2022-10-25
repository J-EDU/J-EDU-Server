/* eslint-disable */

const certificateModel =(Sequelize,DataTypes)=>
	Sequelize.define(
		"certificate",
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			  },
			userID: {
				type: DataTypes.UUID,
				references: {
				  model: "users",
				  key: "id",
				},
			  },
			  URL: {
				type: DataTypes.STRING,
				allowNull: false,
			  }
		}
	)


module.exports=certificateModel;