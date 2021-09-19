const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.get("", async function (req, res, next) {
  // let dbResults = await connection.queryAsync("SELECT comments.*, user.id AS users_id, user.name AS users_name, article.name AS article_name FROM comments JOIN article ON comments.article_id = article.id  JOIN user ON comments.user_id = user.id WHERE comments.valid = 1 ORDER BY article.id"); // 等資料庫查詢資料
  let dbResults = await connection.queryAsync("SELECT comments.*, user.id AS users_id, user.name AS users_name, article.name AS article_name FROM comments JOIN article ON comments.article_id = article.id  JOIN user ON comments.user_id = user.id WHERE comments.valid = 1 ORDER BY article.id"); // 等資料庫查詢資料
  
  res.json(dbResults);
});

module.exports = router;
