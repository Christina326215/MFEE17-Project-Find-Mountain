const express = require("express");
const router = express.Router();
const connection = require("../utils/db");
const path = require("path");


// 評論資料
router.get("/", async function (req, res, next) {
  // SELECT a.*, b.* FROM `test1` as a NATURAL JOIN `test2` as b
  // let dbResults = await connection.queryAsync("SELECT tag_photo.*, tag.* FROM tag_photo as a NATURAL JOIN tag as tag"); // 等資料庫查詢資料
  let dbResults = await connection.queryAsync("SELECT tag_photo.*, tag.* , product.* FROM tag_photo as tag_photo ,tag as tag , product as product WHERE tag_photo.id=tag.img_id AND tag.product_id = product.id ORDER BY article_id"); // 等資料庫查詢資料
  // let dbResults = await connection.queryAsync("SELECT tag_photo.* FROM tag_photo JOIN tag ON tag_photo.id=tag.img_id"); // 等資料庫查詢資料
  // let ProdutResults = await connection.queryAsync("SELECT product.* FROM product"); // 等資料庫查詢資料
  
  // 產品id "id": 15,
  // "img": "1.jpeg",
  // "article_id": 1,
  // "position_x": 78,
  // "position_y": 54.3333,
  // "img_id": 1,
  // "product_id": 15,
  // "name": "Arcteryx 始祖鳥 徒步背包 Brize 32",
  // "price": 8341,
  // "pic": "bags-pic6.png",
  // "storage": 10,
  // "sold": 0,
  // "type": "2",
  // "status": "1",
  // "level": "2",
  // "introduction": 



  res.json(dbResults);
});

module.exports = router;
