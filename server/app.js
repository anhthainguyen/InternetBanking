const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
const jwt = require('jsonwebtoken');
require('express-async-errors');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    msg: 'hello from nodejs express api'
  });
})

app.use('/api/tkdangnhap', require('./routes/tkdangnhap.route'));

app.use((req, res, next) => {
  const err404 = createError(404, 'NOT FOUND');
  next(err404);
})

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('View error log on console.');
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API is running at http://localhost:${PORT}`);
})