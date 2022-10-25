/* eslint-disable*/
const { optionCollection } = require("../../models");

const __addoption = async (req, res, next) => {
	let {type}=req.body;
  try {
    
    let createdoption = await optionCollection.CREATE({...req.body})
    res.status(201).json(createdoption);
  } catch (err) {
    next(`Error optionCRUD.js ~ line 11 : ${err}`);
  }
};

const __deleteoption = async (req, res, next) => {
  try {
    let id = req.params.id;
    let deletedoption= await optionCollection.DELETE(id)
    if(deletedoption)
    return res.status(200).json({msg:"Ok"});
    return res.status(404).json({msg:"No option"});
  
  } catch (err) {
    next(`Error optionCRUD.js ~ line 24 : ${err}`);
  }
};

const __updateoption = async (req, res, next) => {
	try {
		let id = req.params.id;
		let newoptionData = req.body;  
	await optionCollection.UPDATE(id,newoptionData);
		let option = await optionCollection.READ_ONE(id)
    if(option)
    return res.status(200).json({option});
    return res.status(201).json({msg : "there is no options"});
	} catch (err) {
    console.log("Hassan ~ file: questionCRUD.js ~ line 44 ~ err", err)
    next(` optionCRUD.js ~ line 44  ${err}`)
	}
};

const __getoptions = async (req, res, next) => {

  try {
    const options = await optionCollection.READ_ALL()
    if(options)
      return res.status(200).json({options});
      return res.status(201).json({msg : "there is no options"});
  
  } catch (err) {
    next(` qustionCRUD.js ~ line 65  ${err}`)
  }
};

module.exports = {
  __addoption,
  __deleteoption,
  __updateoption,
  __getoptions
};
