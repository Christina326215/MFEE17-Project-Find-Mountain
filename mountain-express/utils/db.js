const mysql = require("mysql");
require("dotenv").config(); // 透過dotenv設定連線資料，以免資料外洩
const Promise = require("bluebird");

let connection = mysql.createPool({ //宣告時要用let不能用const
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: process.env.CONNECTION_LIMIT, //預先設置連線的數量
  dateStrings: true, // 資料庫date長怎樣就怎樣，不要改成js的date格式
});

connection = Promise.promisifyAll(connection);

module.exports = connection; //原本記憶體會被釋放module.exports指向connection的記憶體
