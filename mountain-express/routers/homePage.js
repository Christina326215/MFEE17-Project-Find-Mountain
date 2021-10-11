const express = require('express')
const router = express.Router()
const connection = require('../utils/db')

router.get('/', async function (req, res, next) {
  console.log("dbResult");

  let dbResults = await connection.queryAsync(
    //僅限一筆留言
    // 'SELECT article.id,article.name,article.level,article.distance,article.pic,article.content, comments.content AS comments_content, comments.time AS comments_time ,user.name AS user_name ,article_level.name AS level_name FROM article JOIN comments ON comments.article_id = article.id JOIN user ON comments.user_id = user.id JOIN article_level ON article.level = article_level.id WHERE article.level = 1'
    //選擇評論最大id
    "SELECT MAX(comments.id) AS id, comments.content, comments.time, article.id AS article_id, article.name AS article_name, article.level AS article_level, article.distance AS article_distance, article.pic AS article_pic, article.content AS article_content, user.name AS user_name ,article_level.name AS level_name FROM comments JOIN article ON comments.article_id = article.id JOIN user ON comments.user_id = user.id JOIN article_level ON article.level = article_level.id WHERE article.level = 1 GROUP BY article.id"
  ); // 等資料庫查詢資料

  // 竹娟重構程式碼 文章沒有星星評分也沒問題
    let starAverage = await connection.queryAsync(
      "SELECT article_id, ROUND(AVG(star_grade)) AS average_grade FROM article_star JOIN article ON article_star.article_id = article.id WHERE article.level = 1 GROUP BY article_id"
    );
    console.log("starAverage", starAverage);

    dbResults.map((a, i) => {
      for (let j = 0; j < starAverage.length; j++) {
        if (a.article_id == starAverage[j].article_id) {
          a.average = starAverage[j].average_grade;
        }
      }
      if (a.average == undefined) {
        a.average = 0;
      }
    });
    // console.log("dbResults",dbResults);
  // 竹娟重構程式碼

  // join每個星星評分
//   let joinResults = await connection.queryAsync(
//       'SELECT article.*, article_star.star_grade AS star_grade FROM article JOIN article_star ON article.id = article_star.article_id ORDER BY article.id'
//   )
//   // console.log('result', joinResults)
//   //每篇文章
//   for (let i = 0; i < dbResults.length; i++) {
//       var gradeArr = []
//       // join每個星星評分的迴圈
//       for (let j = 0; j < joinResults.length; j++) {
//           if (joinResults[j].id === dbResults[i].article_id) {
//               // console.log('ij', i, joinResults[j])
//               gradeArr.push(joinResults[j].star_grade)
//           }
//       }
//       // console.log('每篇文章星星數陣列', i, gradeArr)
//       // 根據文id將平分的星星變成陣列 i gradeArr 1 [ 4, 5, 4, 5, 3 ]
//       const joinTotal = gradeArr.reduce((acc, cur) => {
//           return acc + cur
//       })
//       // console.log('第i篇文章 的星星陣列gradeArr',i , gradeArr);
//       const joinAverage = Math.round(joinTotal / gradeArr.length)
//       // console.log('joinAverage', joinAverage)
//       dbResults[i].average = joinAverage
//   }
  res.json(dbResults);
})

router.get('/product', async function (req, res, next) {
    let dbResults = await connection.queryAsync('SELECT * FROM product') // 等資料庫查詢資料

    res.json(dbResults)
})

module.exports = router
