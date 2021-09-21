const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.get("", async function (req, res, next) {
  // let dbResults = await connection.queryAsync("INSERT INTO comments (user_id, pic, content, time, article_id,valid) VALUES (?,?,?,?,?,?)"); // 等資料庫查詢資料
  let dbResults = "123"

  res.json(dbResults);
});

module.exports = router;
