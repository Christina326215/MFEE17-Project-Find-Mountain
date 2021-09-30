const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.post("/pay-info", async function (req, res, next) {
  const moment = require('moment');
  // console.log("req.body:",req.body);
  let dbResultsPayInfo = await connection.queryAsync("INSERT INTO user_order SET ?",[{
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

  console.log(dbResultsPayInfo)

  // res.json([]);
  res.json({});
});

// router.post("/order-detail", async function (req, res, next) {
//   console.log("req.body:",req.body)
//   let dbResults = await connection.queryAsync("INSERT INTO user_order_detail SET ?",[{
//     user_order_id: 1, 
//     num: req.body.num, 
//     product_id: req.body.id, 
//     size: req.body.size, 
//   }]
//   ); 

//   console.log(dbResults)

//   // res.json([]);
//   res.json({});
// });

module.exports = router;