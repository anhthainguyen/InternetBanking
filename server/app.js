const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const openpgp = require('openpgp');
const bcrypt = require('bcryptjs');
const moment = require('moment');
require('express-async-errors');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/',(req, res) => {
  res.json({
    msg: 'hello from nodejs express api'
  });
})

app.use('/api/auth', require('./routes/auth.route'));
app.use('/api/tkdangnhap', require('./routes/tkdangnhap.route'));



function verifyAccessToken(req, res, next) {
  // console.log(req.headers);
  const token = req.headers['x-access-token'];
  const code = req.headers['code'];
  const time = req.headers['time'];
  const hash = req.headers['hash'];
  const c = code + time;
  //next();
  

  if (token) {
    jwt.verify(token, 'shhhhh', function (err, payload) {
      if (err) throw createError(403, err);
      const now = moment();
      const after = now.clone().subtract(30, 'seconds');
      if (bcrypt.compareSync(c, hash) && after.format('YYYY-MM-DD HH:mm:ss')<time && time < now.format('YYYY-MM-DD HH:mm:ss')) {
        next();
      }else {
        throw createError(401, 'HASH_ERROR');
      }
      //console.log(payload);

      //next();
    });
  } else {
    throw createError(401, 'NO_TOKEN');
  }
  
  // const c = entity.code + entity.time;
  // if (hash) {
  //   const hash = bcrypt.hashSync(hash, 8);
  //   if (!bcrypt.compareSync(c, hash)) {
  //     throw createError(300, 'Saaaaaaaaaaa');
  //   }
  //   else{
  //     throw createError(200, 'TC');
  //   }
  // } else {
  //   throw createError(401, 'NO_HASH');
  // }
}

app.use('/api/khachhang', verifyAccessToken, require('./routes/khachhang.route'));
app.use('/api/nguoinhan', verifyAccessToken, require('./routes/nguoinhan.route'));
app.use('/api/nhacno', verifyAccessToken, require('./routes/nhacno.route'));
app.use('/api/nhanvien', verifyAccessToken, require('./routes/nhanvien.route'));

app.use('/api/taikhoan', verifyAccessToken, require('./routes/taikhoan.route'));
app.use('/api/taikhoantietkiem', verifyAccessToken, require('./routes/taikhoantietkiem.route'));


app.use((req, res, next) => {
  throw createError(404, 'Resource not found.');
})

app.use(function (err, req, res, next) {
  if (typeof err.status === 'undefined' || err.status === 500) {
    console.error(err.stack);
    res.status(500).send('View error log on console.');
  } else {
    res.status(err.status).send(err);
  }
})


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API is running at http://localhost:${PORT}`);
})