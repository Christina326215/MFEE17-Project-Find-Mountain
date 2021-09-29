const express = require('express')
const router = express.Router()
const connection = require('../utils/db')

// 包含平均星星分數得所有文章資料
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
// join每個星星評分
let joinResults = await connection.queryAsync(
  'SELECT article.*, article_status.name AS status_name, article_level.name AS level_name, article_mountain_type.name AS mountain_type_name ,article_apply.name AS apply_name, article_star.star_grade AS star_grade FROM article JOIN article_status ON article.status = article_status.id JOIN article_level ON article.level = article_level.id JOIN article_mountain_type ON article.mountain_type = article_mountain_type.id JOIN article_apply ON article.apply = article_apply.id JOIN article_star ON article.id = article_star.article_id ORDER BY article.id'
)
// perData的迴圈
for(let i=1; i<=perData.length; i++){
  var gradeArr=[];
  // join每個星星評分的迴圈
  for(let j=0; j<joinResults.length; j++){
    if(joinResults[j].id === i){
      // console.log('ij', i, joinResults[j]);
      // 根據文id將平分的星星變成陣列 i gradeArr 1 [ 4, 5, 4, 5, 3 ]
      gradeArr.push(joinResults[j].star_grade);
    }
  }
  // console.log('第i篇文章 的星星陣列gradeArr',i , gradeArr);
  const joinTotal = gradeArr.reduce((acc, cur) => {
    return acc + cur;
  });
  const joinAverage = Math.round(joinTotal/gradeArr.length);
  //
  // console.log(' i joinAverage',i , joinAverage);
  //FIXME:只有全部文章都有評分資料時才能用
  perData[(i-1)].average = joinAverage;
}
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
  // let likeData = await connection.queryAsync('SELECT * FROM user_article ORDER BY id') 
  res.json(likeData);
});

// user新增文章去過功能 user_article
router.post('/addPast', async function (req, res, next) {
  let likeData = await connection.queryAsync('INSERT INTO user_article (user_id,article_id,article_id_past) VALUES (?);',[[req.body.likeUserId,
    req.body.likeArticleId,req.body.likeArticlePast]]) 
  res.json(likeData);
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
  res.json(deleteLikeData);
});

module.exports = router;
