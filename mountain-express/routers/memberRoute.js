const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.get("", async function (req, res, next) {
  // let dbResults = await connection.queryAsync("SELECT article.name AS article_name, user_article.* FROM user_article JOIN article ON user_article.article_id_past = article.id"); // 等資料庫查詢資料

  //=== 全部的文章 star FIXME: WHERE user_id = 1 "1"要改成登入的會員 ===//
  let dbResults = await connection.queryAsync(
    "SELECT article.name AS article_name, article.distance AS article_distance, article.height AS article_height, article.level AS article_level, article.pic AS article_pic, user_article.* FROM user_article JOIN article ON user_article.article_id_past = article.id WHERE user_id = 1"
  ); // 等資料庫查詢資料
  //=== 全部的文章 end ===//

  //=== 有評分的文章 star FIXME: user_article.user_id = 1 "1"要改成登入的會員 ===//
  let dbResultsStar = await connection.queryAsync(
    "SELECT article.name AS article_name, article_star.star_grade AS star, user_article.* FROM user_article JOIN article ON user_article.article_id_past = article.id JOIN article_star ON user_article.user_id = article_star.user_id WHERE user_article.user_id = article_star.user_id AND user_article.article_id = article_star.article_id AND user_article.user_id = 1"
  );
  //=== 有評分的文章 end ===//

  let result = dbResults;
  let resultStar = dbResultsStar;
  let totalPoints = 0;
  let totalDistance = 0;
  let totalHeight = 0;
  //全部文章裡如果跟有評分的文章id一樣時，將星星塞進去
  result.map((data) => {
    resultStar.map((item) => {
      if (data.article_id == item.article_id) {
        data.star = item.star;
      }
    });
    switch (data.article_level) {
      // 完成 level 1 x1(3分) //
      case 1:
        data.points = 3;
        break;
      // 完成 level 2 x1(5分) //
      case 2:
        data.points = 5;
        break;
      // 完成 level 3 x1(10分) //
      case 3:
        data.points = 10;
        break;
    }
    // console.log('data.star:',data.star); //for check 如果沒有評分顯示"undefined"
    totalPoints += data.points;
    totalDistance += data.article_distance;
    totalHeight += data.article_height;
  });
  // console.log("totalPoints", totalPoints); //for check
  // console.log("totalDistance", totalDistance.toFixed(1)); //for check
  // console.log("totalHeight", totalHeight); //for check
  totalDistance = totalDistance.toFixed(1); //取到小數第１位
  totalHeight = totalHeight.toLocaleString('en-US') //變成千位符號

  let totalInfo = {
    totalPoints,
    totalDistance,
    totalHeight
  };

  // response.json({totalInfo, result});

  res.json({ totalInfo, result });
});

module.exports = router;

// SELECT * FROM user_article WHERE user_id = 1
