const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

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
  });
  // console.log(result); //for check

  res.json(result);
});

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
  });
  // console.log(result); //for check

  res.json(result);
});

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

// let perData = dbResults.map((item, index) => {
//   item.season = item.season.replace('1', '春季');
//   item.season = item.season.replace('2', '夏季');
//   item.season = item.season.replace('3', '秋季');
//   item.season = item.season.replace('4', '冬季');
//   return item;
// })

module.exports = router;
