const db = require('../utils/db');

module.exports = {
  all: () => {
    const sql = 'select * from nhanvien';
    return db.load(sql);
  },

  loadById: id => {
    const sql = `select * from nhanvien where idNhanVien = ${id}`;
    return db.load(sql);
  },

  deleteById: id => {
    const sql = `delete from nhanvien where idNhanVien = ${id}`;
    return db.load(sql);
  },

  add: entity => db.add(entity, 'nhanvien'),

  patch: (id, entity) => {
    delete entity.idNhanVien;
    return db.patch(entity, { idNhanVien: id }, 'nhanvien')
  },
};
