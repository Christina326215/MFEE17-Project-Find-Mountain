const express = require('express')
const router = express.Router()
const connection = require('../utils/db')

router.get('', async function (req, res, next) {
    let dbResults = await connection.queryAsync(
        'SELECT id,name,level,distance,pic,content FROM article WHERE level = 1 '
    ) // 等資料庫查詢資料
    res.json(dbResults)
})
router.get('', async function (req, res, next) {
    let dbResults = await connection.queryAsync(
        'SELECT id,name,level,distance,pic,content FROM comment WHERE level = 1 '
    ) // 等資料庫查詢資料
    res.json(dbResults)
})

module.exports = router
