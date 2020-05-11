const express = require('express');
const khachhangModel = require('../models/khachhang.model');
const giaodichModel = require('../models/giaodich.model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  // throw new Error('An error occurred');
  // try {
  const rows = await khachhangModel.all();
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
    const rows = await khachhangModel.loadById(id);
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
    const results = await khachhangModel.add(req.body);
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
    await khachhangModel.deleteById(id);
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

router.patch('/patch', async(req, res) => {
  if (isNaN(req.params.id)) {
    throw createError(400, 'Invalid id.');
  }

  const rs = await khachhangModel.patch(req.params.id, req.body);
  res.json(rs);
})

router.post('/information', async (req, res) => {
  if (isNaN(req.body.SoTaiKhoan)) {
    return res.status(400).json({
      err: 'Invalid SoTaiKhoan.'
    });
  }
  try {
    const rows = await khachhangModel.loadBySoTaiKhoan(req.body.SoTaiKhoan);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'NO_SoTaiKhoan'})
    }
    delete rows[0].idKhachHang;
    delete rows[0].SoTien;
    delete rows[0].Email;
    delete rows[0].SDT;
    res.json(rows);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.end('View error log on console.');
  }
})

router.post('/plus', async(req, res) => {
  // const publicKeyArmored = '-----BEGIN PGP PUBLIC KEY BLOCK-----\n'+
  // 'Version: Keybase OpenPGP v1.0.0\n'+
  // 'Comment: https://keybase.io/crypto\n'+
  // '\n'+
  // 'xo0EXljz3AEEALn+1n5uVVdblwD8kiYK1zDqkerRaispaPm8YdkZS6iTwiY71OCA\n'+
  // 'CadHB6HO8WMx8OpEqEYtbQIXlQPj2QIm/DA9xHdtX2/gxd577IyJwnywETTkpUsR\n'+
  // '+di0HmsbNhzgDsB+LgGOyB9WXFJRexZh0la67ddDjHZPB0XyEzzj2FevABEBAAHN\n'+
  // 'KFRow6FpIFF1YW5nIEto4bqjaSA8dm50aGFpMDg0QGdtYWlsLmNvbT7CrQQTAQoA\n'+
  // 'FwUCXljz3AIbLwMLCQcDFQoIAh4BAheAAAoJEGOs9+6JF/kw7u8EAJPkji7h8yBp\n'+
  // 'dOaYsoByrYJmvfKBCAreTrpHM+hzx+VgAQHYlqgSu6MGCX/zoxVvOE24LpBzM0eF\n'+
  // 'ZpQuhFcyiQ53VHgAIb0MYPwv3nU35q7M4D2TGGwpAGRihcB8xHwuM0s885+CC/gE\n'+
  // '8zM7VMqbF3J92V18nSbLn/awA9UsqvPfzo0EXljz3AEEALtUSJg3Q/aTeMS4gvT3\n'+
  // 'aChOBLuGXowuoLBKzVINlMFb8LO3+wMkLVal9QBFb3/SmSw58VMXEa7cIx7Q7hWI\n'+
  // 'zkwGC3kP4OzjSp4Q303Z67bFwTCmhcjKYyBAjXalyx0w8P+wIwQctNOrhYVjY6sr\n'+
  // '+P6ze60G4FLy9fZBgcHqgOZdABEBAAHCwIMEGAEKAA8FAl5Y89wFCQ8JnAACGy4A\n'+
  // 'qAkQY6z37okX+TCdIAQZAQoABgUCXljz3AAKCRDradfICdsoGkL5A/9M5vUgoI8O\n'+
  // 'i84wMK4le7pqa8lVYQBI8Us5YwVRRKkVGJ8duodrJMGH11RMnd1DxI9WN4kOXADu\n'+
  // 'er/1nJ4HGyLir5aQWAUcrJimtR0sCGl+dqo+VczKiou18exlMA543nTWljePX7ML\n'+
  // 'tcKCXhNlYYBQB84JWoL1rsmcNtBqxwKVOW5SA/9GQm9pnCyTohsl8UgEQv/6LmOh\n'+
  // 'vUdXuxe0RhtOf7YXiB5X5oi2fw3zBI2AjoEzbP+AdtZt/objBZBSnHg6MS6KP2fj\n'+
  // '+R+WBRpjbMHawjWG7fktsucYKCqyVSRBSuhl9ye14rY/HDjmajc01lmCPqGOv9cO\n'+
  // 'PP4zFaC8TChZ5BnEAc6NBF5Y89wBBACap5ILSVKUJ3rDgktlCxbLyN5vSrpKqCKo\n'+
  // 'MR1UAfArQs1NfcpTvtb+aWmLEVLbjjIaoFTqbvu88WGhPOyNMkWHT4+BD15wYH9M\n'+
  // 'doHa2mrsCy6ySvyRF9FrUBRzLFm2oaDd2gbCTboX58kA9iaNwtf8SziWc2XLc0KJ\n'+
  // 'W32aQ7Hz5QARAQABwsCDBBgBCgAPBQJeWPPcBQkPCZwAAhsuAKgJEGOs9+6JF/kw\n'+
  // 'nSAEGQEKAAYFAl5Y89wACgkQ+dV9aGsC5zk1uQP+KA6QzB+ikAQG7bu9g9w7SkfD\n'+
  // 'JBvtWC7csl/ekroWz4s6yyCGdUtqb21GhlP5MNkpTeHeyO8lZKVBiqi9J3sr3Ppc\n'+
  // 'D6mAWl31v+XLc5t3N/+lQPT3PhZKsFBVUGZBNW2fVQarybv8+JIxxExnUbpYVf7c\n'+
  // 'txuRuQFfymqlOUTDl8AkkwP/XkL+ZmJr6FbqI0q8jpXldLTbijl9GegJOIG9nwC5\n'+
  // 'v92UGIimlBfBDAudHoJ0QxEuHM5RfXIbgPTN357iZn9U2Odd9f9ZLvXzYTVbGq2P\n'+
  // '2pdMh9zcZE76ReQmG6jwxSwz1hX0RjbC1c39vR/LGY904enGocJB1tLqKBA7pYH+\n'+
  // 'qzA=\n'+
  // '=5NOK\n'+
  // '-----END PGP PUBLIC KEY BLOCK-----';
  const privateKeyArmored = '-----BEGIN PGP PRIVATE KEY BLOCK-----\n'+
  'Version: Keybase OpenPGP v1.0.0\n'+
  'Comment: https://keybase.io/crypto\n'+
  '\n'+
  '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\n'+
  '=c9ND\n'+
  '-----END PGP PRIVATE KEY BLOCK-----'; // encrypted private key
  const passphrase = '12345'; // what the private key is encrypted with

  const { keys: [privateKey] } = await openpgp.key.readArmored(privateKeyArmored);
  await privateKey.decrypt(passphrase);

  try {
    const { data: decrypted } = await openpgp.decrypt({
      message: await openpgp.message.readArmored(req.body.data),              // parse armored message
      //publicKeys: (await openpgp.key.readArmored(publicKeyArmored)).keys, // for verification (optional)
      privateKeys: [privateKey]                                           // for decryption
    });
    data = JSON.parse(decrypted);
    const rows = await khachhangModel.loadBySoTaiKhoan(data.SoTaiKhoanN);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'NO_SoTaiKhoanN'})
    }
    const rows3 = rows;
    rows[0].SoTien=Number(rows[0].SoTien) + Number(req.body.SoTien);
    const rs = await khachhangModel.patch(rows[0].idKhachHang, rows[0]);
    if(rs.length === 0){
      return res.status(500).send('View error log on console.');
    }
    const rows2=await giaodichModel.add(data);
    if(rows2.length === 0){
      await khachhangModel.patch(rows3[0].idKhachHang, rows3[0]);
      return res.status(500).send('View error log on console.');
    }
    res.json(req.body);
  } catch (error) {
    return res.status(401).json({ error: 'DATA_ERROR'})
  }
})

