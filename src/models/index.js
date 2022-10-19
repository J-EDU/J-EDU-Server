/* eslint-disable */
const { Sequelize, DataTypes } = require("sequelize");


const Users = require("./users.model");
const Videos = require("./videos.model");
const Courses = require("./courses.model");
const Comments = require("./comments.model");

var config;
if (process.env.DATABASE_URL) {
  config = {
    logging: false,
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  };
} else {
  config = {
    logging: false,
  };
}

const db = new Sequelize(
process.env.DATABASE_URL || 'postgres://postgres:1234@127.0.0.1:5432/edu',
config
)


const UsersDB = Users(db, DataTypes);
const VideosDB = Videos(db, DataTypes);
const CommentDB = Comments(db, DataTypes);
const CoursesDB = Courses(db, DataTypes);


// RelationShip


// User One-to-Many comments
UsersDB.hasMany(CommentDB,{
  foreignKey: 'userID' ,
  onDelete: 'cascade',
});
CommentDB.belongsTo(UsersDB,{
  foreignKey: 'userID' 
});

// Video One-to-Many comments
VideosDB.hasMany(CommentDB,{
  foreignKey: 'videoID' ,
  onDelete: 'cascade',
});
CommentDB.belongsTo(VideosDB,{
  foreignKey: 'videoID' 
});


// course One-to-Many video 
UsersDB.hasMany(CoursesDB,{
  foreignKey: 'userID' ,
  onDelete: 'cascade',
});
CoursesDB.belongsTo(UsersDB,{
  foreignKey: 'userID' 
});

// Course One-to-Many video 
CoursesDB.hasMany(VideosDB,{
  foreignKey: 'courseID' ,
  onDelete: 'cascade',

});
VideosDB.belongsTo(CoursesDB,{
  foreignKey: 'courseID' 
});

// Users One-to-Many video 
UsersDB.hasMany(VideosDB,{
  foreignKey: 'userID' ,
  onDelete: 'cascade',
});
VideosDB.belongsTo(UsersDB,{
  foreignKey: 'userID' 
});



module.exports = {
  db,
  UsersDB,
  VideosDB,
  CoursesDB,
  CommentDB
};
