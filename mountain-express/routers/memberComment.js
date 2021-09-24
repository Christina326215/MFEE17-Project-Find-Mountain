const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.get("", async function (req, res, next) { 
  let dbResults = await connection.queryAsync("SELECT comments.*, user.name AS user_name, article.name AS article_name, dislike.dislike_status AS dislike_status FROM comments JOIN user on comments.user_id = user.id JOIN article ON comments.article_id = article.id JOIN dislike ON comments.id = dislike.comments_id"); 
  // 等資料庫查詢資料
  res.json(dbResults);
});

module.exports = router;

// SELECT * FROM user_article WHERE user_id = 1
