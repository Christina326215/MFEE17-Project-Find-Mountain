const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.get("", async function (req, res, next) {
  // let dbResults = await connection.queryAsync("SELECT * FROM user"); // 等資料庫查詢資料
  // res.json(dbResults);
  let dbResults = await connection.queryAsync(
    'SELECT article.*, article_status.name AS status_name, article_level.name AS level_name, article_mountain_type.name AS mountain_type_name ,article_apply.name AS apply_name FROM article JOIN article_status ON article.status = article_status.id JOIN article_level ON article.level = article_level.id JOIN article_mountain_type ON article.mountain_type = article_mountain_type.id JOIN article_apply ON article.apply = article_apply.id ORDER BY article.id'
) // 等資料庫查詢資料
let perData = dbResults.map((item, index) => {
  return item.season;
})

});

module.exports = router;
