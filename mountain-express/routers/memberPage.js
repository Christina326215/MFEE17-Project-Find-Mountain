const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.get("", async function (req, res, next) {
  // console.log("req.session.account.id", req.session.account.id);
  // 因為後面會用到 req.session.account 所以要先判斷有沒有 沒有會一直pending
  if (!req.session.account) {
    return res.json(null);
  }

  let dbResults = await connection.queryAsync(
    "SELECT * FROM user WHERE id = ?",
    [req.session.account.id]
  ); // 等資料庫查詢資料

  console.log(
    "dbResults[0].id:",
    dbResults[0].id,
    "dbResults[0].name:",
    dbResults[0].name
  );

  let returnAccount = {
    id: dbResults[0].id,
    email: dbResults[0].account,
    name: dbResults[0].name,
    isAdmin: false, // 理論上是資料庫要存，但我們假造一下作 demo
  };
  req.session.account = returnAccount;

  console.log("session member:", req.session.account);
  // 回覆給前端

  let member = dbResults.length > 0 ? dbResults[0] : null;
  res.json(member);
});

module.exports = router;
