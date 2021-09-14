const express = require("express");
const connection = require("./utils/db");
const path = require("path");

// 利用 express 建立了一個 express application
let app = express();

//cors的問題解法
const cors = require("cors");
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

//使用中間件，才能讀到body資料
app.use(express.urlencoded({ extended: false }));
//使用中間件，解析json的資料
app.use(express.json());
//========================================================//

// react yarn build star
// app.use(express.static(path.join(__dirname, "react")));
// react yarn build end

//HTTP Method: get, post, put, patch, delete
//使用一個"中間件"(middleware)
app.use((req, res, next) => {
  //重整網頁有請求才會觸發
  let current = new Date();
  console.log(`有人來訪問了 at ${current.toISOString()}`);
  console.log("i am first middleware");
  next(); //不呼叫不會前往下一個,但他不知道下一個是誰
});

//===引用 auth 進來 star===//
let authRouter = require("./routers/auth");
app.use("/api/auth", authRouter);
//===引用 auth 進來 end===//

//===引用 homePage 進來 star===//
let homeRouter = require("./routers/homePage");
app.use("/api/home", homeRouter);
//===引用 homePage 進來 end===//

//===引用 mapPage 進來 star===//
let mapRouter = require("./routers/mapPage");
app.use("/api/map", mapRouter);
//===引用 mapPage 進來 end===//

//===引用 recommendPage 進來 star===//
let recommendRouter = require("./routers/recommendPage");
app.use("/api/recommend", recommendRouter);
//===引用 recommendPage 進來 end===//

//===引用 shopPage 進來 star===//
let shopRouter = require("./routers/shopPage");
app.use("/api/shop", shopRouter);
//===引用 shopPage 進來 end===//

//===引用 outfitPage 進來 star===//
let outfitRouter = require("./routers/outfitPage");
app.use("/api/outfit", outfitRouter);
//===引用 outfitPage 進來 end===//

//===引用 shopCartPage 進來 star===//
let shopCartRouter = require("./routers/shopCartPage");
app.use("/api/shopCart", shopCartRouter);
//===引用 shopCartPage 進來 end===//

//===引用 memberPage 進來 star===//
let memberRouter = require("./routers/memberPage");
app.use("/api/member", memberRouter);
//===引用 memberPage 進來 end===//

//====== error message star ======//
app.use((req, res, next) => {
  res.status(404).json({ message: "404 Not Found" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status).json({ message: err.message });
});
//====== error message end ======//

  //====== 錯誤範例 star ======//
  //   let isLogin = false;
  //   if (isLogin) {
  //     next();
  //   } else {
  //     next({
  //       status: 401,
  //       message: "沒有登入不能用喔",
  //     });

  //     next("錯了喔");
  //   }
  //====== 錯誤範例 end ======//

app.listen(3500, () => {
  console.log("star web server");
});