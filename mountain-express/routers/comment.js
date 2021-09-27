const express = require("express");
const router = express.Router();
const connection = require("../utils/db");
const path = require("path");
// !為了處理 multipart/form-data 所以要再使用 [multer 套件處理]
const multer = require("multer");
const upload = multer();

// 先使用diskStorage設定儲存方式
// 通常儲存在硬碟中用 .diskStorage()
const storage = multer.diskStorage({
  // 設定儲存目的地
  destination: function (req, file, cb) {
     cb(null,path.join(__dirname,"../","public","img","comment-img"));
  },
  // 設定儲存名稱
  filename: function (req, file, cb) {
    console.log(file);
    const ext = file.originalname.split(".").pop();
    // cb(null, 新名字)
    cb(null, `comment-${Date.now()}.${ext}`);
  },
});

// 再開始使用multer處理上傳檔案
const uploader = multer({
  // 檔案儲存位置
  storage: storage,
  // 檔案格式驗證！很重要！
  fileFilter: function (req, file, cb) {
    if(
      file.mimetype !== "image/jpeg" &&
      file.mimetype !== "image/jpg" &&
      file.mimetype !== "image/png"
    ){
      cb(new Error("不接受的檔案型態"), false);
    }
    cb(null,true);
  },
  // // 檔案大小限制
  // limits: {
  //   fileSize: 1024 * 1024,
  // },
});

// 評論資料
router.get("/", async function (req, res, next) {
  let dbResults = await connection.queryAsync("SELECT comments.*, user.id AS users_id, user.name AS users_name, user.level AS user_level, article.name AS article_name ,dislike.dislike_status AS dislike_status FROM comments JOIN article ON comments.article_id = article.id  JOIN user ON comments.user_id = user.id JOIN dislike on comments.id = dislike.comments_id WHERE comments.valid = 1 ORDER BY time DESC"); // 等資料庫查詢資料
  
  res.json(dbResults);
});


// 新增評論資料
router.post("/insert", uploader.single("pic") , async function (req, res, next) {
// router.post("/insert",upload.array(), async function (req, res, next) {
  // 用validateResult韓式接住req
  // const validateResult = validationResult(req);
  // console.log("validateResult",validateResult);
  console.log("req.body",req.body);
  console.log("req.body.userID",req.body.userID);
  console.log("req.file",req.file);
  // 設定圖片存進mysql資料庫的檔案位置 要儲存 uploads/member-1631240809142.jpg
  let filename = req.file ? req.file.filename : "";
  let time = new Date();
  let dbResults = await connection.queryAsync("INSERT INTO comments (user_id, content, time, article_id,valid,pic) VALUES (?);",[[req.body.userID,req.body.content,time,req.body.articleID,req.body.valid,filename]]); // 等資料庫查詢資料
  // console.log("dbResults",dbResults);
  // console.log("dbResults.insertId",dbResults.insertId);
  // 如果改vaild怕後台也要改
  // 新增dislike資料 同步新增dislike表格 原因0 狀態2通過
  let insertDislike = await connection.queryAsync("INSERT INTO dislike (comments_id, dislike_reason,dislike_status,dislike_time,dislike_valid) VALUES (?);",[[dbResults.insertId, 0,2,time,1]]); // 等資料庫查詢資料
  // console.log("insertDislike",insertDislike);
  res.json(dbResults);
});

module.exports = router;
