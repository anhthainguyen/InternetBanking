const db = require('../utils/db');

module.exports = {
  all: () => {
    const sql = 'select * from nguoinhan';
    return db.load(sql);
  },

  loadById: id => {
    const sql = `select * from nguoinhan where idKhachHang = ${id}`;
    return db.load(sql);
  },

  deleteById: id => {
    const sql = `delete from nguoinhan where idNguoiNhan = ${id}`;
    return db.load(sql);
  },

  add: entity => db.add(entity, 'nguoinhan'),

  patch: (id, entity) => {
    delete entity.CatID;
    return db.patch(entity, { idNguoiNhan: id }, 'nguoinhan')
  },
};
