const express = require('express');
const giaodichModel = require('../models/giaodich.model');
const khachhangModel = require('../models/khachhang.model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  // throw new Error('An error occurred');

  // try {
  const rows = await giaodichModel.all();
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

router.get('/SoTaiKhoanG/:SoTaiKhoanG', async (req, res) => {

  if (isNaN(req.params.SoTaiKhoanG)) {
    return res.status(400).json({
      err: 'Invalid SoTaiKhoanG.'
    });
  }

  const SoTaiKhoanG = req.params.SoTaiKhoanG || -1;
  try {
    const rows = await giaodichModel.loadBySoTaiKhoanG(SoTaiKhoanG);
    if (rows.length === 0) {
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
router.get('/SoTaiKhoanN/:SoTaiKhoanN', async (req, res) => {

    if (isNaN(req.params.SoTaiKhoanN)) {
      return res.status(400).json({
        err: 'Invalid SoTaiKhoanN.'
      });
    }
  
    const SoTaiKhoanN = req.params.SoTaiKhoanN || -1;
    try {
      const rows = await giaodichModel.loadBySoTaiKhoanN(SoTaiKhoanN);
      if (rows.length === 0) {
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
    const rowsG = await khachhangModel.loadBySoTaiKhoan(req.body.SoTaiKhoanG);
    if (rowsG.length === 0) {
      return res.status(404).json({ error: 'NO_SoTaiKhoanG'})
    }
    const rowsN = await khachhangModel.loadBySoTaiKhoan(req.body.SoTaiKhoanN);
    if (rowsN.length === 0) {
      return res.status(404).json({ error: 'NO_SoTaiKhoanN'})
    }

    const rowsG1=rowsG;
    rowsG[0].SoTien=Number(rowsG[0].SoTien) - Number(req.body.SoTien);
    if(rowsG[0].SoTien <= 0){
      return res.status(501).send('Not enough money to transfer.');
    }
    const rsG = await khachhangModel.patch(rowsG[0].idKhachHang, rowsG[0]);
    if(rsG.length === 0){
      return res.status(500).send('View error log on console.');
    }

    rowsN[0].SoTien=Number(rowsN[0].SoTien) + Number(req.body.SoTien);
    const rsN = await khachhangModel.patch(rowsN[0].idKhachHang, rowsN[0]);
    if(rsN.length === 0){
      await khachhangModel.patch(rowsG1[0].idKhachHang, rowsG1[0]);
      return res.status(500).send('View error log on console.');
    }
    const rows2=await giaodichModel.add(req.body);
    if(rows2.length === 0){
      return res.status(500).send('View error log on console.');
    }
    const ret = {
      CatID: rows2.insertId,
      ...req.body
    }
    return res.status(201).json(ret);;
  } catch (err) {
    console.log(err);
    res.status(500);
    res.end('View error log on console.');
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
    await giaodichModel.deleteById(id);
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

  const rs = await giaodichModel.patch(req.params.id, req.body);
  res.json(rs);
})

module.exports = router;