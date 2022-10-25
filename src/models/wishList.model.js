const whishListModel = (sequelize, DataTypes) =>
  sequelize.define(
    "whishList",
    {
    whishListID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userID: {
        type: DataTypes.UUID,
		    allowNull: false,
        references: {
          model: "users",
          key: "id",

        },
      },
      courseID: {
        type: DataTypes.UUID,
		allowNull:false,
		unique: true
        
      },
    },
    {
      // Options
    }
  );

module.exports = whishListModel;