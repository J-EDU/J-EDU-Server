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

// bayan URL = 'postgres://bayan:123456@127.0.0.1:5432/postgres' 

const db = new Sequelize(
process.env.DATABASE_URL || "postgres://fawzishiyyab:1999@127.0.0.1:5432/postgres",
config
)


const UsersDB = Users(db, DataTypes);
const VideosDB = Videos(db, DataTypes);
const CoursesDB = Courses(db, DataTypes);
const CommentDB = Comments(db, DataTypes);

module.exports = {
  db,
  UsersDB,
  VideosDB,
  CoursesDB,
  CommentDB
};
