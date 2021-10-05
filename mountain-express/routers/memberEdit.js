const express = require("express");
const router = express.Router();
const connection = require("../utils/db");
// const path = require("path");
const multer = require("multer");
const upload = multer();
//加密 bycypt.hash(明文,salt)
const bcrypt = require('bcrypt')
// 格式驗證 -> 後端絕對不可以相信來自前端的資料！
const { body, validationResult } = require("express-validator");
const registerRules = [
  body("password").isLength({ min: 6 }).withMessage("密碼長度至少為 6"),
  body("confirmPassword")
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage("密碼驗證不一致"),
];

router.post("", upload.none(), registerRules, async function (req, res, next) {
  // console.log('req.body.password:',req.body.password); //for check
  let hashPassword = await bcrypt.hash(req.body.password, 10); // 密碼加密
  // console.log('hashPassword',hashPassword); //for check
    // let result = await connection.queryAsync(
    //     "UPDATE user SET ? WHERE id=?", [{
    //       name : req.body.name,
    //       account: req.body.account,
    //       phone: req.body.phone,
    //       birthday: req.body.birthday,
    //       zip_code: req.body.zip_code, 
    //       addr: req.body.addr
    //     },req.session.account.id]
    //   );
    let result = await connection.queryAsync(
      "UPDATE user SET ? WHERE id=?", [{
        name : req.body.name,
        account: req.body.account,
        password: hashPassword,
        phone: req.body.phone,
        birthday: req.body.birthday,
        zip_code: req.body.zip_code, 
        addr: req.body.addr
      },[req.session.account.id]]
    );
      
      console.log("req.body.name", req.body.name)
      res.json({});

});

module.exports = router;