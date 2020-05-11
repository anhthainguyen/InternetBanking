const db = require('../utils/db');

module.exports = {
  all: () => {
    const sql = 'select * from khachhang';
    return db.load(sql);
  },

  loadById: id => {
    const sql = `select * from khachhang where idKhachHang = ${id}`;
    return db.load(sql);
  },

  deleteById: id => {
    const sql = `delete from khachhang where idKhachHang = ${id}`;
    return db.load(sql);
  },

  add: entity => db.add(entity, 'khachhang'),

  patch: (id, entity) => {
    delete entity.idKhachHang;
    return db.patch(entity, { idKhachHang: id }, 'khachhang')
  },

  loadBySoTaiKhoan: SoTaiKhoan => {
    const sql = `select * from khachhang where SoTaiKhoan = ${SoTaiKhoan}`;
    return db.load(sql);
  },

};
