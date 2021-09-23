const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

//============ 從資料庫撈資料傳去前端的路線地圖顯示 star ============//
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
  totalHeight = totalHeight.toLocaleString("en-US"); //變成千位符號

  let totalInfo = {
    totalPoints,
    totalDistance,
    totalHeight,
  };

  res.json({ totalInfo, result });
});
//============ 從資料庫撈資料傳去前端的路線地圖顯示 end ============//

//============ 傳去前端：給新增路線的文章 star ============//
router.get("/catchArticle", async function (req, res, next) {
  //=== 全部的文章 star ===//
  let dbResults = await connection.queryAsync(
    "SELECT id,name,pic FROM article"
  ); // 等資料庫查詢資料
  //=== 全部的文章 end ===//

  //=== 去過的文章 FIXME:WHERE user_id = 1 "1"要改成登入的會員 star ===//
  let pastResults = await connection.queryAsync(
    "SELECT article_id_past FROM user_article WHERE user_id = 1"
  ); // 等資料庫查詢資料
  //=== 去過的文章 end ===//
  // console.log('pastResults',pastResults); //for check

  //=== 將去過的文章從全部文章裡刪掉 star ===//
  dbResults.map((data) => {
    // console.log('data.id',data.id); //for check
    pastResults.map((item) => {
      // console.log('item.article_id_past',item.article_id_past); //for check
      if (data.id == item.article_id_past) {
        delete data.id;
        delete data.name;
        delete data.pic;
      }
    });
  });
  //=== 將去過的文章從全部文章裡刪掉 end ===//

  //=== 文章中被刪掉變空的obj從陣列中移除 star ===//
  let invalidEntries = 0;

  function isNumber(obj) {
    return obj !== undefined && !isNaN(obj); // delete undefined＆空陣列
  }
  function filterByID(item) {
    // console.log('item',item.id); //for check
    if (isNumber(item.id)) {
      return true;
    }
    invalidEntries++;
    return false;
  }
  dbResults = dbResults.filter(filterByID);
  //=== 文章中被刪掉變空的obj從陣列中移除 end ===//

  res.json({ dbResults });
});
//============ 傳去前端：給新增路線的文章 end ============//

//============ 前端傳來：新增路線的文章 insert to db star ============//
router.post("/wentRoute", async function (req, res, next) {
  //=== 全部的文章 star ===//
  let dbResults = await connection.queryAsync(
    "SELECT id,name,pic FROM article"
  ); // 等資料庫查詢資料
  //=== 全部的文章 end ===//

  let result = dbResults;
  let pastWent = req.body.wentList;
  let pastStar = req.body.selectedOption;
  let pastWentData = [];
  let starWentData = [];
  //=== 將去過路線換成文章的id star ===//
  result.map((data) => {
    let name = data.name;

    pastWent.map((item) => {
      if (item === name) {
        pastWentData.push({ id: data.id });
      }
    });
  });
  //=== 將去過路線換成文章的id end ===//

  //=== 將去過路線有評分的換成文章的id＆加入評分 star ===//
  result.map((data) => {
    let name = data.name;

    pastStar.map((value) => {
      let star = value.substr(0, 1);
      let article = value.substr(1);
      // console.log("star:", star); //for check
      // console.log("article:", article); //for check

      if (article === name) {
        let starId = data.id;
        // console.log("starId:", starId); //for check
        starWentData.push({ starId: starId, star: star });
      }
    });
  });
  //=== 將去過路線有評分的換成文章的id＆加入評分 end ===//

  let totalInfo = {
    pastWentData,
    starWentData,
  };
  // console.log("totalInfo", totalInfo); //for check

  //=== 將去過路線insert到資料表 FIXME: user_id: 1 "1"要改成登入的會員 star ===//
  totalInfo.pastWentData.map(async (data) => {
    let insertResults = await connection.queryAsync(
      "INSERT INTO user_article SET ?",
      [
        {
          user_id: 1,
          article_id: data.id,
          article_id_past: data.id,
        },
      ]
    );
  });
  //=== 將去過路線insert到資料表 end ===//

  //=== 將去過路線的評分insert到資料表 FIXME: user_id: 1 "1"要改成登入的會員 star ===//
  totalInfo.starWentData.map(async (data) => {
    // console.log("starWentData:", data); //for check
    // console.log("star:", data.star); //for check

    let insertdbResults = await connection.queryAsync(
      "INSERT INTO article_star SET ?",
      [
        {
          user_id: 1,
          article_id: data.starId,
          star_grade: data.star,
        },
      ]
    );
  });
  //=== 將去過路線的評分insert到資料表 end ===//

  res.json({});
});

module.exports = router;

// SELECT * FROM user_article WHERE user_id = 1
