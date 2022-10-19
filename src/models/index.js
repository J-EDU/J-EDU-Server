/* eslint-disable */
const { Sequelize, DataTypes } = require("sequelize");


const Users = require("./users.model");
const Videos = require("./videos.model");
const Courses = require("./courses.model");
const Comments = require("./comments.model");
const VideosReport= require("./VideosReports.modal")
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
const VideosReportsDB=VideosReport(db,DataTypes);

// RelationShip


// User One-to-Many comments
UsersDB.hasMany(CommentDB,{
  foreignKey: 'userID' 
});
CommentDB.belongsTo(UsersDB,{
  foreignKey: 'userID' 
});

// Video One-to-Many comments
VideosDB.hasMany(CommentDB,{
  foreignKey: 'videoID' 
});
CommentDB.belongsTo(VideosDB,{
  foreignKey: 'videoID' 
});


// course One-to-Many video 
UsersDB.hasMany(CoursesDB,{
  foreignKey: 'userID' 
});
CoursesDB.belongsTo(UsersDB,{
  foreignKey: 'userID' 
});

// Course One-to-Many video 
CoursesDB.hasMany(VideosDB,{
  foreignKey: 'courseID' 
});
VideosDB.belongsTo(CoursesDB,{
  foreignKey: 'courseID' 
});

// Users One-to-Many video 
UsersDB.hasMany(VideosDB,{
  foreignKey: 'userID' 
});


VideosDB.belongsTo(UsersDB,{
  foreignKey: 'userID' 
});


VideosDB.belongsTo(VideosReportsDB,{
  foreignKey: 'videosreport' 
})


UsersDB.belongsTo(VideosReportsDB,{
  foreignKey: 'videosreport' 
})


VideosReportsDB.hasMany(VideosDB,{
  foreignKey: 'videoID' 
})
VideosReportsDB.hasMany(UsersDB,{
  foreignKey: 'userID' 
})

module.exports = {
  db,
  UsersDB,
  VideosDB,
  CoursesDB,
  CommentDB,
  VideosReportsDB
};
