var express = require('express')
var router = express.Router()
var Db = require('./db.js')

// 轮播图
router.get('/swipeitems', (req, res) => {
  Db.findSwipeItems((err, data) => {
    if (!err) {
      console.log('swipeitems 数据加载成功')
      res.send(data)
    } else {
      console.log('swipeitems 数据加载失败')
    }
  })
})

// 新闻加载页面
router.get('/newslist', (req, res) => {
  Db.findNewsList((err, data) => {
    if (!err) {
      console.log('newslist 数据加载成功')
      res.send(data)
    } else {
      console.log('newslist 数据加载失败')
    }
  })
})

// 新闻内容页面
router.get('/newsinfo/:id', (req, res) => {
  console.log(req.params.id)
  Db.findNewsInfoById(req.params.id, (err, data) => {
    if (!err) {
      console.log('newsinfo 数据加载成功')
      res.send(data)
    } else {
      console.log('newsinfo 数据加载失败')
    }
  })
})

module.exports = router
