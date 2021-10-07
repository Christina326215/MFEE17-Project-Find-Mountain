const express = require('express')
const router = express.Router()
const connection = require('../utils/db')

router.get('/', async function (req, res, next) {
    console.log('dbResult')

    let dbResults = await connection.queryAsync(
        // 'SELECT id,name,level,distance,pic,content FROM article WHERE level = 1 '

        //僅限一筆留言
        'SELECT article.id,article.name,article.level,article.distance,article.pic,article.content, comments.pic AS comments_pic, comments.content AS comments_content, comments.time AS comments_time ,user.name AS user_name ,article_level.name AS level_name FROM article JOIN comments ON comments.article_id = article.id JOIN user ON comments.user_id = user.id JOIN article_level ON article.level = article_level.id WHERE article.level = 1 LIMIT 0,3 ORDER BY '
        // 'SELECT article.id,article.name,article.level,article.distance,article.pic,article.content, comments.pic AS comments_pic, comments.content AS comments_content, comments.time AS comments_time ,user.name AS user_name ,article_level.name AS level_name FROM article JOIN comments ON comments.article_id = article.id JOIN user ON comments.user_id = user.id JOIN article_level ON article.level = article_level.idLIMIT 0,3 ORDER BY article.id DESC'
    ) // 等資料庫查詢資料

    // join每個星星評分
    // let joinResults = await connection.queryAsync(
    //     'SELECT article.*, article_star.star_grade AS star_grade FROM article JOIN article_star ON article.id = article_star.article_id ORDER BY article.id'
    // )
    // console.log('joinResult', joinResults)
    // for (let i = 0; i < perData.length; i++) {
    //     var gradeArr = []
    //     // 星星評分
    //     for (let j = 0; j < joinResults.length; j++) {
    //         if (joinResults[j].id === dbResults[i].id) {
    //             // console.log('ij', i, joinResults[j]);
    //             gradeArr.push(joinResults[j].star_grade)
    //         }
    //     }
    //     // 依文章id將評論過的星星數相加
    //     const joinTotal = gradeArr.reduce((acc, cur) => {
    //         return acc + cur
    //     })
    //     // console.log('第i篇文章 的星星陣列gradeArr',i , gradeArr);
    //     //星星平均數
    //     const joinAverage = Math.round(joinTotal / gradeArr.length)
    //     // console.log("joinAverage", joinAverage);
    //     return joinAverage
    // }
    res.json(dbResults)
})
// router.get('/comment/:id', async function (req, res, next) {
//     let dbResults = await connection.queryAsync(
//         // 'SELECT * FROM comments WHERE article_id = 7 ORDER BY time'
//         'SELECT comments.*, user.id AS users_id, user.name AS users_name, article.name AS article_name FROM comments JOIN article ON comments.article_id = article.id  JOIN user ON comments.user_id = user.id WHERE comments.article_id=? ORDER BY time',
//         [req.params.id]
//         // 'SELECT * FROM comments JOIN article ON article_id = article.id WHERE article_id = 7 ORDER BY time LIMIT 1 ASC'
//     ) // 等資料庫查詢資料
//     res.json(dbResults)
// })
router.get('/product', async function (req, res, next) {
    let dbResults = await connection.queryAsync(
        'SELECT * FROM product LIMIT 0,4'
        // 'SELECT id,name,price,pic FROM product '
    ) // 等資料庫查詢資料

    res.json(dbResults)
})

module.exports = router
