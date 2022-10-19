/* eslint-disable */


const replayModel = (sequelize,DataTypes)=>sequelize.define('replay', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  feedbackID: {
	type: DataTypes.UUID,
	references: {
	  model: "feedback",
	  key: "id",
	},
},
text:{
	type: DataTypes.STRING,
}
})
module.export =replayModel