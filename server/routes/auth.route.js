const express = require('express');
const jwt = require('jsonwebtoken');
const rndToken = require('rand-token');
const authModel = require('../models/auth.model');

const router = express.Router();

//
// login

router.post('/', async (req, res) => {
  // req.body = {
  // 	"TenDangNhap": "Thai Quang Khai",
  // 	"MatKhau": "123"
  // }
  //console.log('req.body');
  const ret = await authModel.login(req.body);
  if (ret === null) {
    return res.json({
      authenticated: false
    });
  }

  const payload = {
    userId: ret.f_ID
  }
  const token = jwt.sign(payload, 'shhhhh', {
    expiresIn: 10 * 60 * 1000 // 10 mins
  });
  const rfToken = rndToken.generate(80);
  res.json({
    // authenticated: true,
    accessToken: token,
    refreshToken: rfToken,
    data:ret
  })
})

module.exports = router;