/* eslint-disable */

const CategoryModel = (sequelize, DataTypes) =>
  sequelize.define(
    "categories",
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
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '0',
        validate: {
            customValidator: (value) => {
                const enums = ['IT', 'MATH', 'HISTORY']
                if (!enums.includes(value)) {
                    throw new Error('not a valid option')
                }
            }
        }
      },
    },
    {
      // Options
    }
  );

module.exports = CategoryModel;