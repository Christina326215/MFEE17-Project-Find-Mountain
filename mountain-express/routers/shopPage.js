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

router.get("/product-detail/level/:level", async function (req, res, next) {
  let dbResults = await connection.queryAsync("SELECT * FROM product JOIN product_brand_name ON product.id = product_brand_name.id WHERE product.level=?", [req.params.level]); // 等資料庫查詢資料
  
  res.json(dbResults);
});

router.get("/product-detail/article/level/:level", async function (req, res, next) {
  let dbResults = await connection.queryAsync("SELECT * FROM article WHERE level=?", [req.params.level]); // 等資料庫查詢資料

  res.json(dbResults);
});

router.get("/size-storage/:id/:size", async function (req, res, next) {
  let dbResults = await connection.queryAsync("SELECT * FROM product_size_storage JOIN product ON product_size_storage.product_id = product.id WHERE product_size_storage.product_id=? and product_size_storage.product_size=?", [req.params.id, req.params.size]); // 等資料庫查詢資料
  res.json(dbResults);
});

//wish list
router.post("/wish-list", async function(req, res, next) {
  let dbResults = await connection.queryAsync("SELECT * FROM user_product WHERE user_id=?", [req.body.id]);
  console.log('req.body.id', req.body.id);
  console.log(dbResults);
  res.json(dbResults);
})

module.exports = router;
