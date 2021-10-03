const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.post("/", async function(req, res, next) {
  let dbResults = await connection.queryAsync("SELECT * FROM user_product JOIN product ON user_product.product_id = product.id JOIN product_brand_name ON user_product.product_id = product_brand_name.id WHERE user_id=?", [[req.body.member.id]]);
  res.json(dbResults);
})

module.exports = router;