const db = require('../utils/db');

module.exports = {
  all: () => {
    const sql = 'select * from taikhoan';
    return db.load(sql);
  },

  loadById: id => {
    const sql = `select * from taikhoan where idkhachhang = ${id}`;
    return db.load(sql);
  },

  deleteById: id => {
    const sql = `delete from taikhoan where idkhachhang = ${id}`;
    return db.load(sql);
  },

  add: entity => db.add(entity, 'taikhoan'),

  patch: (id, entity) => {
    delete entity.CatID;
    return db.patch(entity, { idkhachhang: id }, 'taikhoan')
  },
};
