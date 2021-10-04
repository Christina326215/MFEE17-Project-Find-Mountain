const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.post("/", async function(req, res, next) {
  let dbResults = await connection.queryAsync("SELECT * FROM user_product JOIN product ON user_product.product_id = product.id JOIN product_brand_name ON user_product.product_id = product_brand_name.id WHERE user_id=?", [[req.body.member.id]]);
  res.json(dbResults);
})


//remove from wish list
router.post("/remove-favorite", async function(req, res, next) {
  let toDelete = {
    user_id: req.body.member.id,
    product_id: req.body.id
  }
  let dbResults = await connection.queryAsync("DELETE FROM user_product WHERE user_id=? AND product_id=?", [toDelete.user_id, toDelete.product_id]);
  // console.log('req.body.member.id, req.body.id', req.body.member.id, req.body.id)
  res.json(dbResults);
})

module.exports = router;