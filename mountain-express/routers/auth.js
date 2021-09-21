const express = require('express')
const router = express.Router()
const connection = require('../utils/db')

const { body, validationResult } = require('express-validator')
//建立註冊規則
const registerRule = [
    body('email').isEmail().withMessage('Email欄位 請填寫正確格式'),
    body('password').isLength({ min: 6 }).withMessage('密碼長度至少6字元'),
    body('repassword')
        .custom((value, { req }) => {
            return value === req.body.password
        })
        .withMessage('密碼驗證不一致'),
]
//加密 bycypt.hash(明文,salt)
const bycypt = require('bcrypt')

//1.建立路由
router.get('/', function (req, res, next) {
    console.log('hello')
    res.json('hello')
})
router.post('/register', registerRule, async function (req, res, next) {
    const validateResult = validationResult(req)
    console.log(validateResult)
    if (!validateResult.isEmpty()) {
        //把錯誤拿出來
        let error = validateResult.array()
        console.log(error)
        //回覆前端
        return res.status(400).json({ field: error[0].param, message: error[0].msg })
    }
    //2.確認資料有拿到
    console.log(req.body)
    //3.建立使用者存進資料庫
    //密碼不可以是明文
    //格式驗證
    let hashPassword = await bcrypt.hash(req.body.password, 10)
    let dbResults = await connection.queryAsync(
        'INSERT INTO user(email,password,name,birthday,phone,addr) VALUE(?,?,?,?)',
        [[req.body.email, hashPassword, req.body.name, req.body.birthday, req.body.phone, req.body.addr]]
    ) // 等資料庫查詢資料
    res.json(dbResults)
})
// router.get('/register/account', registerRule, async function (req, res, next) {
//     const validateResult = validationResult.req()
//     console.log(validateResult)
//     //2.確認資料有拿到
//     console.log(req.body)
//     //3.建立使用者存進資料庫
//     //密碼不可以是明文
//     //格式驗證
//     let dbResults = await connection.queryAsync('INSERT INTO user(email,password) VALUE(?,?)', [
//         [req.body.email, req.body.password],
//     ]) // 等資料庫查詢資料
//     res.json(dbResults)
// })

module.exports = router
