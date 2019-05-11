var mongoose = require("mongoose")

var Schema = mongoose.Schema

var NewsListSchema = new Schema({
  // {
  //   "publishTime": "2019-03-29T14:17:45.886Z",
  //   "clickNumber": 1,
  //   "title": "睡觉",
  //   "zhaiyao": "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？",
  //   "img_url": "http://www.aijunhao.com.cn/images/1.jpg"
  // }
  publishTime: {
    type: Date,
    default: Date.now
  },
  clickNumber: {
    type: Number,
    default: 0
  },
  title: {
    type: String
  },
  zhaiyao: {
    type: String
  },
  img_url: {
    type: String
  }
})

module.exports = mongoose.model("NewsList", NewsListSchema)
