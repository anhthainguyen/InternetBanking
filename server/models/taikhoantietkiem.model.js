const db = require('../utils/db');

module.exports = {
  all: () => {
    const sql = 'select * from taikhoantietkiem';
    return db.load(sql);
  },

  loadById: id => {
    const sql = `select * from taikhoantietkiem where idTKTietKiem = ${id}`;
    return db.load(sql);
  },

  deleteById: id => {
    const sql = `delete from taikhoantietkiem where idTKTietKiem = ${id}`;
    return db.load(sql);
  },

  add: entity => db.add(entity, 'taikhoantietkiem'),

  patch: (id, entity) => {
    delete entity.CatID;
    return db.patch(entity, { idTKTietKiem: id }, 'taikhoantietkiem')
  },
};
