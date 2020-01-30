const express = require('express');
const apModel = require('../models/nhacno.model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  // throw new Error('An error occurred');

  // try {
  const rows = await apModel.all();
  // throw new Error('An async/await-error occurred');
  res.json(rows);
  // } catch (err) {
  // console.log(err);
  // res.status(500);
  // res.end('View error log on console.');
  // next(err);
  // }

  // db.load(sql, results => {
  //   res.json(results);
  // });

  // categoryModel.all()
  //   .then(rows => {
  //     throw new Error('An promise-error occurred');
  //     res.json(rows)
  //   }).catch(next);
  // .catch(err => {
  //   console.log(err);
  //   res.status(500);
  //   res.end('View error log on console.')
  // })
})

router.get('/:id', async (req, res) => {
  // const sql = `select * from categories where CatID = ${req.params.id}`;
  // db.load(sql, results => {
  //   res.json(results[0]);
  // });

  if (isNaN(req.params.id)) {
    return res.status(400).json({
      err: 'Invalid id.'
    });
  }

  const id = req.params.id || -1;
  try {
    const rows = await apModel.loadById(id);
    if (rows.length === 0) {
      res.status(204).end();
    } else {
      res.json(rows[0]);
    }
  } catch (err) {
    console.log(err);
    res.status(500);
    res.end('View error log on console.');
  }

  // categoryModel.loadById(id)
  //   .then(rows => {
  //     if (rows.length === 0) {
  //       res.status(204).end();
  //     } else {
  //       res.json(rows[0]);
  //     }
  //   }).catch(err => {
  //     console.log(err);
  //     res.status(500);
  //     res.end('View error log on console.')
  //   })
})

router.post('/add', async (req, res) => {
  try {
    const results = await apModel.add(req.body);
    const ret = {
      CatID: results.insertId,
      ...req.body
    }
    res.status(201).json(ret);
  } catch (err) {

  }
  // categoryModel.add(req.body)
  //   .then(results => {
  //     const ret = {
  //       CatID: results.insertId,
  //       ...req.body
  //     }
  //     res.status(201).json(ret);
  //   })
})

router.delete('/:id', async(req, res) => {
  if (isNaN(req.params.id)) {
    return res.status(400).json({
      err: 'Invalid id.'
    });
  }

  const id = req.params.id || -1;
  try {
    await apModel.deleteById(id);
    res.json({
      msg: 'finish'
    });
  } catch (err) {
    console.log(err);
    res.status(500);
    res.end('View error log on console.');
  }
  // res.json({
  //   msg: 'del'
  // });
})

router.patch('/:id', async (req, res) => {
  if (isNaN(req.params.id)) {
    throw createError(400, 'Invalid id.');
  }

  const rs = await categoryModel.patch(req.params.id, req.body);
  res.json(rs);
})

module.exports = router;