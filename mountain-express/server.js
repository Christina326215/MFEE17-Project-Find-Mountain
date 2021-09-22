const express = require("express");
const connection = require("./utils/db");
const path = require("path");
let fs = require('fs/promises');

// 利用 express 建立了一個 express application
let app = express();

// 處理cors
const cors = require("cors");
app.use(
  cors({
    origin: ["http://localhost:3000"],
    // credentials: true,
  })
);

//使用中間件，才能讀到body資料
app.use(express.urlencoded({ extended: true }));
//使用中間件，解析json的資料
app.use(express.json());
//========================================================//
app.use(express.static(path.join(__dirname, "public")));

// 處理靜態檔案
app.use(express.static(path.join(__dirname, "public")));

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

// 製作以縣市為key值的查表法，使縣市有各自的區名。
app.get("/api/zip/group", async (req,res,next)=>{
  // 讀資料
  let zip = await fs.readFile(path.join(__dirname, "public", "zip", "zip.json"),
  "utf-8")
  zip = JSON.parse(zip);

  // 處理資料 得到以郵遞區號為key的資料
  // 當會員已儲存註冊時的zip_code，可以方便在填寫付款收件地址時，自動找到該縣市與區名。
  let result ={};
  zip.map((item)=>{
    result[item.zip_code]=item;
  })
  // console.log(result);

  // 處理寫檔
  await fs.writeFile(path.join(__dirname, "public", "zip", "code.json"), JSON.stringify(result))
  // zip/group.json 是在當選擇某一收件地址之縣市時，區名直接呈現該縣市的行政區。
  res.json(result);
})


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

//===引用 recommendPage 進來 star===//
let commentRouter = require("./routers/comment");
app.use("/api/comment", commentRouter);
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

//===引用 memberEditPage 進來 star===//
let memberEditRouter = require("./routers/memberEdit");
app.use("/api/member/edit", memberEditRouter);
//===引用 memberEditPage 進來 end===//

//===引用 memberRoute 進來 star===//
let memberRouteRouter = require("./routers/memberRoute");
app.use("/api/member/route", memberRouteRouter);
//===引用 memberRoute 進來 end===//

// TODO: 建立會員路線星星評分
//===引用 memberStar 進來 star===//
let memberStarRouter = require("./routers/memberStar");
app.use("/api/member/star", memberStarRouter);
//===引用 memberStar 進來 end===//

//===引用 memberProduct 進來 star===//
let memberProductRouter = require("./routers/memberProduct");
app.use("/api/member/product", memberProductRouter);
//===引用 memberProduct 進來 end===//

//===引用 memberArticle 進來 star===//
let memberArticleRouter = require("./routers/memberArticle");
app.use("/api/member/article", memberArticleRouter);
//===引用 memberArticle 進來 end===//

//===引用 memberComment 進來 star===//
let memberCommentRouter = require("./routers/memberComment");
app.use("/api/member/comment", memberCommentRouter);
//===引用 memberComment 進來 end===//

//===引用 memberOrder 進來 star===//
let memberOrderRouter = require("./routers/memberOrder");
app.use("/api/member/order", memberOrderRouter);
//===引用 memberOrder 進來 end===//


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
