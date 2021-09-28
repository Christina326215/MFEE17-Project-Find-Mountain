const express = require('express')
const router = express.Router()
const connection = require('../utils/db')

router.get('/', async function (req, res, next) {
    // let dbResults = await connection.queryAsync("SELECT article.*, article_status.name AS status_name, article_level.name AS level_name, article_mountain_type.name AS mountain_type_name ,article_apply.name AS apply_name FROM article JOIN article_status ON article.status = article_status.id JOIN article_level ON article.level = article_level.id JOIN article_mountain_type ON article.mountain_type = article_mountain_type.id JOIN article_apply ON article.apply = article_apply.id ORDER BY article.id"); // 等資料庫查詢資料
    let dbResults = await connection.queryAsync(
        'SELECT article.*, article_status.name AS status_name, article_level.name AS level_name, article_mountain_type.name AS mountain_type_name ,article_apply.name AS apply_name FROM article JOIN article_status ON article.status = article_status.id JOIN article_level ON article.level = article_level.id JOIN article_mountain_type ON article.mountain_type = article_mountain_type.id JOIN article_apply ON article.apply = article_apply.id ORDER BY article.id'
    ) // 等資料庫查詢資料

  let perData = dbResults.map((item, index) => {
    item.season = item.season.replace('1', '春季');
    item.season = item.season.replace('2', '夏季');
    item.season = item.season.replace('3', '秋季');
    item.season = item.season.replace('4', '冬季');
    return item;
  })
  
  res.json(perData);
});

// 抓取article_star資料表星星資料
router.get('/star', async function (req, res, next) {
  let starData = await connection.queryAsync('SELECT * FROM article_star ORDER BY article_id') 
  res.json(starData);
});

//TODO:預設原本是否有收藏此文章
// 抓取文章收藏功能 user_article
router.get('/like', async function (req, res, next) {
  // let likeData = await connection.queryAsync('SELECT * FROM user_article WHERE article_id = ? AND user_id = ? ORDER BY id',[[req.body.likeArticleId,req.body.likeUserId]]) 
  let likeData = await connection.queryAsync('SELECT * FROM user_article ORDER BY id') 
  res.json(likeData);
});

// 新增文章收藏功能 user_article
router.post('/likeArticle', async function (req, res, next) {
  let likeData = await connection.queryAsync('INSERT INTO user_article (user_id,article_id,article_id_past) VALUES (?);',[[req.body.likeUserId,
    req.body.likeArticleId,
    req.body.likeArticlePast,]]) 
  res.json(likeData);
});

// 刪除文章收藏功能 user_article
router.post('/deleteLikeArticle', async function (req, res, next) {
  let Data = await connection.queryAsync('SELECT * FROM user_article ORDER BY id') 
  const result = Data.filter((e)=>{
    // 如果userid跟文章id有的話抓取id
    if(e.user_id == req.body.likeUserId && e.article_id == req.body.likeArticleId){
      return(e.id)
    }
  })
  // 並刪除此筆資料
  let deleteLikeData = await connection.queryAsync('DELETE FROM user_article WHERE id=? ',[[result[0].id]]) 
  res.json(deleteLikeData);
});

module.exports = router;
