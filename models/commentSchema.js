var mongoose = require('../dbUtils.js')

var Schema = mongoose.Schema

var CommentSchema = new Schema({
  // {
  //     "publisherId": "5cb428c79cd9b7a0d6f06e2e",
  //     "publishTime": "2019-03-29T14:17:45.886Z",
  //     "support": 1,
  //     "nickname": "幸福",
  //     "connet": "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？",
  //     "img_url": "http://www.aijunhao.com.cn/images/1.jpg"
  // }
  publisherId: {
    type: String,
    required: true
  },
  publishTime: {
    type: Date,
    default: Date.now
  },
  support: {
    type: Number,
    default: 0
  },
  nickname: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  img_url: {
    type: String,
    default: 'http://www.aijunhao.com.cn/images/2.jpg'
  }
})

module.exports = mongoose.model('Comment', CommentSchema)
