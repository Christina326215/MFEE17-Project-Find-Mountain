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
const bcrypt = require('bcrypt')

//1.建立路由
router.get('/', function (req, res, next) {
    console.log('hello')
    res.json('hello')
})

const multer = require("multer");
const upload = multer();
router.post('/register',upload.none(), registerRule, async function (req, res, next) {
    console.log("req.body",req.body.email)
    const validateResult = validationResult(req)
    console.log(validateResult)
    if (!validateResult.isEmpty()) {
        //把錯誤拿出來
        let error = validateResult.array()
        console.log(error)
        //回覆前端
        return res.status(400).json({ field: error[0].param, message: error[0].msg })
    }
    //檢查帳號是否重複
    let account = await connection.queryAsync('SELECT * FROM user WHERE account=?', [req.body.email])
    if (account.length > 0) {
        return next({
            // code: "330002",
            status: 400,
            message: '已經註冊過了',
        })
    }
    //2.確認資料有拿到
    console.log(req.body)
    //3.建立使用者存進資料庫
    //密碼不可以是明文
    //格式驗證

  
    let hashPassword = await bcrypt.hash(req.body.password, 10)
    let dbResults = await connection.queryAsync('INSERT INTO user SET ?', [
        {account: req.body.email, 
        password: hashPassword, 
        name: req.body.name, 
        birthday: req.body.birthday, 
        phone: req.body.phone, 
        zip_code: req.body.zip_code,
        addr: req.body.addr}
    ]) // 等資料庫查詢資料
    
    // res.json(dbResults)
    res.json({});
})


router.post('/login',upload.none(), async (req, res, next) => {
    console.log(req.body)
    // - 確認有沒有帳號 (email 是否存在)
    //     - 如果沒有這個帳號，就回覆錯誤(400)
    // 測試:
    //  - 有註冊過的 email V
    //  - 沒有註冊過的 email
    let account = await connection.queryAsync('SELECT * FROM user WHERE account = ?;', [req.body.email])
    console.log(account)
    if (account.length === 0) {
        // account 陣列是空的 => 表示沒找到
        return next({
            // code: "330002",
            status: 400,
            message: '找不到帳號',
        })
    }
    // 有找到，而且應該只會有一個（因為我們註冊的地方有檢查 email 有沒有重複）
    account = account[0]
    // - 密碼比對
    // 測試案例
    // - 密碼對的
    // - 密碼錯的
    let result = await bcrypt.compare(req.body.password, account.password)
    if (!result) {
        // - 不一致，回覆錯誤(400)
        return next({
            // code: "330002",
            status: 400,
            message: '密碼錯誤',
        })
    }
    // - 有帳號且密碼正確
    //     - 紀錄 session
    //     - CSR: 回覆成功的訊息
    let returnAccount = {
        id: account.id,
        email: account.email,
        name: account.name,
        isAdmin: false, // 理論上是資料庫要存，但我們假造一下作 demo
    }
    req.session.account = returnAccount
    // 回覆給前端
    res.json({
        name: account.name,
    })
})

module.exports = router
