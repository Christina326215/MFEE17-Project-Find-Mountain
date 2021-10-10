const express = require('express')
const router = express.Router()
const connection = require('../utils/db')

// 包含平均星星分數得所有文章資料
router.get("/", async function (req, res, next) {
  let dbResults = await connection.queryAsync(
    "SELECT article.*, article_status.name AS status_name, article_level.name AS level_name, article_mountain_type.name AS mountain_type_name ,article_apply.name AS apply_name FROM article JOIN article_status ON article.status = article_status.id JOIN article_level ON article.level = article_level.id JOIN article_mountain_type ON article.mountain_type = article_mountain_type.id JOIN article_apply ON article.apply = article_apply.id WHERE article.status = ? ORDER BY article.id DESC",[[1]]
  ); // 等資料庫查詢資料
  let perData = dbResults.map((item, index) => {
    item.season = item.season.replace("1", "春季");
    item.season = item.season.replace("2", "夏季");
    item.season = item.season.replace("3", "秋季");
    item.season = item.season.replace("4", "冬季");
    return item;
  });
  // console.log("perData",perData);

  // join每個星星評分
  // let joinResults = await connection.queryAsync(
  //   "SELECT article.*, article_status.name AS status_name, article_level.name AS level_name, article_mountain_type.name AS mountain_type_name ,article_apply.name AS apply_name, article_star.star_grade AS star_grade FROM article JOIN article_status ON article.status = article_status.id JOIN article_level ON article.level = article_level.id JOIN article_mountain_type ON article.mountain_type = article_mountain_type.id JOIN article_apply ON article.apply = article_apply.id JOIN article_star ON article.id = article_star.article_id ORDER BY article.id"
  // );
  // onsole.log("joinResults",joinResults);

  ///////////////重構程式碼
  let starAverage = await connection.queryAsync(
    "SELECT article_id, ROUND(AVG(star_grade)) AS average_grade FROM article_star GROUP BY article_id"
  );
  // console.log("starAverage", starAverage);

  perData.map((a,i)=>{
    for(let j = 0; j < starAverage.length; j++){
      if(a.id == starAverage[j].article_id){
        a.average = starAverage[j].average_grade
      }
    }
    if(a.average == undefined){
      a.average = 0
    }
  })
  // console.log("perData",perData);
  /////////////// 重構程式碼

  //修改
  // perData的迴圈
  // for (let i = 0; i < perData.length; i++) {
  //   var gradeArr = [];
  //   // join每個星星評分的迴圈
  //   for (let j = 0; j < joinResults.length; j++) {
  //     if (joinResults[j].id === perData[i].id) {
  //       // console.log('ij', i, joinResults[j]);
  //       gradeArr.push(joinResults[j].star_grade);
  //     }
  //   }
  //   // console.log("i gradeArr", i, gradeArr);
  //    // 根據文id將平分的星星變成陣列 i gradeArr 1 [ 4, 5, 4, 5, 3 ]
  //   const joinTotal = gradeArr.reduce((acc, cur) => {
  //     return acc + cur;
  //   });
  //   // console.log('第i篇文章 的星星陣列gradeArr',i , gradeArr);
  //   const joinAverage = Math.round(joinTotal / gradeArr.length);
  //   // console.log("joinAverage", joinAverage);
  //   perData[i].average = joinAverage;
  // }
  res.json(perData);
});

// 抓取全部星星分數
// router.get('/star', async function (req, res, next) {
//   let starData = await connection.queryAsync('SELECT * FROM article_star ORDER BY article_id') 
//   res.json(starData);
// });


// 抓取全部文章收藏資料 user_heart
// router.get('/totalLike', async function (req, res, next) {
//   let totalLike = await connection.queryAsync('SELECT * FROM user_heart ORDER BY id') 
//   res.json(totalLike);
// });

// user抓取文章收藏功能 user_heart
router.post('/like', async function (req, res, next) {
  let likeData = await connection.queryAsync('SELECT * FROM user_heart WHERE user_id = ? ORDER BY id',[[req.body.member.id]]) 
  // let likeData = await connection.queryAsync('SELECT * FROM user_heart ORDER BY id') 
  res.json(likeData);
});

// user新增文章收藏功能 user_heart
router.post('/likeArticle', async function (req, res, next) {
  let likeData = await connection.queryAsync('INSERT INTO user_heart (user_id,article_id) VALUES (?);',[[req.body.likeUserId,
    req.body.likeArticleId]]) 
    res.json(likeData);
});

