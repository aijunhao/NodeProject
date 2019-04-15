var mongoose = require('../dbUtils.js')

var Schema = mongoose.Schema

var NewsListSchema = new Schema({
  // {
  //   "id": 1,
  //   "publishTime": "2019-03-29T14:17:45.886Z",
  //   "clickNumber": 1,
  //   "title": "睡觉",
  //   "zhaiyao": "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？",
  //   "img_url": "http://www.aijunhao.com.cn/images/1.jpg"
  // }
  publishTime: {
    type: String
  },
  clickNumber: {
    type: Number
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

module.exports = mongoose.model('NewsList', NewsListSchema)