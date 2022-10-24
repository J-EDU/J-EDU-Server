const { CategoryDB,categoryCollection } = require("../models");


const __addCategory = async (req, res, next) => {
    try {
      
      let createdcategory = await categoryCollection.CREATE({...req.body})
      res.status(201).json(createdcategory);
    } catch (err) {
      next(`Error categoryCRUD.js ${err}`);
    }
  };


  const __deleteCategory = async (req, res, next) => {
    try {
      let id = req.params.id;
      let deletedcategory= await categoryCollection.DELETE(id)
      if(deletedcategory)
      return res.status(200).json({msg:"Ok"});
      return res.status(404).json({msg:"No category"});
    
    } catch (err) {
      next(`Error categoryCRUD.js ~ line 24 : ${err}`);
    }
  };


  const __getCategory = async (req, res, next) => {

    try {
      const categories = await categoryCollection.READ_ALL(
       
      )
      if(categories)
        return res.status(200).json({categories});
        return res.status(201).json({msg : "there is no categories"});
    
    } catch (err) {
      next(` category CRUD.js ~line 40  ${err}`)
    }
  };
  


  module.exports = {
    __addCategory,
    __deleteCategory,
    __getCategory
  };