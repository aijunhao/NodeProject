var express = require('express')
var Db = require('./db.js')

var router = express.Router()

// 轮播图
router.get('/swipeitems', (req, res) => {
  Db.findSwipeItems((err, data) => {
    if (!err) {
      console.log('swipeitems 数据加载成功')
      res.status(200).send(data)
    } else {
      console.log('swipeitems 数据加载失败')
      res.status(500).send('服务器错误！请重试！')
    }
  })
})

// 新闻加载页面
router.get('/newslist', (req, res) => {
  Db.findNewsList((err, data) => {
    if (!err) {
      console.log('newslist 数据加载成功')
      res.status(200).send(data)
    } else {
      console.log('newslist 数据加载失败')
      res.status(500).send('服务器错误！请重试！')
    }
  })
})

// 新闻内容页面
router.get('/newsinfo/:id', (req, res) => {
  console.log(req.params.id)
  Db.findNewsInfoById(req.params.id, (err, data) => {
    if (!err) {
      console.log('newsinfo 数据加载成功')
      res.status(200).send(data)
    } else {
      console.log('newsinfo 数据加载失败')
      res.status(500).send('服务器错误！请重试！')
    }
  })
})

// 新闻评论页面
router.get('/getcomments/:id', (req, res) => {
  Db.findCommentsInfoById(req.params.id, req.query.pageindex, (err, data) => {
    if (!err) {
      console.log('comments 数据加载成功', data)
      res.status(200).send(data)
    } else {
      console.log('comments 数据加载失败')
      res.status(500).send('服务器错误！请重试！')
    }
  })
})

// 发表评论
router.post('/postcomment', (req, res) => {
  console.log(req.body.content, req.body.artid)
  Db.addComment(req.body.artid, req.body.content, (err, data) => {
    if (!err) {
      console.log('评论发表成功', data)
      res.status(200).send('评论成功')
    } else {
      console.log('评论发表失败！', err)
      res.status(500).send('服务器错误！请重试！')
    }
  })
})

router.get('/getphotolist/:cateid', (req, res) => {
  console.log(req.params.cateid)
  Db.findPhotoListByCateId(req.params.cateid, (err, data) => {
    if (!err) {
      console.log('photoList 加载成功', data)
      res.status(200).send(data)
    } else {
      console.log('photoList 加载失败', err)
      res.status(500).send('服务器错误！请重试！')
    }
  })
})

router.get('/getphotoinfo/:photoid', (req, res) => {
  console.log(req.params)
  Db.findPhotoInfoById(req.params.photoid, (err, data) => {
    if (!err) {
      console.log('photoinfo 加载成功', data)
      res.status(200).send(data)
    } else {
      console.log('photoinfo 加载失败', err)
      res.status(500).send('服务器错误！请重试！')
    }
  })
})

module.exports = router
