const express = require("express");
const router = express.Router();
const connection = require("../utils/db");
// const path = require("path");
const multer = require("multer");
const upload = multer();
//加密 bycypt.hash(明文,salt)
const bcrypt = require("bcrypt");

router.post("", upload.none(), async function (req, res, next) {
  // console.log('req.body.password:',req.body.password); //for check
  // console.log("req.body.repassword:", req.body.repassword); //for check

  if(!req.body.password){ //密碼沒值時跑這邊

    console.log('密碼不更改'); //for check

    //=== didn't change password  start ===//
    let result = await connection.queryAsync("UPDATE user SET ? WHERE id=?", [
      {
        name: req.body.name,
        account: req.body.account,
        phone: req.body.phone,
        birthday: req.body.birthday,
        zip_code: req.body.zip_code,
        addr: req.body.addr,
      },
      [req.session.account.id],
    ]);
    //=== didn't change password  end ===//
  
    console.log("req.body.name", req.body.name);
    res.json({});

}
else{ //密碼有值要更改時跑這邊
    
  console.log('密碼有值要更改'); //for check

  //密碼比對
  if (req.body.password !== req.body.repassword) {
      // - 不一致，回覆錯誤(400)
      return next({
          // code: "330002",
          status: 400,
          message: '2',
          //msg:2->更改密碼不一致
      })
  }

  let hashPassword = await bcrypt.hash(req.body.password, 10); // 密碼加密
  // console.log('hashPassword',hashPassword); //for check


  //=== change password  start ===//
  let dbResult = await connection.queryAsync("UPDATE user SET ? WHERE id=?", [
    {
      password: hashPassword,
      name: req.body.name,
      account: req.body.account,
      phone: req.body.phone,
      birthday: req.body.birthday,
      zip_code: req.body.zip_code,
      addr: req.body.addr,
    },
    [req.session.account.id],
  ]);
  //=== change password  end ===//

  res.json({});
}

});

module.exports = router;