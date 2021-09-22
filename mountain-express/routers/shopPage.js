const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.get("/", async function (req, res, next) {
  let dbResults = await connection.queryAsync("SELECT * FROM product JOIN product_brand_name ON product.id = product_brand_name.id"); // 等資料庫查詢資料
  res.json(dbResults);
});

router.get("/shoes", async function (req, res, next) {
  let dbResults = await connection.queryAsync("SELECT * FROM product JOIN product_brand_name ON product.id = product_brand_name.id WHERE type = 1"); // 等資料庫查詢資料
  res.json(dbResults);
});

router.get("/bags", async function (req, res, next) {
  let dbResults = await connection.queryAsync("SELECT * FROM product JOIN product_brand_name ON product.id = product_brand_name.id WHERE type = 2"); // 等資料庫查詢資料
  res.json(dbResults);
});

router.get("/clothes", async function (req, res, next) {
  let dbResults = await connection.queryAsync("SELECT * FROM product JOIN product_brand_name ON product.id = product_brand_name.id WHERE type = 3"); // 等資料庫查詢資料
  res.json(dbResults);
});

router.get("/product-detail/:id", async function (req, res, next) {
  let dbResults = await connection.queryAsync("SELECT * FROM product JOIN product_brand_name ON product.id = product_brand_name.id WHERE product.id=?", [req.params.id]); // 等資料庫查詢資料
  
  res.json(dbResults);
});

module.exports = router;
