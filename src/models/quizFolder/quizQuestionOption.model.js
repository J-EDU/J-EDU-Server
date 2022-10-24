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
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '0',
        validate: {
            customValidator: (value) => {
                const enums = ['0', '1']
                if (!enums.includes(value)) {
                    throw new Error('not a valid option')
                }
            }
        }
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
