const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

//============ map 初階 star ============//
router.get("", async function (req, res, next) {
  let dbResults = await connection.queryAsync(
    "SELECT id,name,city,time,level,distance,pic FROM article WHERE level = 1 "
  ); // 等資料庫查詢資料

  //將資料庫抓到的的city 分成 city & area 後塞回去
  let result = dbResults;
  result.map((data) => {
    // console.log(data.city); //for check "台北市信義區"
    let city = data.city.substr(0, 3);
    // console.log('city',city); //for check "台北市"
    let area = data.city.substr(3, 3);
    // console.log('area',area); //for check "信義區"
    if (city == "台北市") {
      data.city = "臺北市";
    } else {
      data.city = city;
    }
    data.area = area; //area: '北投區'

    //根據名字塞經緯度
    let name = data.name;
    // console.log("name", name); //for check "象山親山步道"
    switch (name) {
      case "象山親山步道": //25.02805320226784, 121.57104253849187
        data.lat = 25.02805320226784;
        data.lon = 121.57104253849187;
        break;
      case "金面山親山步道": //25.089131540275574, 121.56795386179768
        data.lat = 25.089131540275574;
        data.lon = 121.56795386179768;
        break;
      case "七星山主、東峰登山步道": //25.17246387298761, 121.55582303326364
        data.lat = 25.17246387298761;
        data.lon = 121.55582303326364;
        break;
    }
  });
  // console.log(result); //for check

  res.json(result);
});
//============ map 初階 end ============//

//============ map 中階 star ============//
router.get("/middle", async function (req, res, next) {
  let dbResults = await connection.queryAsync(
    "SELECT id,name,city,time,level,distance,pic FROM article WHERE level = 2 "
  ); // 等資料庫查詢資料

  //將資料庫抓到的的city 分成 city & area 後塞回去
  let result = dbResults;
  result.map((data) => {
    // console.log(data.city); //for check "台北市信義區"
    let city = data.city.substr(0, 3);
    // console.log('city',city); //for check "台北市"
    let area = data.city.substr(3, 3);
    // console.log('area',area); //for check "信義區"
    if (city == "台北市") {
      data.city = "臺北市";
    } else {
      data.city = city;
    }
    data.area = area; //area: '北投區'

    //根據名字塞經緯度
    let name = data.name;
    // console.log("name", name); //for check "象山親山步道"
    switch (name) {
      case "陽明山東西大縱走": //25.194430639550564, 121.56089338224132
        data.lat = 25.194430639550564;
        data.lon = 121.56089338224132;
        break;
      case "北插天山登山步道": //24.79844841216656, 121.45315771119161
        data.lat = 24.79844841216656;
        data.lon = 121.45315771119161;
        break;
      case "抹茶山": //24.857877405714007, 121.73777606556595
        data.lat = 24.857877405714007;
        data.lon = 121.73777606556595;
        break;
    }
  });
  // console.log(result); //for check

  res.json(result);
});
//============ map 中階 end ============//

//============ map 高階 star ============//
router.get("/high", async function (req, res, next) {
  let dbResults = await connection.queryAsync(
    "SELECT id,name,city,time,level,distance,pic FROM article WHERE level = 3 "
  ); // 等資料庫查詢資料

  //將資料庫抓到的的city 分成 city & area 後塞回去
  let result = dbResults;
  result.map((data) => {
    // console.log(data.city); //for check "台北市信義區"
    let city = data.city.substr(0, 3);
    // console.log('city',city); //for check "台北市"
    let area = data.city.substr(3, 3);
    // console.log('area',area); //for check "信義區"
    if (city == "台北市") {
      data.city = "臺北市";
    } else {
      data.city = city;
    }
    data.area = area; //area: '北投區'

    //根據名字塞經緯度
    let name = data.name;
    // console.log("name", name); //for check "象山親山步道"
    switch (name) {
      case "大霸北稜線": //24.461526536204694, 121.2588461704725
        data.lat = 24.461526536204694;
        data.lon = 121.2588461704725;
        break;
      case "武陵四秀登山步道": //24.418651104464868, 121.29879074648579
        data.lat = 24.418651104464868;
        data.lon = 121.29879074648579;
        break;
      case "馬洋山登山步道": //24.505300001077654, 121.27671864630682
        data.lat = 24.505300001077654;
        data.lon = 121.27671864630682;
        break;
    }
  });
  // console.log(result); //for check

  res.json(result);
});
//============ map 高階 end ============//

//============ product star ============//
router.get("/product/:level", async function (req, res, next) {

  let dbResults = await connection.queryAsync(
    "SELECT * FROM product JOIN product_brand_name ON product.id = product_brand_name.id WHERE product.level=?",
    [req.params.level]
  ); // 等資料庫查詢資料

  //=== 隨機打亂陣列函式 star ===//
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  //=== 隨機打亂陣列函式 end ===//

  let result = shuffle(dbResults).slice(0, 4); //隨機選取４項產品，回傳到前端

  res.json(result);
});
//============ product end ============//

//============ for test star ============//
router.get("/test", async function (req, res, next) {
  let dbResults = await connection.queryAsync(
    "SELECT article.*, article_status.name AS status_name, article_level.name AS level_name, article_mountain_type.name AS mountain_type_name ,article_apply.name AS apply_name FROM article JOIN article_status ON article.status = article_status.id JOIN article_level ON article.level = article_level.id JOIN article_mountain_type ON article.mountain_type = article_mountain_type.id JOIN article_apply ON article.apply = article_apply.id ORDER BY article.id"
  ); // 等資料庫查詢資料

  //將資料庫抓到的的city 分成 city & area 後塞回去
  let result = dbResults;
  result.map((data) => {
    // console.log(data.season); //for check "1,3"
    let season = data.season.replace("1", "春季");
    // console.log('season:',season); //for check "台北市"
  });
  console.log(result); //for check

  res.json(dbResults);
});
//============ for test end ============//

// let perData = dbResults.map((item, index) => {
//   item.season = item.season.replace('1', '春季');
//   item.season = item.season.replace('2', '夏季');
//   item.season = item.season.replace('3', '秋季');
//   item.season = item.season.replace('4', '冬季');
//   return item;
// })

module.exports = router;
