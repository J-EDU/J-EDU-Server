/* eslint-disable */

const CommentModel = (sequelize, DataTypes) =>
  sequelize.define(
    "comments",
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
      videoID: {
        type: DataTypes.UUID,
        references: {
          model: "videos",
          key: "id",
        },
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      // Options
    }
  );

module.exports = CommentModel;
