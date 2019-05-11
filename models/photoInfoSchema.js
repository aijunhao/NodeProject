var mongoose = require("mongoose")

var Schema = mongoose.Schema

var PhotoInfoSchema = new Schema({
  // {
  //   "_id": { "$oid": "5cb82b1e747b67364587198f" },
  //   "click": 1,
  //   "title": "清新图片2",
  //   "content": "这是摘要2这是摘要2这是摘要2这是摘要2这是摘要2这是摘要2这是摘要2",
  //   "img_url": "./public/images/2.jpg",
  //   "publish_time": "2019-03-29T14:17:45.886Z"
  // }
  _id: {
    type: Object,
    required: false
  },
  click: {
    type: Number,
    default: 0
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  img_url: {
    type: String,
    default: "http://www.aijunhao.com.cn/images/2.jpg"
  },
  publish_time: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model("PhotoInfo", PhotoInfoSchema)
