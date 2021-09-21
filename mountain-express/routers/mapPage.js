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
      case "抹茶山登山步道": //24.857877405714007, 121.73777606556595
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

//============ product 初階 star ============//
router.get("/productL", async function (req, res, next) {
  let dbResults = await connection.queryAsync(
    "SELECT id,name,price,pic,storage,type,level FROM product WHERE level = 1 "
  ); // 等資料庫查詢資料

  //將資料庫抓到的的city 分成 city & area 後塞回去
  let result = dbResults;
  let newData = [];
  result.map((data) => {
    let type = data.type;
    // console.log('type',type); //for check "1"

    switch (type) {
      case "1": //鞋子
        data.type = "鞋子";
        break;
      case "2": //背包
        data.type = "背包";
        break;
      case "3": //衣服
        data.type = "衣服";
        break;
    }

    let name = data.name;
    // console.log('name',name); //for check "The North Face 黑色便捷休閒腰包"

    if (
      name === "MERRELL Tetrex Crest Wrap 女水陸三棲鞋" ||
      "The North Face 黑色便捷休閒腰包" ||
      "The North Face 黑灰色休閒後背包" ||
      "【2000mm 防水】男透氣休閒健行外套 QUECHUA"
    ) {
      // console.log("hi");
      switch (name) {
        case "MERRELL Tetrex Crest Wrap 女水陸三棲鞋":
          data.name = "女水陸三棲鞋";
          data.brand = "MERRELL";
          //變成千分為符號 way 1//
          // data.price = String(data.price).replace(/(\d)(?=(\d{3})+$)/g, "$1,");
          //變成千分為符號 way 2//
          data.price = (data.price).toLocaleString('en-US');
          newData.push(data); //將資料重整後push到新陣列
          break;
        case "The North Face 黑色便捷休閒腰包":
          data.name = "黑色便捷休閒腰包";
          data.brand = "The North Face";
          data.price = (data.price).toLocaleString('en-US');
          newData.push(data); //將資料重整後push到新陣列
          break;
        case "The North Face 黑灰色休閒後背包":
          data.name = "黑灰色休閒後背包";
          data.brand = "The North Face";
          data.price = (data.price).toLocaleString('en-US');
          newData.push(data); //將資料重整後push到新陣列
          break;
        case "【2000mm 防水】男透氣休閒健行外套 QUECHUA":
          data.name = "男透氣休閒健行外套";
          data.brand = "Decathlon";
          data.price = (data.price).toLocaleString('en-US');
          newData.push(data); //將資料重整後push到新陣列
          break;
      }
    }
  });
  // console.log(newData); //for check

  res.json(newData);
});
//============ product 初階 end ============//

//============ product 中階 star ============//
router.get("/productM", async function (req, res, next) {
  let dbResults = await connection.queryAsync(
    "SELECT id,name,price,pic,storage,type,level FROM product WHERE level = 2 "
  ); // 等資料庫查詢資料

  //將資料庫抓到的的city 分成 city & area 後塞回去
  let result = dbResults;
  let newData = [];
  result.map((data) => {
    let type = data.type;
    // console.log('type',type); //for check "1"

    switch (type) {
      case "1": //鞋子
        data.type = "鞋子";
        break;
      case "2": //背包
        data.type = "背包";
        break;
      case "3": //衣服
        data.type = "衣服";
        break;
    }

    let name = data.name;
    // console.log('name',name); //for check "The North Face 黑色便捷休閒腰包"

    if (
      name === "Caravan C403 登山健行鞋" ||
      "Arcteryx 始祖鳥 徒步背包 Brize 32" ||
      "Arcteryx 始祖鳥 Cerium SV 保暖羽絨連帽外套" ||
      "The North Face 戶外保暖羽絨外套"
    ) {
      // console.log("hi");
      switch (name) {
        case "Caravan C403 登山健行鞋":
          data.name = "登山健行鞋";
          data.brand = "Caravan";
          //變成千分為符號 way 1//
          // data.price = String(data.price).replace(/(\d)(?=(\d{3})+$)/g, "$1,");
          //變成千分為符號 way 2//
          data.price = (data.price).toLocaleString('en-US');
          newData.push(data); //將資料重整後push到新陣列
          break;
        case "Arcteryx 始祖鳥 徒步背包 Brize 32":
          data.name = "徒步背包";
          data.brand = "Arcteryx";
          data.price = (data.price).toLocaleString('en-US');
          newData.push(data); //將資料重整後push到新陣列
          break;
        case "Arcteryx 始祖鳥 Cerium SV 保暖羽絨連帽外套":
          data.name = "保暖羽絨連帽外套";
          data.brand = "Arcteryx";
          data.price = (data.price).toLocaleString('en-US');
          newData.push(data); //將資料重整後push到新陣列
          break;
        case "The North Face 戶外保暖羽絨外套":
          data.name = "戶外保暖羽絨外套";
          data.brand = "The North Face";
          data.price = (data.price).toLocaleString('en-US');
          newData.push(data); //將資料重整後push到新陣列
          break;
      }
    }
  });
  // console.log(newData); //for check

  res.json(newData);
});
//============ product 中階 end ============//

//============ product 高階 star ============//
router.get("/productH", async function (req, res, next) {
  let dbResults = await connection.queryAsync(
    "SELECT id,name,price,pic,storage,type,level FROM product WHERE level = 3 "
  ); // 等資料庫查詢資料

  //將資料庫抓到的的city 分成 city & area 後塞回去
  let result = dbResults;
  let newData = [];
  result.map((data) => {
    let type = data.type;
    // console.log('type',type); //for check "1"

    switch (type) {
      case "1": //鞋子
        data.type = "鞋子";
        break;
      case "2": //背包
        data.type = "背包";
        break;
      case "3": //衣服
        data.type = "衣服";
        break;
    }

    let name = data.name;
    // console.log('name',name); //for check "The North Face 黑色便捷休閒腰包"

    if (
      name === "ASOLO 阿空加瓜牛皮冰攀靴" ||
      "Zamberlan 皮革登山靴" ||
      "The North Face 黑色舒適防護專業後背包" ||
      "The North Face Summit L5 FUTURELIGHT"
    ) {
      // console.log("hi");
      switch (name) {
        case "ASOLO 阿空加瓜牛皮冰攀靴":
          data.name = "阿空加瓜牛皮冰攀靴";
          data.brand = "ASOLO";
          //變成千分為符號 way 1//
          // data.price = String(data.price).replace(/(\d)(?=(\d{3})+$)/g, "$1,");
          //變成千分為符號 way 2//
          data.price = (data.price).toLocaleString('en-US');
          newData.push(data); //將資料重整後push到新陣列
          break;
        case "Zamberlan 皮革登山靴":
          data.name = "皮革登山靴";
          data.brand = "Zamberlan";
          data.price = (data.price).toLocaleString('en-US');
          newData.push(data); //將資料重整後push到新陣列
          break;
        case "The North Face 黑色舒適防護專業後背包":
          data.name = "舒適防護專業後背包";
          data.brand = "The North Face";
          data.price = (data.price).toLocaleString('en-US');
          newData.push(data); //將資料重整後push到新陣列
          break;
        case "The North Face Summit L5 FUTURELIGHT":
          data.name = "Summit L5系列外套";
          data.brand = "The North Face";
          data.price = (data.price).toLocaleString('en-US');
          newData.push(data); //將資料重整後push到新陣列
          break;
      }
    }
  });
  // console.log(newData); //for check

  res.json(newData);
});
//============ product 高階 end ============//

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
