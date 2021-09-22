const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.get("", async function (req, res, next) {
  let dbResults = await connection.queryAsync("SELECT order_ship.name AS ship_name, order_status.name AS status_name, pay_status.name AS pay_status_name, pay_way.name AS pay_way_name, order_invoice.name AS order_invoice_name, user.id AS users_id, user.name AS users_name, user.phone AS users_phone, user_order_detail.num AS user_order_num, user_order_detail.size AS user_order_size, product.name AS product_name, product.pic AS product_pic, product.price AS product_price, user_order.* FROM user_order JOIN order_ship ON user_order.ship = order_ship.id JOIN order_status ON user_order.status = order_status.id JOIN pay_status ON user_order.pay_status = pay_status.id JOIN pay_way ON user_order.pay_way = pay_way.id JOIN order_invoice ON user_order.invoice = order_invoice.id JOIN user ON user_order.user_id = user.id JOIN user_order_detail ON user_order.id = user_order_detail.user_order_id JOIN product ON user_order_detail.product_id = product.id WHERE user_order.user_id=1"); // 等資料庫查詢資料

  res.json(dbResults);
});

module.exports = router;

// SELECT * FROM user_article WHERE user_id = 1

