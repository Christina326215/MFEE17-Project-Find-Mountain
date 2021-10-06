const express = require('express')
const router = express.Router()
const connection = require('../utils/db')
const nodemailer = require('nodemailer')
const mailgun = require('mailgun-js')
require('dotenv').config() // 透過dotenv設定連線資料，以免資料外洩

//token
// import { uuid, isUuid } from 'uuidv4'

// 給 react 用
const passport = require('passport')

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

const multer = require('multer')
const upload = multer()
router.post('/register', upload.none(), registerRule, async function (req, res, next) {
    console.log('req.body', req.body.email)
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
        {
            account: req.body.email,
            password: hashPassword,
            name: req.body.name,
            birthday: req.body.birthday,
            phone: req.body.phone,
            zip_code: req.body.zip_code,
            addr: req.body.addr,
            valid: 1,
        },
    ]) // 等資料庫查詢資料

    // //發送驗證碼
    // const api_key = process.env.MAILGUN_API_KEY
    // const domain = process.env.MAILGUN_DOMAIN
    // // const mg = new mailgun({ apiKey: api_key, domain: domain })
    // let mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain })
    // let data = {
    //     // from: '找靠山 <sandbox0ff7e060e8724664ab35c95257bb2a46.mailgun.org>',
    //     from: `找靠山 <mailgun@${domain}>`,
    //     to: `<${req.body.email}>`,
    //     // to: '<def2446@yahoo.com.tw>',
    //     subject: 'Hello',
    //     text:
    //         `您的註冊驗證碼為3n4b6c2a\n\n` +
    //         '請將此驗證碼輸入至註冊表單\n\n' +
    //         '如果您已輸入驗證碼，請自行忽略此封信件，感謝配合！\n',
    //     // `http://localhost:3000/reset/${uuidv4(token)}\n\n`,
    // }

    // console.log('start')
    // mailgun.messages().send(data, function (error, body) {
    //     console.log('sending email')
    //     if (error) {
    //         console.log('error', error)
    //     }
    //     console.log('body', body)
    // })
    // console.log('end')
    // res.json(result)

    // res.json(dbResults)
    res.json({})
})
router.post('/ver', (req, res, next) => {
    //發送驗證碼
    const api_key = process.env.MAILGUN_API_KEY
    const domain = process.env.MAILGUN_DOMAIN
    let mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain })
    let data = {
        // from: '找靠山 <sandbox0ff7e060e8724664ab35c95257bb2a46.mailgun.org>',
        from: `找靠山 <mailgun@${domain}>`,
        to: `<j412988921241@gmail.com>`,
        // to: '<def2446@yahoo.com.tw>',
        subject: 'Hello',
        text:
            `您的註冊驗證碼為3n4b6c2a\n\n` +
            '請將此驗證碼輸入至註冊表單\n\n' +
            '如果您已輸入驗證碼，請自行忽略此封信件，感謝配合！\n',
        // `http://localhost:3000/reset/${uuidv4(token)}\n\n`,
    }

    console.log('start')
    mailgun.messages().send(data, function (error, body) {
        console.log('sending email')
        if (error) {
            console.log('error', error)
        }
        console.log('body', body)
    })
    console.log('end')
    res.json({})
})
router.post('/login', upload.none(), async (req, res, next) => {
    // console.log(req.body)
    // - 確認有沒有帳號 (email 是否存在)
    //     - 如果沒有這個帳號，就回覆錯誤(400)
    // 測試:
    //  - 有註冊過的 email V
    //  - 沒有註冊過的 email
    let account = await connection.queryAsync('SELECT * FROM user WHERE account = ?;', [req.body.email])
    // console.log(account)
    if (account.length === 0) {
        // account 陣列是空的 => 表示沒找到
        return next({
            // code: "330002",
            status: 400,
            message: '1',
            //msg:1->找不到帳號
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
            message: '0',
            //msg:0->密碼錯誤
        })
    }
    // - 有帳號且密碼正確
    //     - 紀錄 session
    //     - CSR: 回覆成功的訊息
    let returnAccount = {
        id: account.id,
        email: account.account,
        name: account.name,
        isAdmin: false, // 理論上是資料庫要存，但我們假造一下作 demo
    }
    req.session.account = returnAccount
    console.log('session:', req.session.account)
    // 回覆給前端
    res.json({
        returnAccount,
        password: account.password,
    })
})
//======= 忘記密碼 =======
router.post('/forget', async (req, res, next) => {
    console.log(req.body)
    console.log('email', req.body.forgetData)
    let forgetDataObj = {
        email: req.body.forgetData,
    }
    let result = await connection.queryAsync('SELECT id,account,password FROM user WHERE account = ?', [
        forgetDataObj.email,
    ])
    console.log('result', result)
    console.log('id', result[0].id)
    console.log('password', result[0].password)
    // if (req.body.email === '') {
    //     res.json('email required')
    // }
    if (result.length === 0) {
        console.log('查無此帳號')
        return next({
            // code: "330002",
            status: 400,
            message: '1',
            //msg:1->找不到帳號
        })
        // res.json('查無此帳號')
    } else {
        // console.log(uuidv4())
        //設定token
        // let token = {
        //     random: [0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea, 0x71, 0xb4, 0xef, 0xe1, 0x67, 0x1c, 0x58, 0x36],
        // }
        // uuidv4(token)
        // let maxNum = 15
        // let minNum = 6
        let password = '1234567'
        let hashPassword = await bcrypt.hash(password, 10)
        const resetPassword = await connection.queryAsync('UPDATE user SET ? WHERE id=?', [
            {
                password: hashPassword,
            },
            result[0].id,
        ])

        console.log('data', req.body.forgetData)

        const api_key = process.env.MAILGUN_API_KEY
        const domain = process.env.MAILGUN_DOMAIN
        // const mg = new mailgun({ apiKey: api_key, domain: domain })
        let mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain })
        let data = {
            // from: '找靠山 <sandbox0ff7e060e8724664ab35c95257bb2a46.mailgun.org>',
            from: `找靠山 <mailgun@${domain}>`,
            to: `<${req.body.forgetData}>`,
            // to: '<def2446@yahoo.com.tw>',
            subject: 'Hello',
            text:
                `您的暫時密碼：${password}\n\n` +
                '確保帳戶安全性,' +
                '請儘速至[會員專區]更新您的密碼\n\n' +
                '如果您已更新密碼，請自行忽略此封信件，感謝配合！\n',
            // `http://localhost:3000/reset/${uuidv4(token)}\n\n`,
        }

        console.log('start')
        mailgun.messages().send(data, function (error, body) {
            console.log('sending email')
            if (error) {
                console.log('error', error)
            }
            console.log('body', body)
        })
        console.log('end')
        res.json(result)
    }
})
//======= reset =======
// router.post(`/reset/${token}`, async (req, res, next) => {
//     console.log('hello')
//     res.send('hello')
// })

