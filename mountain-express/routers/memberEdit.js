const express = require("express");
const router = express.Router();
const connection = require("../utils/db");
// const path = require("path");
const multer = require("multer");
const upload = multer();
//加密 bycypt.hash(明文,salt)
const bcrypt = require('bcrypt')

router.post("", upload.none(),  async function (req, res, next) {
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