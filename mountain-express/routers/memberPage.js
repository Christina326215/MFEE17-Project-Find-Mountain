const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.get("", async function (req, res, next) {
  

  let dbResults = await connection.queryAsync("SELECT * FROM user WHERE id = ?",[req.session.account.id]); // 等資料庫查詢資料

  console.log('session member:',req.session.account);
    // 回覆給前端

  let member = dbResults.length > 0 ? dbResults[0] : null;
  res.json(member);

});

module.exports = router;
