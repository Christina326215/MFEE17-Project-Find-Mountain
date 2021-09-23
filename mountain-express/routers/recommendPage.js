const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.get("", async function (req, res, next) {
  // let dbResults = await connection.queryAsync("SELECT article_season_id.article_id GROUP_CONCAT( article_season_id.season_id) As season_id FROM article_season_id GROUP BY article_season_id.article_id;"); // 等資料庫查詢資料
  // let dbResults = await connection.queryAsync("SELECT article.*, article_status.name AS status_name, article_level.name AS level_name, article_mountain_type.name AS mountain_type_name ,article_apply.name AS apply_name ,article_season.name As season_name FROM article JOIN article_status ON article.status = article_status.id JOIN article_level ON article.level = article_level.id JOIN article_mountain_type ON article.mountain_type = article_mountain_type.id JOIN article_apply ON article.apply = article_apply.id JOIN article_season_id ON article.id = article_season_id.article_id JOIN article_season ON article_season_id.season_id = article_season.id ORDER BY article.id"); // 等資料庫查詢資料
  // let dbResults = await connection.queryAsync("SELECT article.*, article_status.name AS status_name, article_level.name AS level_name, article_mountain_type.name AS mountain_type_name ,article_apply.name AS apply_name FROM article JOIN article_status ON article.status = article_status.id JOIN article_level ON article.level = article_level.id JOIN article_mountain_type ON article.mountain_type = article_mountain_type.id JOIN article_apply ON article.apply = article_apply.id ORDER BY article.id"); // 等資料庫查詢資料
  let dbResults = await connection.queryAsync("SELECT article.*, article_status.name AS status_name, article_level.name AS level_name, article_mountain_type.name AS mountain_type_name ,article_apply.name AS apply_name FROM article JOIN article_status ON article.status = article_status.id JOIN article_level ON article.level = article_level.id JOIN article_mountain_type ON article.mountain_type = article_mountain_type.id JOIN article_apply ON article.apply = article_apply.id ORDER BY article.id"); // 等資料庫查詢資料

  let perData = dbResults.map((item, index) => {
    item.season = item.season.replace('1', '春季');
    item.season = item.season.replace('2', '夏季');
    item.season = item.season.replace('3', '秋季');
    item.season = item.season.replace('4', '冬季');
    return item;
  })
  
  res.json(perData);
});

module.exports = router;
