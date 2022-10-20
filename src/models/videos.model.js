/* eslint-disable */

const VideosModel = (sequelize, DataTypes) =>
  sequelize.define(
    "videos",
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
      courseID: {
        type: DataTypes.UUID,
        references: {
          model: "courses",
          key: "id",
        },
      },
      URL: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Thumbnail: {
        type: DataTypes.STRING,
        defaultValue: "false",
      },
    },
    {
      // Options
    }
  );

module.exports = VideosModel;
