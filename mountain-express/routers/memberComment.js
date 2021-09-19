const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.get("", async function (req, res, next) {
  let dbResults = await connection.queryAsync("SELECT comments.content AS comments_content, user.* FROM user JOIN comments ON user.id = comments.user_id"); // 等資料庫查詢資料
  res.json(dbResults);
});

module.exports = router;

// SELECT * FROM user_article WHERE user_id = 1
