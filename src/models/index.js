/* eslint-disable */
const { Sequelize, DataTypes } = require("sequelize");

const Users = require("./users.model");
const Videos = require("./videos.model");
const Courses = require("./courses.model");
const Comments = require("./comments.model");
const Replay = require("./replay.model");
const VideosReport = require("./VideosReposts.model");
const Feedback = require("./feedback.model");
const Files = require("./files.model");
const wishList=require('./wishList.model')
const Announcements = require("./announcement.model");
const Quizs = require("./quizFolder/quizs.model");
const Quesion = require("./quizFolder/quizQuestion.model");
const Option = require("./quizFolder/quizQuestionOption.model");
const watchHistory = require("./watchHistory.model");
const CRUD = require('../collectionsAtAll/DB_CRUD')
const history=require('./history.model')
const CommentReport= require('./commentReport.model')

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
    "postgres://fawzishiyyab:1999@127.0.0.1:5432/postgres",
  config
);

const FeedbackDB = Feedback(db, DataTypes);
const UsersDB = Users(db, DataTypes);
const VideosDB = Videos(db, DataTypes);
const CommentDB = Comments(db, DataTypes);
const CoursesDB = Courses(db, DataTypes);
const ReplayDB = Replay(db, DataTypes);
const VideosReportsDB = VideosReport(db, DataTypes);
const FilesDB = Files(db, DataTypes);
const wishListDB = wishList(db, DataTypes);
const AnnouncementDB = Announcements(db,DataTypes);
const QuizDB = Quizs(db, DataTypes);
const QuestionDB = Quesion(db, DataTypes);
const OptionDB = Option(db, DataTypes);
const HistoryDB =history(db,DataTypes)
const CommentReportDB =CommentReport(db,DataTypes)
const WatchhistoryDB = watchHistory(db, DataTypes);


// RelationShip

// Quiz RelationShip
CoursesDB.hasMany(QuizDB, {
  foreignKey: "courseID",
  onDelete: "cascade",
});
QuizDB.belongsTo(CoursesDB, {
  foreignKey: "courseID",
});

QuizDB.hasMany(QuestionDB, {
  foreignKey: "quizID",
  onDelete: "cascade",
});
QuestionDB.belongsTo(QuizDB, {
  foreignKey: "quizID",
});

QuestionDB.hasMany(OptionDB, {
  foreignKey: "questionID",
  onDelete: "cascade",
});
OptionDB.belongsTo(QuestionDB, {
  foreignKey: "questionID",
});

// course One-to-Many video

UsersDB.hasMany(AnnouncementDB, {
  foreignKey: "userID",
  onDelete: "cascade",
});

AnnouncementDB.belongsTo(UsersDB, {
  foreignKey: "userID",
});


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
  onDelete: "cascade",//delete after test
});

// Users One-to-Many video

UsersDB.hasMany(VideosDB, {
  foreignKey: "userID",
  onDelete: "cascade",
});

VideosDB.belongsTo(UsersDB, {
  foreignKey: "userID",
});

UsersDB.hasMany(WatchhistoryDB, {
  foreignKey: "userID",
  onDelete: "cascade",
});

WatchhistoryDB.belongsTo(UsersDB, {
  foreignKey: "userID",
});

CoursesDB.hasMany(WatchhistoryDB, {
  foreignKey: "courseID",
  onDelete: "cascade",
});

WatchhistoryDB.belongsTo(CoursesDB, {
  foreignKey: "courseID",
});


//video with report video
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

//comment report with comment
CommentDB.hasMany(CommentReportDB, {
	foreignKey: "commentID",
	onDelete: "cascade",
  });
  
  CommentReportDB.belongsTo(CommentDB, {
	foreignKey: "commentID",
  });
//user with comment report
UsersDB.hasMany(CommentReportDB, {
	foreignKey: "userID",
	onDelete: "cascade",
  });
  
  CommentReportDB.belongsTo(UsersDB, {
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
// course with files

CoursesDB.hasMany(FilesDB, {
  foreignKey: 'courseID',
  onDelete: "cascade",
})
FilesDB.belongsTo(CoursesDB, {
  foreignKey: 'courseID',
});


// VideosDB.hasMany(VideosReportsDB, {
//   foreignKey: 'videoID',
//   onDelete: "cascade",
// })
// VideosReportsDB.belongsTo(VideosDB, {
//   foreignKey: 'videoID',
// });


//whishList / Courses  one to many
// wishListDB.hasMany(CoursesDB, {
// 	foreignKey: 'wishListID',
//   })
//   CoursesDB.belongsTo(wishListDB, {
// 	foreignKey: 'wishListID',
  

  
  //whishList / users  one to one

  UsersDB.hasOne(wishListDB, {
	foreignKey: 'userID',
  });
  wishListDB.belongsTo(UsersDB, {
	foreignKey: 'userID',
  });





// collectiosn 


const commentCollection = new CRUD(CommentDB);
const videoCollection = new CRUD(VideosDB);
const courseCollection = new CRUD(CoursesDB);
const reportsCollection = new CRUD(VideosReportsDB);
const filesCollection = new CRUD(FilesDB);
const feedbackCollection = new CRUD(FeedbackDB);
const quizCollection = new CRUD(QuizDB);
const questionCollection = new CRUD(QuestionDB);
const optionCollection = new CRUD(OptionDB);
const userCollection = new CRUD(UsersDB);
const announcementCollection = new CRUD(AnnouncementDB);
const CommentreportsCollection = new CRUD(CommentReportDB);


module.exports = {
  db,
  FilesDB,
  QuizDB,
  userCollection,
  QuestionDB,
  questionCollection,
  optionCollection,
  OptionDB,
  WatchhistoryDB,
  feedbackCollection,
  quizCollection,
  commentCollection,
  videoCollection,
  courseCollection,
  reportsCollection,
  filesCollection,
  CommentreportsCollection,
  UsersDB,
  VideosDB,
  CoursesDB,
  CommentDB,
  ReplayDB,
  VideosReportsDB,
  FeedbackDB,
  announcementCollection,
  wishListDB,
  AnnouncementDB,
  HistoryDB,
  CommentReportDB

};