// ======= FB 登入 =======
const FacebookTokenStrategy = require('passport-facebook-token')
passport.use(
    new FacebookTokenStrategy(
        {
            clientID: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        },
        async function (accessToken, refreshToken, profile, cb) {
            // 取得資料
            console.log('Fb profile', profile)
            let member = await connection.queryAsync('SELECT * FROM user WHERE account=?;', [profile.emails[0].value])
            let returnMember = null
            if (member.length > 0) {
                // 已經註冊過
                member = member[0]
                returnMember = {
                    id: member.id,
                    account: member.email,
                    name: member.name,
                }
            } else {
                // 找不到，尚未註冊，註冊一下
                let result = await connection.queryAsync(
                    'INSERT INTO user (account, password, name,valid) VALUES (?);',
                    [[profile.emails[0].value, 'fb login', profile.name.givenName, '1']]
                )
                // FB登入就不會有密碼，一開始 user資料庫設計的時候可以把密碼欄位設定成 nullable
                // 因為我們設計的時候不允許 null，所以這裡就塞一個字串給他
                console.log(result)
                returnMember = {
                    id: result.insertId,
                    account: profile.emails[0].value,
                    name: profile.name.givenName,
                }
            }
            cb(null, returnMember)
        }
    )
)

router.post('/facebook', passport.authenticate('facebook-token', { session: false }), (req, res, next) => {
    if (!req.user) {
        console.log('FB Login 登入失敗')
        return res.json(401)
    }
    console.log('FB 登入成功')
    // 一般登入，帳號密碼驗證後，應該要做的事
    req.session.account = req.user
    // 回覆給前端
    res.json({
        returnMember: req.user,
    })
})
// ======= google 登入 =======
// const GoogleTokenStrategy = require('passport-google-oauth-token').Strategy
const GoogleTokenStrategy = require('passport-google-token').Strategy

passport.use(
    new GoogleTokenStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
        //如果資料合法拿到profile
        async function (accessToken, refreshToken, profile, cb) {
            console.log('Google profile', profile)
            // 以下其實跟 FB 登入一模一樣
            let member = await connection.queryAsync('SELECT * FROM user WHERE account=?;', [profile.emails[0].value])
            let returnMember = null
            if (member.length > 0) {
                // 已經註冊過
                member = member[0]
                returnMember = {
                    id: member.id,
                    account: member.email,
                    name: member.name,
                }
            } else {
                // 找不到，尚未註冊，註冊一下
                let result = await connection.queryAsync(
                    'INSERT INTO user (account, password, name,valid) VALUES (?);',
                    [[profile.emails[0].value, 'google login', profile.name.givenName, '1']]
                )
                //因為資料庫password必填->塞一個字串給他->google login
                // FB登入就不會有密碼，一開始 members 表設計的時候可以把密碼欄位設定成 nullable
                // 因為我們設計的時候不允許 null，所以這裡就塞一個字串給他
                console.log(result)
                returnMember = {
                    id: result.insertId,
                    account: profile.emails[0].value,
                    name: profile.name.givenName,
                }
            }
            cb(null, returnMember)
        }
    )
)
//前端token傳過來進入 跑passport.authenticate中間件
router.post('/google', passport.authenticate('google-token', { session: false }), function (req, res, next) {
    if (!req.user) {
        console.log('Google Login 登入失敗')
        return res.json(401)
    }
    console.log('Google 登入成功')
    // 一般登入，帳號密碼驗證後，應該要做的事
    req.session.account = req.user
    // 回覆給前端
    res.json({
        returnMember: req.user,
    })
})
//登出
router.get('/logout', (req, res, next) => {
    console.log('HelloHello')
    console.log('req.session.account', req.session.account)
    // req.session.account.destroy()
    // let returnAccount = {
    //     id: null,
    //     email: null,
    //     name: null,
    //     isAdmin: false, // 理論上是資料庫要存，但我們假造一下作 demo
    // }
    // req.session.account = returnAccount
    req.session.account = null
    res.sendStatus(202)
})
module.exports = router
