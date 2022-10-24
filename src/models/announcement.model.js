/* eslint-disable */

const AnnouncementModel = (sequelize, DataTypes) =>
  sequelize.define(
    "announcement",
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
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    URL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cloudinary_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
    
  );

module.exports =AnnouncementModel;