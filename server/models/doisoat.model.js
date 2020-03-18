const db = require('../utils/db');

module.exports = {
  all: () => {
    const sql = 'select * from doisoat';
    return db.load(sql);
  },

  loadById: id => {
    const sql = `select * from doisoat where idDoiSoat = ${id}`;
    return db.load(sql);
  },

  deleteById: id => {
    const sql = `delete from doisoat where idDoiSoat = ${id}`;
    return db.load(sql);
  },

  add: entity => db.add(entity, 'doisoat'),

  patch: (id, entity) => {
    delete entity.idDoiSoat;
    return db.patch(entity, { idDoiSoat: id }, 'nhanvien')
  },
};
