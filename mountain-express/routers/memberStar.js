const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.get("", async function (req, res, next) {
  let dbResults = await connection.queryAsync("SELECT article_id.star_grade, user_article.* FROM user_article JOIN article_star ON user_article.article_id_past = article_star.article_id"); // 等資料庫查詢資料
  res.json(dbResults);
});

module.exports = router;

// SELECT * FROM user_article WHERE user_id = 1
