const db = require('../utils/db');

module.exports = {
  all: () => {
    const sql = 'select * from nhacno';
    return db.load(sql);
  },

  loadById: id => {
    const sql = `select * from nhacno where idNhacNo = ${id}`;
    return db.load(sql);
  },

  loadBySoTKChuNo: SoTKChuNo => {
    const sql = `select * from nhacno where SoTKChuNo = ${SoTKChuNo}`;
    return db.load(sql);
  },

  loadBySoTKNguoiNo: SoTKNguoiNo => {
    const sql = `select * from nhacno where SoTKNguoiNo = ${SoTKNguoiNo}`;
    return db.load(sql);
  },

  deleteById: id => {
    const sql = `delete from nhacno where idNhacNo = ${id}`;
    return db.load(sql);
  },

  add: entity => db.add(entity, 'nhacno'),

  patch: (id, entity) => {
    delete entity.CatID;
    return db.patch(entity, { idNhacNo: id }, 'nhacno')
  },
};
