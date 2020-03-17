const db = require('../utils/db');

module.exports = {
  all: () => {
    const sql = 'select * from giaodich';
    return db.load(sql);
  },

  loadById: id => {
    const sql = `select * from giaodich where idGiaoDich = ${id}`;
    return db.load(sql);
  },

  loadBySoTaiKhoanG: id => {
    const sql = `select * from giaodich where SoTaiKhoanG = ${id}`;
    return db.load(sql);
  },

  loadBySoTaiKhoanN: id => {
    const sql = `select * from giaodich where SoTaiKhoanN = ${id}`;
    return db.load(sql);
  },

  deleteById: id => {
    const sql = `delete from giaodich where idGiaoDich = ${id}`;
    return db.load(sql);
  },

  add: entity => db.add(entity, 'giaodich'),
  // add: entity => {
  //   //db.add(entity, 'giaodich')
  //   console.log(entity);
  // },

  patch: (id, entity) => {
    delete entity.idkhachhang;
    return db.patch(entity, { idkhachhang: id }, 'giaodich')
  },
};