// user刪除文章收藏功能 user_heart
router.post('/deleteLikeArticle', async function (req, res, next) {
  let Data = await connection.queryAsync('SELECT * FROM user_heart ORDER BY id') 
  const result = Data.filter((e)=>{
    // 如果userid跟文章id有的話抓取id
    if(e.user_id == req.body.likeUserId && e.article_id == req.body.likeArticleId){
      return(e.id)
    }
  })
  // 並刪除此筆資料
  let deleteLikeData = await connection.queryAsync('DELETE FROM user_heart WHERE id=? ',[[result[0].id]]) 
  res.json(deleteLikeData);
});

////////////

// user抓取文章去過功能 user_article
router.post('/past', async function (req, res, next) {
  let likeData = await connection.queryAsync('SELECT * FROM user_article WHERE user_id = ? ORDER BY id',[[req.body.member.id]]) 
  // console.log("likeData",likeData);
  
  res.json(likeData);
});

// user新增文章去過功能 user_article
router.post('/addPast', async function (req, res, next) {
  // 新增 user_article 資料
  let likeData = await connection.queryAsync('INSERT INTO user_article (user_id,article_id,article_id_past) VALUES (?);',[[req.body.likeUserId,
    req.body.likeArticleId,req.body.likeArticlePast]]) 
  // 更改user level
  // 抓取這個user 全部文章的去過資料
  let Data = await connection.queryAsync('SELECT user_article.*, article.level AS article_level FROM user_article JOIN article ON user_article.article_id = article.id WHERE user_id = ? ORDER BY id',[[req.body.member.id]]) 
  let userPoint =[]
  Data.filter((e)=>{
    if(e.article_level == 1 ){
      userPoint.push(3)
    }
    if(e.article_level == 2 ){
      userPoint.push(5)
    }
    if(e.article_level == 3 ){
      userPoint.push(10)
    }
  })
  // console.log("userPoint",userPoint);
  const totalPoints = userPoint.reduce((acc, cur) => {
    return acc + cur;
  });
  // console.log("totalPoints",totalPoints);
  // 判斷user的level 完成積分:0~19 level 1(肉腳) //
  let level = "";
  if (totalPoints >= 0 && totalPoints < 20) {
    level = "1";
  }
  // 完成積分:20~49 level 2(山友) //
  else if (totalPoints >= 20 && totalPoints < 50) {
    level = "2";
  }
  // 完成積分:50(含)以上 level 3(山神) //
  else {
    level = "3";
  }
  // 將user level塞進資料庫
  let updateUserLevel = await connection.queryAsync("UPDATE user SET ? WHERE id=?", [{level: level,},req.body.likeUserId]);

  res.json(updateUserLevel);
});

// user刪除文章去過功能 user_article
router.post('/deletePast', async function (req, res, next) {
  let Data = await connection.queryAsync('SELECT * FROM user_article ORDER BY id') 
  const result = Data.filter((e)=>{
    // 如果userid跟文章id有的話抓取id
    if(e.user_id == req.body.likeUserId && e.article_id == req.body.likeArticleId){
      return(e.id)
    }
  })
  // 並刪除此筆資料
  let deleteLikeData = await connection.queryAsync('DELETE FROM user_article WHERE id=? ',[[result[0].id]]) 
  
  // 更改user level
  // 抓取這個user 全部文章的去過資料
  let totalData = await connection.queryAsync('SELECT user_article.*, article.level AS article_level FROM user_article JOIN article ON user_article.article_id = article.id WHERE user_id = ? ORDER BY id',[[req.body.member.id]]) 
  let userPoint =[]
  totalData.filter((e)=>{
    if(e.article_level == 1 ){
      userPoint.push(3)
    }
    if(e.article_level == 2 ){
      userPoint.push(5)
    }
    if(e.article_level == 3 ){
      userPoint.push(10)
    }
  })
  // console.log("userPoint",userPoint);
  const totalPoints = userPoint.reduce((acc, cur) => {
    return acc + cur;
  });
  // console.log("totalPoints",totalPoints);
  // 判斷user的level 完成積分:0~19 level 1(肉腳) //
  let level = "";
  if (totalPoints >= 0 && totalPoints < 20) {
    level = "1";
  }
  // 完成積分:20~49 level 2(山友) //
  else if (totalPoints >= 20 && totalPoints < 50) {
    level = "2";
  }
  // 完成積分:50(含)以上 level 3(山神) //
  else {
    level = "3";
  }
  // 將user level塞進資料庫
  let updateUserLevel = await connection.queryAsync("UPDATE user SET ? WHERE id=?", [{level: level,},req.body.likeUserId]);

  //=== delete 去過文章星星評分 db start ===//
  let deleteStar = await connection.queryAsync("DELETE FROM article_star WHERE user_id=? AND article_id=?",[req.body.member.id, req.body.likeArticleId]);
  //=== delete 去過文章星星評分 db end ===//

  res.json(updateUserLevel);
});

module.exports = router;
