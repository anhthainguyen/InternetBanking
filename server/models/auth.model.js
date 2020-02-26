const bcrypt = require('bcryptjs');
const tkdangnhapModel = require('./tkdangnhap.model');

module.exports = {
  login: async entity => {
    // entity = {
    //   "TenDangNhap": 1,
    //   "MatKhau": "1"
    // }
    // console.log(entity);
    const rows = await tkdangnhapModel.singleByTenDangNhap(entity.TenDangNhap);
    console.log(rows);
    if (rows === 0)
      return null;

    const hashPwd = rows[0].MatKhau;
    if (bcrypt.compareSync(entity.MatKhau, hashPwd)) {
      return rows[0];
    }

    return null;
  }
};
