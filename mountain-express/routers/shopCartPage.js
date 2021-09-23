const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.get("", async function (req, res, next) {
  let dbResults = await connection.queryAsync("INSERT INTO user_order (ship, zip_code, addr, invoice, pay_way) VALUES (?);",[[req.body.ship, req.body.zip_code, req.body.addr, req.body.invoice, req.body.pay_way]]); 

  res.json(dbResults);
});

module.exports = router;
