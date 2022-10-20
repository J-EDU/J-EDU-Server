/* eslint-disable */

const Quiz = (sequelize, DataTypes) =>
  sequelize.define("quiz", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
   
    text: {
      type: DataTypes.STRING,
    },
    courseID: {
        type: DataTypes.UUID,
        references: {
          model: "courses",
          key: "id",
        },
    }
  });
  module.exports =Quiz
