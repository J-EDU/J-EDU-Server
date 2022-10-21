/* eslint-disable */

const FilesModel = (sequelize, DataTypes) =>
  sequelize.define(
    "files",
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
      },
      cloudinary_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      courseID: {
        type: DataTypes.UUID,
        references: {
          model: "courses",
          key: "id",
        },
      }
    },
    {
      // Options
    }
  );

module.exports = FilesModel;
