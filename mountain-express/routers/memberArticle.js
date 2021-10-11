const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

// user抓取文章收藏功能 user_heart
router.post('/', async function (req, res, next) {
  // console.log("req.body.member.id",req.body.member.id);
  // let likeData = await connection.queryAsync('SELECT * FROM user_heart WHERE user_id = ? ORDER BY id',[[req.body.member.id]]) 
  let likeData = await connection.queryAsync('SELECT user_heart.*, article.level AS article_level, article.name AS article_name, article.pic AS article_pic, article.city AS article_city FROM user_heart JOIN article ON user_heart.article_id = article.id WHERE user_id = ? ORDER BY id DESC',[[req.body.member.id]]) 
  // console.log("likeData",likeData);
  res.json(likeData);
});


// user刪除文章收藏功能 user_heart
router.post('/deleteheart', async function (req, res, next) {
  // console.log("req.body.delArticleId",req.body.delArticleId);
  let deleteData = await connection.queryAsync('DELETE FROM user_heart WHERE id=? ',[[req.body.delArticleId]]) 
  // console.log("deleteData",deleteData);
  res.json(deleteData);
});



module.exports = router;

// SELECT * FROM user_article WHERE user_id = 1
