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
  // next();
  const token = req.headers['x-access-token'];
  const code = req.headers['code'];
  const time = req.headers['time'];
  const hash = req.headers['hash'];
  const c = code + time;
  
  if (token && code && time && hash) {
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
    throw createError(401, 'NO_TOKEN OR CODE OR TIME OR HASH');
  }
}

function verifyAccessPartnerPGP(req, res, next) {
  // next();
  const code1 = '1234';
  const code2 = '2345';
  const time = req.body.time;
  const hash = req.body.hash;
  const code = req.body.code;
  const c1 = code1 + time;
  const c2 = code2 + time;
  if (code && time && hash) {
    const now = moment();
    const after = now.clone().subtract(30, 'seconds');
    if (after.format('YYYY-MM-DD HH:mm:ss')<time && time < now.format('YYYY-MM-DD HH:mm:ss')) {
      if(bcrypt.compareSync(c1, hash) || bcrypt.compareSync(c2, hash)){
        next();
      }
      else{
        throw createError(401, 'HASH_ERROR');
      }
    }else {
      throw createError(401, 'TIME_ERROR');
    }
    //console.log(payload);
    //next();
  } else {
    throw createError(400, 'NO_CODE OR TIME OR HASH');
  }
}

app.use('/api/khachhang', verifyAccessToken, require('./routes/khachhang.route'));
app.use('/api/nguoinhan', verifyAccessToken, require('./routes/nguoinhan.route'));
app.use('/api/nhacno', verifyAccessToken, require('./routes/nhacno.route'));
app.use('/api/nhanvien', verifyAccessToken, require('./routes/nhanvien.route'));

app.use('/api/giaodich', verifyAccessToken, require('./routes/giaodich.route'));
app.use('/api/taikhoantietkiem', verifyAccessToken, require('./routes/taikhoantietkiem.route'));
app.use('/api/doisoat', verifyAccessToken, require('./routes/doisoat.route'));

app.use('/api', verifyAccessPartnerPGP, require('./routes/khachhang.route'));


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