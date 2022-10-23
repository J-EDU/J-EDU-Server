/* eslint-disable */

const optionModel = (sequelize, DataTypes) =>
  sequelize.define(
    "options",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isCorrect: {
            type: DataTypes.ENUM('1', '0'),
            defaultValue: '0'
      },
      questionID: {
        type: DataTypes.UUID,
        references: {
          model: "questions",
          key: "id",
        },
      }
    },
    {
      // Options
    }
  );

module.exports = optionModel;
