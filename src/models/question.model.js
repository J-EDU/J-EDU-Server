/* eslint-disable */

const Question = (sequelize, DataTypes) =>
  sequelize.define("question", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
   
    text: {
      type: DataTypes.STRING,
    },

    // quizID: {
    //     type: DataTypes.UUID,
    //     references: {
    //       model: "Quiz",
    //       key: "id",
    //     },
    // },

    answer:{
        type : DataTypes.BOOLEAN,
        allowNull: false,
    }

  });
  module.exports =Question