const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

//============ 從資料庫撈資料傳去前端的路線地圖顯示 start ============//
router.post("", async function (req, res, next) {
  // console.log("req.body member:", req.body.id); //for check 登入的會員id

  //=== 全部去過的文章 start ===//
  let dbResults = await connection.queryAsync(
    "SELECT article.name AS article_name, article.distance AS article_distance, article.height AS article_height, article.level AS article_level, article.pic AS article_pic, user_article.* FROM user_article JOIN article ON user_article.article_id_past = article.id WHERE user_id = ?",
    [req.body.id]
  ); // 等資料庫查詢資料
  //=== 全部去過的文章 end ===//

  //=== 去過後有評分的文章 start ===//
  let dbResultsStar = await connection.queryAsync(
    "SELECT article.name AS article_name, article_star.star_grade AS star, user_article.* FROM user_article JOIN article ON user_article.article_id_past = article.id JOIN article_star ON user_article.user_id = article_star.user_id WHERE user_article.user_id = article_star.user_id AND user_article.article_id = article_star.article_id AND user_article.user_id = ?",
    [req.body.id]
  );
  //=== 去過後有評分的文章 end ===//

  let result = dbResults;
  let resultStar = dbResultsStar;
  let totalPoints = 0;
  let totalDistance = 0;
  let totalHeight = 0;
  //全部去過文章裡如果跟去過後有評分的文章id一樣時，將星星塞進去
  result.map((data) => {
    resultStar.map((item) => {
      if (data.article_id == item.article_id) {
        data.star = item.star;
      }
    });
    //給全部去過文章的依level塞進points
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

  //=== 依照totalPoints給user不同level後，塞進資料庫 start ===//
  // 完成積分:0~19 level 1(肉腳) //
  let level = "";
  if (totalPoints >= 0 && totalPoints < 20) {
    level = "1";
    // console.log("level:", level); //for check
  }
  // 完成積分:20~49 level 2(山友) //
  else if (totalPoints >= 20 && totalPoints < 50) {
    level = "2";
    // console.log("level:", level); //for check
  }
  // 完成積分:50(含)以上 level 3(山神) //
  else {
    level = "3";
    // console.log("level:", level); //for check
  }

  // 將user level塞進資料庫
  await connection.queryAsync("UPDATE user SET ? WHERE id=?", [
    {
      level: level,
    },
    req.body.id,
  ]);
  //=== 依照totalPoints給user不同level後，塞進資料庫 end ===//

  res.json({ totalInfo, result });
});
//============ 從資料庫撈資料傳去前端的路線地圖顯示 end ============//

//============ 傳去前端：給新增路線的文章 start ============//
router.post("/catchArticle", async function (req, res, next) {
  // console.log("req.body member:", req.body.id); //for check 登入的會員id

  //=== 全部的文章 star ===//
  let dbResults = await connection.queryAsync(
    "SELECT id,name,pic FROM article"
  ); // 等資料庫查詢資料
  //=== 全部的文章 end ===//

  //=== 去過的文章 ===//
  let pastResults = await connection.queryAsync(
    "SELECT article_id_past FROM user_article WHERE user_id = ?",
    [req.body.id]
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

  //=== 文章中被刪掉變空的obj從陣列中移除 start ===//
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

//============ 前端傳來：新增路線的文章 insert to db start ============//
router.post("/wentRoute", async function (req, res, next) {
  // console.log("req.body member id:", req.body.member.id); //for check 登入的會員id

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
  //=== 將去過路線換成文章的id start ===//
  result.map((data) => {
    let name = data.name;

    pastWent.map((item) => {
      if (item === name) {
        pastWentData.push({ id: data.id });
      }
    });
  });
  //=== 將去過路線換成文章的id end ===//

  //=== 將去過路線有評分的換成文章的id＆加入評分 start ===//
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

  //=== 將去過路線insert到資料表 ===//
  totalInfo.pastWentData.map(async (data) => {
    let insertResults = await connection.queryAsync(
      "INSERT INTO user_article SET ?",
      [
        {
          user_id: req.body.member.id,
          article_id: data.id,
          article_id_past: data.id,
        },
      ]
    );
  });
  //=== 將去過路線insert到資料表 end ===//

  //=== 將去過路線的評分insert到資料表 ===//
  totalInfo.starWentData.map(async (data) => {
    // console.log("starWentData:", data); //for check
    // console.log("star:", data.star); //for check

    let insertdbResults = await connection.queryAsync(
      "INSERT INTO article_star SET ?",
      [
        {
          user_id: req.body.member.id,
          article_id: data.starId,
          star_grade: data.star,
        },
      ]
    );
  });
  //=== 將去過路線的評分insert到資料表 end ===//

  res.json({});
});
//============ 前端傳來：新增路線的文章 insert to db end ============//

//============ 前端傳來：文章的星星評分 insert to db start ============//
router.post("/catchStar", async function (req, res, next) {
  // console.log("hello req.body.member", req.body.member.id); //for check 登入的會員id
  // console.log("hello req.body.star", req.body.star); //for check 文章星星評分
  let tempStr = req.body.star;
  let tempArr = tempStr.split(":"); //將字串依':'分離成陣列

  let id = tempArr[0]; //被評分的文章id
  let star = tempArr[1]; //文章的星星評分
  let memberId = req.body.member.id;
  console.log("id:", id); //for check
  console.log("star:", star); //for check
  console.log("memberId:", memberId); //for check

  //=== 文章的星星評分 db star ===//
  let dbResults = await connection.queryAsync(
    "INSERT INTO article_star SET ?",
    [
      {
        article_id: id,
        user_id: memberId,
        star_grade: star,
      },
    ]
  );
  //=== 文章的星星評分 db end ===//

  res.json({});
});
//============ 前端傳來：文章的星星評分 insert to db end ============//

//============ 前端傳來：renew文章的星星評分 update to db start ============//
router.post("/updateStar", async function (req, res, next) {
  console.log("hello req.body.member", req.body.member.id); //for check 登入的會員id
  console.log("hello req.body.updateStar", req.body.updateStar); //for check 文章星星評分
  let tempStr = req.body.updateStar;
  let tempArr = tempStr.split(":"); //將字串依':'分離成陣列

  let id = tempArr[0]; //被評分的文章id
  let updateStar = tempArr[1]; //文章的星星評分
  let memberId = req.body.member.id;
  console.log("id:", id); //for check
  console.log("star:", updateStar); //for check
  console.log("memberId:", memberId); //for check

  //=== update文章的星星評分 db start ===//
  await connection.queryAsync(
    "UPDATE article_star SET star_grade=? WHERE user_id=? AND article_id=?",
    [updateStar, memberId, id]
  );
  //=== update文章的星星評分 db end ===//

  res.json({});
});
//============ 前端傳來：renew文章的星星評分 update to db end ============//

//============ 前端傳來：移除去過路線 delete to db start ============//
router.post("/deletePast", async function (req, res, next) {
  // console.log("hello req.body.member", req.body.member.id); //for check 登入的會員id
  // console.log("hello req.body.delArticleId", req.body.delArticleId); //for check 刪除去過文章id

  //=== delete 去過文章 db start ===//
  await connection.queryAsync(
    "DELETE FROM user_article WHERE user_id=? AND article_id_past=?",
    [req.body.member.id, req.body.delArticleId]
  );
  //=== delete 去過文章 db end ===//

  //=== delete 去過文章星星評分 db start ===//
  await connection.queryAsync(
    "DELETE FROM article_star WHERE user_id=? AND article_id=?",
    [req.body.member.id, req.body.delArticleId]
  );
  //=== delete 去過文章星星評分 db end ===//

  res.json({});
});
//============ 前端傳來：移除去過路線 delete to db end ============//

module.exports = router;
