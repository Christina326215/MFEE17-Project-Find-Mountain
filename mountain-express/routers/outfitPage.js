const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.get("", async function (req, res, next) {
  let dbResults = await connection.queryAsync("SELECT * FROM product"); // 等資料庫查詢資料
  res.json(dbResults);
});

module.exports = router;
