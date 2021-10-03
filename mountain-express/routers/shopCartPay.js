const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.post("/pay-info", async function (req, res, next) {
  const moment = require('moment');
  // console.log("req.body:",req.body);
  var dbResultsPayInfo = await connection.queryAsync("INSERT INTO user_order SET ?",[{
    ship: req.body.ship, 
    zip_code: req.body.zip_code, 
    addr: req.body.addr, 
    invoice: req.body.invoice, 
    pay_way: req.body.pay_way, 
    name: req.body.name, 
    phone: req.body.phone,
    user_id: req.session.account.id,
    time: moment().format('YYYY/MM/DD HH:mm:ss'),
    status: 1,
    pay_status: 1,
  }]
  ); 

  for (i=0; i<req.body.cartLocal.length; i++){
    var dbResultsProductInfo = await connection.queryAsync("INSERT INTO user_order_detail SET ?",[{
      user_order_id: dbResultsPayInfo.insertId, 
      num: req.body.cartLocal[i].num, 
      product_id: req.body.cartLocal[i].id, 
      size: req.body.cartLocal[i].size, 
    }]
    ); 
  }

  // res.json([]);
  res.json({dbResultsPayInfo, dbResultsProductInfo});
});


module.exports = router;