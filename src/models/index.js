/* eslint-disable */
const { Sequelize, DataTypes } = require("sequelize");

const Users = require("./users.model");
const Videos = require("./videos.model");
const Courses = require("./courses.model");
const Comments = require("./comments.model");
const Replay = require("./replay.model");
const VideosReport = require("./VideosReposts.model");
const Feedback = require("./feedback.model");
const Quiz = require("./quiz.model");
const Question = require("./question.model");

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
  process.env.DATABASE_URL ||
    "postgres://bayan:123456@127.0.0.1:5432/postgres",
  config
);

const FeedbackDB = Feedback(db, DataTypes);
const UsersDB = Users(db, DataTypes);
const VideosDB = Videos(db, DataTypes);
const CommentDB = Comments(db, DataTypes);
const CoursesDB = Courses(db, DataTypes);
const ReplayDB = Replay(db, DataTypes);
const VideosReportsDB = VideosReport(db, DataTypes);
const QuestionDB = Question(db, DataTypes);
const QuizDB = Quiz(db, DataTypes);

// RelationShip

// User One-to-Many comments

UsersDB.hasMany(CommentDB, {
  foreignKey: "userID",
  onDelete: "cascade",
});
CommentDB.belongsTo(UsersDB, {
  foreignKey: "userID",
});


//************************** */
// Video One-to-Many comments

VideosDB.hasMany(CommentDB, {
  foreignKey: "videoID",
  onDelete: "cascade",
});

CommentDB.belongsTo(VideosDB, {
  foreignKey: "videoID",
});

// course One-to-Many video

UsersDB.hasMany(CoursesDB, {
  foreignKey: "userID",
  onDelete: "cascade",
});

CoursesDB.belongsTo(UsersDB, {
  foreignKey: "userID",
});

// Course One-to-Many video

CoursesDB.hasMany(VideosDB, {
  foreignKey: "courseID",
  onDelete: "cascade",
});
VideosDB.belongsTo(CoursesDB, {
  foreignKey: "courseID",
});

// Users One-to-Many video

UsersDB.hasMany(VideosDB, {
  foreignKey: "userID",
  onDelete: "cascade",
});

VideosDB.belongsTo(UsersDB, {
  foreignKey: "userID",
});


//
VideosDB.hasMany(VideosReportsDB, {
  foreignKey: "videoID",
  onDelete: "cascade",
});

VideosReportsDB.belongsTo(VideosDB, {
  foreignKey: "videoID",
});

// ************

UsersDB.hasMany(VideosReportsDB, {
  foreignKey: "userID",
  onDelete: "cascade",
});

VideosReportsDB.belongsTo(UsersDB, {
  foreignKey: "userID",
});

// Users One-to-Many feedbak

UsersDB.hasMany(FeedbackDB, {
  foreignKey: "userID",
  onDelete: "cascade",
});
FeedbackDB.belongsTo(UsersDB, {
  foreignKey: "userID",
});

// Users one-to-many replay

FeedbackDB.hasMany(ReplayDB, {
  foreignKey: 'feedbackID',
  onDelete: "cascade",
})
ReplayDB.belongsTo(FeedbackDB, {
  foreignKey: 'feedbackID',
});

// quiz one-to-many question

QuizDB.hasMany(QuestionDB, {
  foreignKey: 'quizID',
 
})
QuestionDB.belongsTo(QuizDB, {
  foreignKey: 'quizID',
});




module.exports = {
  db,
  UsersDB,
  VideosDB,
  CoursesDB,
  CommentDB,
  ReplayDB,
  VideosReportsDB,
  FeedbackDB,
  QuestionDB,
  QuizDB 
};
