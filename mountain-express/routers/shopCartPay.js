const express = require("express");
const router = express.Router();
const connection = require("../utils/db");
const multer = require("multer");
const upload = multer();

router.post("", upload.none(), async function (req, res, next) {
  const moment = require('moment');
  let dbResults = await connection.queryAsync("INSERT INTO user_order SET ?",[{
    ship: req.body.ship, 
    zip_code: req.body.zip_code, 
    addr: req.body.addr, 
    invoice: req.body.invoice, 
    pay_way: req.body.pay_way, 
    name: req.body.name, 
    phone: req.body.phone,
    user_id: req.session.account.id,
    time: moment().format('YYYY/MM/DD HH:mm:ss')
  }]
  ); 

  console.log(dbResults)

  // res.json([]);
  res.json({});
});

module.exports = router;