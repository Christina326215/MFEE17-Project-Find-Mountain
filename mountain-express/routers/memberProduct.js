const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.get("", async function (req, res, next) {
  let dbResults = await connection.queryAsync("SELECT product.name AS product_name, product.price AS product_price, user_product.* FROM user_product JOIN product ON user_product.product_id = product.id"); // 等資料庫查詢資料
  res.json(dbResults);
});

module.exports = router;

// SELECT * FROM user_article WHERE user_id = 1

