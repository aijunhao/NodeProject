var express = require('express')
var fs = require('fs')
var path = require('path')
var router = express.Router()

// 首页
router.get('/swipeItems', (req, res) => {
  fs.readFile(
    path.join(__dirname, '/data/swipeItemsApi.json'),
    'utf-8',
    (err, data) => {
      if (err) {
        return console.log('读取错误')
      }
      res.send(data)
    }
  )
})

module.exports = router
