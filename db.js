var SwipeItem = require('./models/swipeItemSchema.js')
var NewsList = require('./models/newsListSchema')
var Comments = require('./models/commentSchema.js')
var PhotoList = require('./models/photoListSchema.js')
var PhotoInfo = require('./models/PhotoInfoSchema.js')
var Goods = require('./models/goodsSchema.js')
var mongoose = require('./dbUtils')

exports.findSwipeItems = callback => {
  SwipeItem.find()
    .then(data => {
      //   console.log(data)
      // mongoose.Collection.close()
      // console.log('数据库已关闭')
      return callback(null, data)
    })
    .catch(err => {
      return callback(err)
    })
}

exports.findNewsList = callback => {
  NewsList.find()
    .then(data => {
      //   console.log(data)
      return callback(null, data)
    })
    .catch(err => {
      return callback(err)
    })
}

exports.findNewsInfoById = (id, callback) => {
  console.log(id)
  NewsList.findById(mongoose.Types.ObjectId(id))
    .then(data => {
      console.log('data', data)
      return callback(null, data)
    })
    .catch(err => {
      return callback(err)
    })
}

exports.findCommentsInfoById = (id, pageIndex, callback) => {
  console.log('pageIndex 和 id', pageIndex, id)
  var pageSize = 5
  var skipCount = (pageIndex - 1) * pageSize
  Comments.find({
    publisherId: id
  })
    .skip(skipCount)
    .limit(pageSize)
    .sort({ _id: -1 })
    .then(data => {
      console.log(data)
      return callback(null, data)
    })
    .catch(err => {
      return callback(err)
    })
}

exports.addComment = (artid, content, callback) => {
  console.log(artid, content)
  Comments({
    publisherId: artid,
    publishTime: new Date(),
    content: content,
    nickname: 'test'
  })
    .save()
    .then(data => {
      console.log('数据保存数据库成功', data)
      return callback(null, data)
    })
    .catch(err => {
      return callback(err)
    })
}

exports.findPhotoListByCateId = (cateid, callback) => {
  PhotoList.find({
    cateId: cateid
  })
    .then(data => {
      console.log(data)
      return callback(null, data)
    })
    .catch(err => {
      return callback(err)
    })
}

exports.findPhotoInfoById = (id, callback) => {
  console.log('id', id)
  PhotoInfo.findById(mongoose.Types.ObjectId(id))
    .then(data => {
      // console.log(data)
      return callback(null, data)
    })
    .catch(err => {
      return callback(err)
    })
}

exports.findGoodes = (pageIndex, callback) => {
  var pageSize = 5
  var skipCount = (pageIndex - 1) * pageSize
  Goods.find()
    .sort({ _id: 1 })
    .skip(skipCount)
    .limit(pageSize)
    .then(data => {
      // console.log(data)
      return callback(null, data)
    })
    .catch(err => {
      return callback(err)
    })
}
