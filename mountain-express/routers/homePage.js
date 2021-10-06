const express = require('express')
const router = express.Router()
const connection = require('../utils/db')

router.get('/', async function (req, res, next) {
    let dbResults = await connection.queryAsync(
        // 'SELECT id,name,level,distance,pic,content FROM article WHERE level = 1 '

        //僅限一筆留言
        'SELECT article.id,article.name,article.level,article.distance,article.pic,article.content, comments.pic AS comments_pic, comments.content AS comments_content, comments.time AS comments_time ,user.name AS user_name ,article_level.name AS level_name FROM article JOIN comments ON comments.article_id = article.id JOIN user ON comments.user_id = user.id JOIN article_level ON article.level = article_level.id WHERE article.level = 1 LIMIT 0,3'
    ) // 等資料庫查詢資料
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