router.post('/minus', async(req, res) => {
  const privateKeyArmored = '-----BEGIN PGP PRIVATE KEY BLOCK-----\n'+
  'Version: Keybase OpenPGP v1.0.0\n'+
  'Comment: https://keybase.io/crypto\n'+
  '\n'+
  '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\n'+
  '=c9ND\n'+
  '-----END PGP PRIVATE KEY BLOCK-----'; // encrypted private key
  const passphrase = '12345'; // what the private key is encrypted with

  const { keys: [privateKey] } = await openpgp.key.readArmored(privateKeyArmored);
  await privateKey.decrypt(passphrase);

  try{
    const { data: decrypted } = await openpgp.decrypt({
      message: await openpgp.message.readArmored(req.body.data),              // parse armored message
      //publicKeys: (await openpgp.key.readArmored(publicKeyArmored)).keys, // for verification (optional)
      privateKeys: [privateKey]                                           // for decryption
    });
    data = JSON.parse(decrypted);
    const rows = await khachhangModel.loadBySoTaiKhoan(data.SoTaiKhoanG);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'NO_SoTaiKhoanG'})
    }
    const rows3 = rows;
    rows[0].SoTien = Number(rows[0].SoTien) - Number(req.body.SoTien);
    if(rows[0].SoTien<0){
      return res.status(501).json({ error: 'The amount is not enough to deduct'});
    }
    const rs = await khachhangModel.patch(rows[0].idKhachHang, rows[0]);
    if(rs.length=== 0){
      return res.status(500).send('View error log on console.');
    }
    const rows2=await giaodichModel.add(req.body);
    if(rows2.length === 0){
      await khachhangModel.patch(rows3[0].idKhachHang, rows3[0]);
      return res.status(500).send('View error log on console.');
    }
    res.json(req.body);
  } catch (error) {
    return res.status(401).json({ error: 'DATA_ERROR'})
  }

})

module.exports = router;