/*eslint-disable */

class CRUD {
  constructor(model) {
    this.model = model;
  }

  async READ(id, child) {
    try {
      if (id) {
        return await this.modell.findAll(
          { where: { id } },
          {
            include: child,
          }
        );
      } else {
        return await this.modell.findAll({
          include: child,
        });
      }
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
        return await record.update(newPayload);
      } else {
        return null;
      }
    } catch (err) {
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
