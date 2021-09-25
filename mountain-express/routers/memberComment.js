const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.get("", async function (req, res, next) { 
  let page = req.query.page || 1; // 目前在第幾頁，預設第一頁
  const perPage = 5; // 每一頁的資料是10筆

  // TODO：總共有幾筆 / 總共有幾頁

  let count = await connection.queryAsync(
    "SELECT COUNT(*) AS total FROM comments"
  );
  console.log(count); // [ RowDataPacket { total: 11 } ]
  const total = count[0].total; // total 11 總共有幾筆
  const lastPage = Math.ceil(total / perPage); // lastPage 3 最後一頁是第幾頁
  console.log(total, lastPage);

  // TODO：取得這一頁應該要有的資料
  let offset = (page - 1) * perPage;

  let dbResults = await connection.queryAsync("SELECT comments.*, user.name AS user_name, article.name AS article_name, dislike.dislike_status AS dislike_status FROM comments JOIN user on comments.user_id = user.id JOIN article ON comments.article_id = article.id JOIN dislike ON comments.id = dislike.comments_id ORDER BY id LIMIT ? OFFSET ?",[perPage, offset]); 
  
  let pagination = {
    total,
    perPage,
    lastPage,
    page,
  };

  console.log(pagination);

  res.json({ pagination,dbResults});
});

module.exports = router;

// SELECT * FROM user_article WHERE user_id = 1
