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

  async UPDATE(id, newPayload) {
    try {
      const record = await this.model.findOne({where:{id}});
      if (record) {
        return await record.update({...record, ...newPayload });
      } else {
        return null;
      }
    } catch (err) {
      console.log("Hassan ~ file: DB_CRUD.js ~ line 53 ~ err", err)
      throw new Error(err);
    }
  }

  async DELETE(id) {
    try {
      const record = await this.model.findOne({ where: { id } });
      if (record) {
        return await record.destroy();
      } else {
        return null;
      }
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = CRUD;
