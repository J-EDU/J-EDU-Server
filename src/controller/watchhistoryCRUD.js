/* eslint-disable*/

const { Sequelize } = require("sequelize");
const { WatchhistoryDB, CoursesDB, VideosDB, watchHistoryCollection } = require("../models");


const __addWatchhistory= async (req, res, next) => {
     try {
      const history = await WatchhistoryDB.findOne({
        where: {
          courseID : req.body.courseID,
          userID : req.user.id
        }
      });
      if(history)
        return res.status(200).json({msg:"this is already added"});

      let createdWatchhistory = await WatchhistoryDB.create({...req.body,userID:req.user.id});
      res.status(201).json(createdWatchhistory);
    } catch (error) {
      res.status(404).json({ error});
      console.log("Catch", error);
    }
 
};


const __isCompleted= async (req, res, next) => {
  try {
    const history = await WatchhistoryDB.findOne({
      where: {
        id : req.user.id
      }
    });
    if(history.isComplete)
      return next();
    
  return res.status(201).json({
      msg : "You still did not complete the course "
    })
} catch (err) {
  next(`watchhistoryCRUD.js ~ line 45 ~ error ${err}`);
}
};

const __getWatchhistory= async (req, res, next) => {
  try {
    const Histories = await WatchhistoryDB.findAll();

    res.status(200).json({
      Histories
    })
} catch (err) {
  next(`watchhistoryCRUD.js ~ line 45 ~ error ${err}`);
}
};

const __updateWatchhistory = async (req, res, next) => {
  try {
    let id = req.params.id;
    if(!id){
      return res.status(404).send("please provide us With ID")
    }
    const history = await WatchhistoryDB.findOne({
      where: {
        courseID : id,
        userID : req.user.id
      }
    });
    
    if(!history)
    return res.status(404).json({msg:"there is no Watch hisroty with this data "});

          if(history){
            const count = await VideosDB.findAndCountAll({
              where: {
                courseID: history.courseID
              }
            });
            console.log("Hassan ~ file: watchhistoryCRUD.js ~ line 84 ~ history.videos.length <= count.count", history.videos.length <= count.count)
          
            if(history.videos.length >= count.count){

              await WatchhistoryDB.update(
              {
                ...history,isComplete:true,
              },
              {
                where: {  
                  courseID : id,
                  userID : req.user.id
                },
              })
              return res.status(200).send("You alreay watch all video in this Course")
            }else{
              await WatchhistoryDB.update(
                {
                  ...history,isComplete:false,
                },
                {
                  where: {  
                    courseID : id,
                    userID : req.user.id
                  },
                })
            }
            

            let flag = true;
            let data = null,updated = null
            history.videos.forEach(element => {
              if(req.body.video===element)
              flag=false
            });
            
            console.log("Hassan ~ file: watchhistoryCRUD.js ~ line 97 ~ flag", flag)
            if(flag){
             data = await WatchhistoryDB.update(
                {videos: Sequelize.fn('array_append', Sequelize.col('videos'), req.body.video)},
                {where: {
                  courseID : id,
                  userID : req.user.id
                }}
               );
               let videos = data.videos
             console.log("Hassan ~ file: watchhistoryCRUD.js ~ line 89 ~ data", videos)
  
               let counter = history.videos.length+1
              updated = await WatchhistoryDB.update(
                {
                  ...data,counter,
                },
                {
                  where: { 
                    courseID : id,
                  userID : req.user.id
                   },
                })
            }
            if(flag)
              return res.status(200).json({ updated });            
              return res.status(201).json({msg:"this video is already been added " });

          }else{
            return res.status(404).send("there is no History")
          }

  } catch (err) {

    next(`Error inside Update Watchhistory function : ${err}`);
  }
};

module.exports = {
	__addWatchhistory,
	__isCompleted,
  __getWatchhistory,
	__updateWatchhistory
};
