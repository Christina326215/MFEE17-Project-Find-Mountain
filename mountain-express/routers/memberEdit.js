const express = require("express");
const router = express.Router();
const connection = require("../utils/db");
const path = require("path");

router.post("", async function (req, res, next) {
    let result = await connection.queryAsync(
        "INSERT INTO user (name, account, phone, birthday, zip_code, addr) VALUES (?);",
        [[req.body.tempMember.name, req.body.tempMember.account, req.body.tempMember.phone, req.body.tempMember.birthday, req.body.tempMember.zip_code, req.body.tempMember.addr]]
      );
      res.json({});

});

module.exports = router;
