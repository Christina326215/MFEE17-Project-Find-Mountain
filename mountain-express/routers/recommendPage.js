const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.get("", async function (req, res, next) {
  // let dbResults = await connection.queryAsync("SELECT article_season_id.article_id GROUP_CONCAT( article_season_id.season_id) As season_id FROM article_season_id GROUP BY article_season_id.article_id;"); // 等資料庫查詢資料
  // let dbResults = await connection.queryAsync("SELECT article.*, article_status.name AS status_name, article_level.name AS level_name, article_mountain_type.name AS mountain_type_name ,article_apply.name AS apply_name ,article_season.name As season_name FROM article JOIN article_status ON article.status = article_status.id JOIN article_level ON article.level = article_level.id JOIN article_mountain_type ON article.mountain_type = article_mountain_type.id JOIN article_apply ON article.apply = article_apply.id JOIN article_season_id ON article.id = article_season_id.article_id JOIN article_season ON article_season_id.season_id = article_season.id ORDER BY article.id"); // 等資料庫查詢資料
  let dbResults = await connection.queryAsync("SELECT article.*, article_status.name AS status_name, article_level.name AS level_name, article_mountain_type.name AS mountain_type_name ,article_apply.name AS apply_name FROM article JOIN article_status ON article.status = article_status.id JOIN article_level ON article.level = article_level.id JOIN article_mountain_type ON article.mountain_type = article_mountain_type.id JOIN article_apply ON article.apply = article_apply.id ORDER BY article.id"); // 等資料庫查詢資料
  // let dbResults = await connection.queryAsync("SELECT article.*, article_status.name AS status_name, article_level.name AS level_name, article_mountain_type.name AS mountain_type_name ,article_apply.name AS apply_name FROM article JOIN article_status ON article.status = article_status.id JOIN article_level ON article.level = article_level.id JOIN article_mountain_type ON article.mountain_type = article_mountain_type.id JOIN article_apply ON article.apply = article_apply.id ORDER BY article.id"); // 等資料庫查詢資料
  
// article_season.name As season_name,

// JOIN article_season_id ON article.id = article_season_id.article_id
// // JOIN article_season_id ON article_season.id = article_season_id.season_id
// JOIN article_season ON article_season_id.season_id = article_season.id 
// (抓季節名稱)


// $stmt3=$db_host->prepare("SELECT 
// product.name(季節名稱) AS product_name,
// product.pic AS product_pic,
// product.price AS product_price,
// user_order.* 
// FROM user_order
// JOIN order_ship ON user_order.ship = order_ship.id
// JOIN order_status ON user_order.status = order_status.id
// JOIN pay_status ON user_order.pay_status = pay_status.id
// JOIN pay_way ON user_order.pay_way = pay_way.id  
// JOIN order_invoice ON user_order.invoice = order_invoice.id
// JOIN user ON user_order.user_id = user.id
// JOIN user_order_detail (article_season_id) ON user_order.id = user_order_detail.user_order_id
// JOIN product ON user_order_detail.product_id = product.id
// WHERE user_order.id='$id'
// ");

  
  
  res.json(dbResults);
});

module.exports = router;
