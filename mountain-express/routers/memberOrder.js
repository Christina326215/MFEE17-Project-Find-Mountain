const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.get("/order-product", async function (req, res, next) {
  // 列出使用者所有訂單
  let page = req.query.page || 1; // 目前在第幾頁，預設是第一頁
  const perPage = 1; //每一頁的資料是 1 筆
  // 總共有幾筆 / 總共有幾頁
  let count = await connection.queryAsync(
    "SELECT COUNT(*) AS total FROM user_order WHERE user_id=?",
    [req.session.account.id]
  );
  let total = count[0].total;
  const lastPage = Math.ceil(total / perPage); // 無條件進位
  // console.log(total, lastPage);

  // 取得這一頁應該要有的資料
  // LIMIT: 要取幾筆資料（這一頁要幾筆資料）
  // OFFSET: 要跳過多少
  let offset = (page - 1) * perPage;
  let singlePage = await connection.queryAsync(
    "SELECT * FROM user_order WHERE user_id=? ORDER BY id LIMIT ? OFFSET ?",
    [req.session.account.id, perPage, offset]
  );
  let pagination = {
    total, // 總共有幾筆
    perPage, // 一頁有幾筆
    lastPage, // 總共有幾頁（最後一頁）
    page, // 目前在第幾頁
  };

  // 找到同一個使用者的所有訂單資訊
  let orders = await connection.queryAsync("SELECT * FROM user_order WHERE user_id = ?;", [req.session.account.id]);

  // 取得同一使用者的所有訂單id
  let ids = orders.map(order => {
    return order.id;
  });
  // ids=[7,8];

  // 撈出訂單7和8的所有detail
  // WHERE IN 的 SQL 寫法用於多條件篩選的時候使用
  let details = await connection.queryAsync("SELECT product.name AS product_name, product.pic AS product_pic, product.price AS product_price, user_order_detail.* FROM user_order_detail JOIN product ON user_order_detail.product_id = product.id WHERE user_order_id IN (?);", [ids]);
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

  
  singlePage.map((data) => {
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
    switch (data.pay_status){
      case 1:
        data.pay_status = '已付款';
        break;
      case 2:
        data.pay_status = '未付款';
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

  singlePage.map(order => {
    order.details = details.filter(detail => {
      return detail.user_order_id === order.id;
    });
  });

  singlePage[0].totalPrice = 0;
  for (i = 0; i < singlePage[0].details.length; i++){
    singlePage[0].totalPrice += parseInt(singlePage[0].details[i].product_price)*parseInt(singlePage[0].details[i].num);
  }
  
  singlePage[0].orderNumber = "";
  let orderNumber = singlePage[0].time.replace(/[^0-9]/gm, '').match(/.{8}/)[0] + '0' + singlePage[0].id;
  singlePage[0].orderNumber = orderNumber;
  res.json({result,pagination,singlePage});

  // res.json(result);
  });

module.exports = router;


