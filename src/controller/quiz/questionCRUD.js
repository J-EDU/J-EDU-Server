/* eslint-disable*/
const { questionCollection, QuestionDB, OptionDB } = require("../../models");

const __addqustion = async (req, res, next) => {
  try {
    
    let createdqustion = await questionCollection.CREATE({...req.body})
    res.status(201).json(createdqustion);
  } catch (err) {
    next(`Error qustionCRUD.js ~ line 11 : ${err}`);
  }
};

const __deletequstion = async (req, res, next) => {
  try {
    let id = req.params.id;
    let deletedqustion= await questionCollection.DELETE(id)
    if(deletedqustion)
    return res.status(200).json({msg:"Ok"});
    return res.status(404).json({msg:"No qustion"});
  
  } catch (err) {
    next(`Error qustionCRUD.js ~ line 24 : ${err}`);
  }
};

const __updatequstion = async (req, res, next) => {
	try {
		let id = req.params.id;
		let newqustionData = req.body;  
	await questionCollection.UPDATE(id,newqustionData);
		let qustion = await questionCollection.READ_ONE(id,
      [
        {
          model: OptionDB,
        },
      ]
      )
    if(qustion)
    return res.status(200).json({qustion});
    return res.status(201).json({msg : "there is no qustions"});
	} catch (err) {
    console.log("Hassan ~ file: questionCRUD.js ~ line 44 ~ err", err)
    next(` qustionCRUD.js ~ line 44  ${err}`)
	}
};

const __getqustions = async (req, res, next) => {

  try {
    const qustions = await questionCollection.READ_ALL(
         [
        {
          model: OptionDB
        },
      ]
    )
    if(qustions)
      return res.status(200).json({qustions});
      return res.status(201).json({msg : "there is no qustions"});
  
  } catch (err) {
    next(` qustionCRUD.js ~ line 65  ${err}`)
  }
};

module.exports = {
  __addqustion,
  __deletequstion,
  __updatequstion,
  __getqustions
};
