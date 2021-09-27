const express = require("express");
const router = express.Router();
const connection = require("../utils/db");
const multer = require("multer");
const upload = multer();

router.post("", upload.none(), async function (req, res, next) {
  let dbResults = await connection.queryAsync("INSERT INTO user_order SET ?",[{
    ship: req.body.ship, 
    zip_code: req.body.zip_code, 
    addr: req.body.addr, 
    invoice: req.body.invoice, 
    pay_way: req.body.pay_way, 
    name: req.body.name, 
    phone: req.body.phone
  }]
  ); 

  // "UPDATE user SET ? WHERE id=?", [{
  //   name : req.body.name,
  //   account: req.body.account,
  //   phone: req.body.phone,
  //   birthday: req.body.birthday,
  //   zip_code: req.body.zip_code, 
  //   addr: req.body.addr
  // },1]

  console.log(dbResults)

  // res.json([]);
  res.json({});
});

module.exports = router;