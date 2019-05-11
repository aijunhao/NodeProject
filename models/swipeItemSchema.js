// var mongoose = require('../dbUtils.js')
var mongoose = require('mongoose')

var Schema = mongoose.Schema

var SwipeItemSchema = new Schema({
  // {
  //     // 图片超链接地址
  //     "url": "#",
  //     // 图片资源地址
  //     "img": "http://www.aijunhao.com.cn/images/1.jpg"
  // }
  url: {
    type: String
  },
  img: {
    type: String
  }
})

module.exports = mongoose.model('SwipeItem', SwipeItemSchema)
