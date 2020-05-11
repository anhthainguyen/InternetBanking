const express = require('express');
const apModel = require('../models/nhacno.model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const rows = await apModel.all();
  res.json(rows);
})

router.get('/SoTKChuNo/:SoTKChuNo', async (req, res) => {

  if (isNaN(req.params.SoTKChuNo)) {
    return res.status(400).json({
      err: 'Invalid id.'
    });
  }

  const SoTKChuNo = req.params.SoTKChuNo || -1;
  try {
    const rows = await apModel.loadBySoTKChuNo(SoTKChuNo);
    if (rows.length === 0) {
      res.json(rows)
      res.status(204).end();
    } else {
      res.json(rows);
    }
  } catch (err) {
    console.log(err);
    res.status(500);
    res.end('View error log on console.');
  }
})

router.get('/SoTKNguoiNo/:SoTKNguoiNo', async (req, res) => {
  if (isNaN(req.params.SoTKNguoiNo)) {
    return res.status(400).json({
      err: 'Invalid id.'
    });
  }

  const SoTKNguoiNo = req.params.SoTKNguoiNo || -1;
  try {
    const rows = await apModel.loadBySoTKNguoiNo(SoTKNguoiNo);
    if (rows.length === 0) {
      res.json(rows)
      res.status(204).end();
    } else {
      res.json(rows);
    }
  } catch (err) {
    console.log(err);
    res.status(500);
    res.end('View error log on console.');
  }
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
})

router.patch('/:id', async (req, res) => {
  if (isNaN(req.params.id)) {
    throw createError(400, 'Invalid id.');
  }

  const rs = await apModel.patch(req.params.id, req.body);
  res.json(rs);
})

module.exports = router;