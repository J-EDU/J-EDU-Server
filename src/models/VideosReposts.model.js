/*eslint-disable */
const VideosReports = (sequelize, DataTypes) =>
  sequelize.define(
    "videosreport",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      reportTitle:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      reportDiscription:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      videoID: {
        type: DataTypes.UUID,
        references: {
          model: "videos",
          key: "id",
        },
      },
      
      userID: {
        type: DataTypes.UUID,
        references: {
          model: "users",
          key: "id",
        },
      }
      
    });

    module.exports = VideosReports;
