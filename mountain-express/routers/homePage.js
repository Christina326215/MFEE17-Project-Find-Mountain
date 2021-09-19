const express = require('express')
const router = express.Router()
const connection = require('../utils/db')

router.get('/', async function (req, res, next) {
    let dbResults = await connection.queryAsync(
        'SELECT id,name,level,distance,pic,content FROM article WHERE level = 1 '
    ) // 等資料庫查詢資料
    res.json(dbResults)
})
router.get('/comment', async function (req, res, next) {
    let dbResults = await connection.queryAsync(
        'SELECT * FROM comments WHERE article_id = 7 ORDER BY time'
        // 'SELECT * FROM comments JOIN article ON article_id = article.id WHERE article_id = 7 ORDER BY time LIMIT 1 ASC'
    ) // 等資料庫查詢資料
    res.json(dbResults)
})
router.get('/product', async function (req, res, next) {
    let dbResults = await connection.queryAsync(
        'SELECT * FROM product'
        // 'SELECT id,name,price,pic FROM product '
    ) // 等資料庫查詢資料

    res.json(dbResults)
})

module.exports = router
