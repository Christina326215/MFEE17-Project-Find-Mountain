const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.get("/order-product", async function (req, res, next) {
  // 找到同一個使用者的所有訂單資訊
  let orders = await connection.queryAsync("SELECT * FROM user_order WHERE user_id = ?;", [req.session.account.id]);

  // 取得同一使用者的所有訂單id
  let ids = orders.map(order => {
    return order.id;
  });
  // ids=[7,8];

  // 撈出訂單7和8的所有detail
  // WHERE IN 的 SQL 寫法用於多條件篩選的時候使用
  // let details = await connection.queryAsync("SELECT * FROM user_order_detail WHERE user_order_id IN (?);", [ids]);
  let details = await connection.queryAsync("SELECT product.name AS product_name, product.pic AS product_pic, product.price AS product_price, user_order_detail.* FROM user_order_detail JOIN product ON user_order_detail.product_id = product.id WHERE user_order_id IN (?);", [ids]);
  // IN(?) 要加小括號
  orders.map(order => {
    order.details = details.filter(detail => {
      return detail.user_order_id === order.id;
    });
  });

  let result = orders;

  result.map((data) => {
    switch (data.ship) {
      case 1:
        data.ship = '宅配到府';
        break;
      case 2:
        data.ship = '超商取貨';
        break;
    }
    switch (data.status){
      case 1:
        data.status = '未處理';
        break;
      case 2:
        data.status = '處理中';
        break;
      case 3:
        data.status = '已完成';
        break;
    }
    switch (data.pay_way){
      case 1:
        data.pay_way = '信用卡';
        break;
      case 2:
        data.pay_way = '貨到付款';
        break;
    }
    switch (data.invoice){
      case 1:
        data.invoice = '二聯式發票';
        break;
      case 2:
        data.invoice = '三聯式發票';
        break;
    }
  });
  let datas = result;

  /* 未處理狀態訂單 start */
  let price = 0;
  for (i = 0; i < result[0].details.length; i++){
    price += parseInt(details[i].product_price)*parseInt(details[i].num);
    console.log(price)
  }
  let time = result[0].time;
  let status = result[0].status;
  let name = result[0].name;
  let ship = result[0].ship;
  let phone = result[0].phone;
  let payWay = result[0].pay_way;
  let invoice = result[0].invoice;
  let number = result[0].time.replace(/[^0-9]/gm, '').match(/.{8}/)[0] + '0' + result[0].id;
  let productItem = result[0].details
  let zip_code = result[0].zip_code;
  let addr = result[0].addr;
  
  let totalInfo = {
    price, time, status, number, name, ship, phone, payWay, invoice, zip_code, addr, productItem, 
  }
  /* 未處理狀態訂單 end */

  res.json({datas,totalInfo});

  // res.json(result);
  });

module.exports = router;

// SELECT * FROM user_article WHERE user_id = 1

