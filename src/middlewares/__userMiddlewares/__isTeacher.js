/* eslint-disable*/
const isTeacher = (req, res, next) => {
  const isTeacher = req.user.isTeacher;
  if(isTeacher){
    next()
    return;
  } 
  res.send("you are not Teacher ")
};

module.exports = isTeacher;