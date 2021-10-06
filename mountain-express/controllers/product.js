const productModel = require('../models/product.js')
//const passport = require('passport')
const path = require('path')
const fs = require('fs')
//const _ = require('lodash')

// 導入dotenv 使用 .env 檔案中的設定值 process.env
require('dotenv').config()

// Create and Save a new User
module.exports.create = async (req, res) => {
  // request驗証輸入
  if (!req.body.name) {
    return res.status(400).json({
      message: 'name is empty',
    })
  }

  //從request json 資料建立新的物件
  const product = req.body

  try {
    const newUser = await productModel.create(product)
    res.json(newUser)
  } catch (error) {
    res.status(500).json({
      message: error.message || 'error occurred.',
    })
  }
}

//
module.exports.find = async (req, res) => {
  // if has req.query
  if (Object.keys(req.query).length > 0) {
    try {
      const users = await productModel.find(req.query)
      res.json(users)
    } catch (error) {
      res.status(500).json({
        message: error.message || 'error occurred.',
      })
    }
  } else {
    try {
      const users = await productModel.findAll()
      res.json(users)
    } catch (error) {
      res.status(500).json({
        message: error.message || 'error occurred.',
      })
    }
  }
}

// Find a single user with a userId
module.exports.findById = async (req, res) => {
  try {
    const user = await productModel.findById(req.params.userId)

    if (!user.id) {
      return res.status(404).json({
        message: 'User not found with id ' + req.params.userId,
      })
    }

    res.json(user)
  } catch (error) {
    res.status(500).json({
      message: error.message || 'error occurred.',
    })
  }
}

// Find just one single user with query
module.exports.findOne = async (req, res) => {
  try {
    const user = await productModel.findOne(req.query)

    if (!user.id) {
      return res.status(404).json({
        message: 'User not found with id ' + req.params.userId,
      })
    }

    res.json(user)
  } catch (error) {
    res.status(500).json({
      message: error.message || 'error occurred.',
    })
  }
}

// Update a note identified by the noteId in the request
module.exports.update = async (req, res) => {
  // Validate request
  if (!req.body.name) {
    return res.status(400).json({
      message: 'Name can not be empty',
    })
  }

  //從request json 資料建立新的物件
  // userId使用網址上的參數
  const user = {
    id: req.params.userId,
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  }

  try {
    const updatedUser = await productModel.update(user)

    if (!updatedUser.id) {
      return res.status(404).json({
        message: 'User not found with id ' + req.params.userId,
      })
    }

    res.json(updatedUser)
  } catch (error) {
    res.status(500).json({
      message: error.message || 'error occurred.',
    })
  }
}

// Delete a note with the specified noteId in the request
module.exports.delete = async (req, res) => {
  // use params.userId = id
  const userId = +req.params.userId

  try {
    const result = await productModel.delete(userId)
    res.json(result)
  } catch (error) {
    res.status(500).json({
      message: error.message || 'error occurred.',
    })
  }
}

// input file name = avatar
module.exports.uploadImage = async (req, res) => {
  try {
    if (!req.files) {
      res.status(422).json({ message: 'Invalid file' })
    } else {
      //使用輸入框的名稱來獲取上傳檔案 (例如 "image")
      let image = req.files.avatar

      const extensionName = path.extname(image.name) // fetch the file extension
      const allowedExtension = ['.jpg']

      if (!allowedExtension.includes(extensionName)) {
        return res.status(422).json({ message: 'Invalid Image' })
      }

      const userid = req.body.id

      if (!userid) {
        return res.status(422).json({ message: 'Invalid User id' })
      }

      //使用 mv() 方法來移動上傳檔案到要放置的目錄裡 (例如 "public")
      const rootPath = path.join(__dirname, '../../')

      // change name to userid.ext
      image.mv(rootPath + '/public/images/avatar/' + userid + extensionName)

      // 處理資料庫更新
      // 1. 找到使用者資料
      const user = await productModel.findById(userid)
      // 2. 更新會員資料
      user.avatar = userid + extensionName
      const updatedUser = await productModel.update(user)

      //送出回應
      res.json({
        message: 'success',
        data: {
          name: image.name,
          mimetype: image.mimetype,
          size: image.size,
        },
        user: updatedUser,
      })
    }
  } catch (err) {
    res.status(500).json(err)
  }
}
/*--------------------------*/

// 多檔上傳
/*--------------------------*/
// input file name = photos
module.exports.uploadImages = async (req, res) => {
  // console.log(req.files.photos)
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: 'No file uploaded',
      })
    } else {
      const userid = req.body.id

      if (!userid) {
        return res.status(422).json({ message: 'Invalid User id' })
      }

      //使用 mv() 方法來移動上傳檔案到要放置的目錄裡 (例如 "public")
      const rootPath = path.join(__dirname, '../../')

      //loop all files
      let data = []
      for (let i = 0; i < req.files.photos.length; i++) {
        let photo = req.files.photos[i]

        //move photo to uploads directory
        photo.mv(
          rootPath + '/public/images/gallery/' + userid + '/' + photo.name
        )

        //push file details
        data.push({
          name: photo.name,
          mimetype: photo.mimetype,
          size: photo.size,
        })
      }

      console.log(data)
      // _.forEach(_.keysIn(req.files.photos), (key) => {
      // })

      // 記錄到眾料庫中 + 處理資料庫更新
      // 1. 找到使用者資料
      const user = await productModel.findById(userid)
      // 2. 更新會員資料
      const photos = data.map((v) => v.name)

      // 加入 photos string
      if (user.photos) {
        user.photos = [...user.photos.split(','), ...photos].join(',')
      } else {
        user.photos = [...photos].join(',')
      }

      // update the user table
      const updatedUser = await productModel.update(user)

      //return response
      res.json({
        status: 200,
        message: 'Files are uploaded',
        data: data,
        user: updatedUser,
      })
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

// TODO: not work now
module.exports.deleteFiles = async (req, res) => {
  const userid = req.body.id
  const rootPath = path.join(__dirname, '../../')

  const galleryPath = rootPath + '/public/images/gallery/' + userid + '/'

  const files = ['file1.js', 'file2.jpg', 'file3.css']

  try {
    files.forEach((path) => fs.existsSync(path) && fs.unlinkSync(path))
  } catch (err) {
    console.error(err)
  }
}
