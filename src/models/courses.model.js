/* eslint-disable */

const CoursesModel = (sequelize, DataTypes) =>
  sequelize.define(
    "course",
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
      language: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Thumbnail: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
    },
    {
      // Options
    }
  );

module.exports = CoursesModel;
