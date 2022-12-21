/*eslint-disable */

class CRUD {
  constructor(model) {
    this.model = model;
  }

  async READ_ONE(id,child) {
    try {
        return await this.model.findOne(
          {
            where: {
                id
            },
            include:child
        }
         );
    } catch (err) {
      throw new Error(`${err} or maybay there is no record with this ID`);
    }
  }

  async READ_ALL(child) {
    try {
  
        return await this.model.findAll({
          include: child,
        });
      
    } catch (err) {
      throw new Error(err);
    }
  }


  async CREATE(payload) {
    try {
      return await this.model.create(payload);
    } catch (err) {
      throw new Error(err);
    }
  }

  async UPDATE(id, newPayload,userID) {
    try {
      const record = await this.model.findOne({where:{id}});
      if (record) {
        if(userID === record.userID)
             return await record.update({...record, ...newPayload });
        return null
      } else {
        return null;
      }
    } catch (err) {
      throw new Error(err);
    }
  }
 

  async DELETE(recordId,role,userID) {
    try {
      const record = await this.model.findOne({ where: { id:recordId } });
      if (record) {
        if(role === 'admin' || userID === record.userID)
            return await record.destroy();
        return null
      } else {
        return null;
      }
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = CRUD;
