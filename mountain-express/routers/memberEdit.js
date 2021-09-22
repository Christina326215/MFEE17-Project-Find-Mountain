const express = require("express");
const router = express.Router();
const connection = require("../utils/db");
// const path = require("path");
const multer = require("multer");
const upload = multer();

router.post("", upload.none(),  async function (req, res, next) {
    let result = await connection.queryAsync(
      // "UPDATE user SET name=?, account=?, phone=?, birthday=?, zip_code=?, addr=? WHERE id=?",[[req.body.name, req.body.account, req.body.phone, req.body.birthday, req.body.zip_code, req.body.addr, 1]]);
        "UPDATE user SET ? WHERE id=?", [{
          name : req.body.name,
          account: req.body.account,
          phone: req.body.phone,
          birthday: req.body.birthday,
          zip_code: req.body.zip_code, 
          addr: req.body.addr
        },1]
      );
    // let result = await connection.queryAsync(
    //     "UPDATE user SET name=[req.body.name] WHERE id=1;");
      console.log("req.body.name", req.body.name)
      res.json({});

});

module.exports = router;
