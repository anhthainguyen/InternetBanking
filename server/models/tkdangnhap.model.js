const bcrypt = require('bcryptjs');
const db = require('../utils/db');

module.exports = {
  all: () => {
    const sql = 'select * from tkdangnhap';
    return db.load(sql);
  },

  loadById: id => {
    const sql = `select * from tkdangnhap where idTKDangNhap = ${id}`;
    return db.load(sql);
  },

  deleteById: id => {
    const sql = `delete from tkdangnhap where idTKDangNhap = ${id}`;
    return db.load(sql);
  },

  //add: entity => db.add(entity, 'tkdangnhap'),
  add: (entity) => {
    const hash = bcrypt.hashSync(entity.MatKhau, 8);
    entity.MatKhau = hash;
    return db.add(entity, 'tkdangnhap')
  },

  singleByUserName: userName => db.load(`select * from tkdangnhap where idTKDangNhap = '${userName}'`),
  
  patch: (id, entity) => {
    delete entity.CatID;
    return db.patch(entity, { CatID: id }, 'tkdangnhap')
  },
};
