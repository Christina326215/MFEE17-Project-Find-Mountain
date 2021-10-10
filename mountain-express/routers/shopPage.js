const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.get("/", async function (req, res, next) {
  let dbResults = await connection.queryAsync("SELECT * FROM product JOIN product_brand_name ON product.id = product_brand_name.id"); 
  res.json(dbResults);
});

router.get("/shoes", async function (req, res, next) {
  let dbResults = await connection.queryAsync("SELECT * FROM product JOIN product_brand_name ON product.id = product_brand_name.id WHERE type = 1");
  res.json(dbResults);
});

router.get("/bags", async function (req, res, next) {
  let dbResults = await connection.queryAsync("SELECT * FROM product JOIN product_brand_name ON product.id = product_brand_name.id WHERE type = 2");
  res.json(dbResults);
});

router.get("/clothes", async function (req, res, next) {
  let dbResults = await connection.queryAsync("SELECT * FROM product JOIN product_brand_name ON product.id = product_brand_name.id WHERE type = 3"); 
  res.json(dbResults);
});

router.get("/product-detail/:id", async function (req, res, next) {
  let dbResults = await connection.queryAsync("SELECT * FROM product JOIN product_brand_name ON product.id = product_brand_name.id WHERE product.id=?", [req.params.id]);
  
  res.json(dbResults);
});

router.get("/product-detail/level/:level", async function (req, res, next) {
  let dbResults = await connection.queryAsync("SELECT * FROM product JOIN product_brand_name ON product.id = product_brand_name.id WHERE product.level=?", [req.params.level]);
  
  res.json(dbResults);
});

router.get("/size-storage/:id/:size", async function (req, res, next) {
  let dbResults = await connection.queryAsync("SELECT * FROM product_size_storage JOIN product ON product_size_storage.product_id = product.id WHERE product_size_storage.product_id=? and product_size_storage.product_size=?", [req.params.id, req.params.size]);
  res.json(dbResults);
});

//get wish list by user id
router.post("/wish-list", async function(req, res, next) {
  let dbResults = await connection.queryAsync("SELECT * FROM user_product WHERE user_id=?", [[req.body.member.id]]);
  // console.log('req.body.id', req.body.id);
  // console.log('req.member.id', req.member.id);
  // console.log(dbResults);
  res.json(dbResults);
})

//add to wish list
router.post("/add-wish", async function(req, res, next) {
  let toAdd = {
    user_id: req.body.member.id,
    product_id: parseInt(req.body.id)
  }
  // console.log('toAdd.user_id, toAdd.product_id', toAdd.user_id, toAdd.product_id)
  let dbResults = await connection.queryAsync("INSERT INTO user_product (user_id, product_id) VALUES (?, ?)", [toAdd.user_id, toAdd.product_id]);
  res.json(dbResults);
})

//remove from wish list
router.post("/remove-wish", async function(req, res, next) {
  let toDelete = {
    user_id: req.body.member.id,
    product_id: req.body.id
  }
  let dbResults = await connection.queryAsync("DELETE FROM user_product WHERE user_id=? AND product_id=?", [toDelete.user_id, toDelete.product_id]);
  // console.log('req.body.member.id, req.body.id', req.body.member.id, req.body.id)
  res.json(dbResults);
})

//ranking
router.get("/ranking", async function (req, res, next) {
  let dbResults = await connection.queryAsync("SELECT * FROM product JOIN product_brand_name ON product.id = product_brand_name.id");
  let soldResults = await connection.queryAsync("SELECT * FROM product JOIN product_size_storage ON product.id = product_size_storage.product_id");
  //把售出跟庫存加總起來存回原始資料
  for(let i = 0; i < dbResults.length; i ++){
    var soldArr = [];
    var storageArr = [];
    for(let j = 0; j < soldResults.length; j++){
      if(soldResults[j].id === dbResults[i].id){
        // console.log('ij', i, soldResults[j].size_sold);
        soldArr.push(soldResults[j].size_sold);
        storageArr.push(soldResults[j].size_storage);
      }
    }
    // console.log('i arr', i, soldArr);
    const totalSold = soldArr.reduce((acc, cur) => {
      return acc + cur;
    });
    const totalStorage = storageArr.reduce((acc, cur) => {
      return acc + cur;
    });
    // console.log('i totalSold', i, totalSold);
    dbResults[i].sold = totalSold;
    dbResults[i].storage = totalStorage;
  }
  //依銷售量排序
  let newResults = dbResults.sort(function(a, b) {
    // boolean false == 0; true == 1
    return a.sold - b.sold;
  });
  //銷售量高的在前面
  newResults = newResults.reverse();
  // console.log('id', newResults)
  res.json(newResults);
});

router.get("/selected-items", async function(req, res, next){
  let dbResults = await connection.queryAsync("SELECT * FROM product JOIN product_brand_name ON product.id = product_brand_name.id WHERE product.status=3"); 
  res.json(dbResults);
})


router.get("/tag-article/:productId", async function(req, res, next){
  let dbResults = await connection.queryAsync("SELECT tag.id, img_id, product_id, tag_photo.article_id AS article_id, article.name AS article_name, article.pic AS article_pic FROM tag JOIN tag_photo ON tag.img_id = tag_photo.id JOIN article ON tag_photo.article_id = article.id WHERE product_id=?", [req.params.productId]); 
  res.json(dbResults);
})

module.exports = router;
