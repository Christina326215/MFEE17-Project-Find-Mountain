const express = require('express')
const router = express.Router()
const connection = require('../utils/db')

router.get('/', async function (req, res, next) {
    // console.log('dbResult')
    let dbResults = await connection.queryAsync(
        //選擇評論最大id 終極version
        'SELECT comments.*, user.name AS user_name, article.name AS article_name, article.level AS article_level, article.distance AS article_distance, article.pic AS article_pic, article.content AS article_content, article_level.name AS level_name FROM comments JOIN user ON comments.user_id = user.id JOIN article ON comments.article_id = article.id JOIN article_level ON article.level = article_level.id, (SELECT MAX(comments.id) AS max_comments_id FROM comments GROUP BY article_id) AS per_latest_comment WHERE comments.id = per_latest_comment.max_comments_id AND article.level = 1'
    )
    // join每個星星評分
    // 竹娟重構程式碼
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
    res.json(dbResults)
})

router.get('/product', async function (req, res, next) {
    let dbResults = await connection.queryAsync('SELECT * FROM product') // 等資料庫查詢資料

    res.json(dbResults)
})

module.exports = router
