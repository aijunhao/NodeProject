var mongoose = require('../dbUtils.js')

var Schema = mongoose.Schema

var PhotoListSchema = new Schema({
  // {
  //     "_id": "",
  //     "title": "清新美女图",
  //     "cateId": 1,
  //     "zhaiyao": "一个超好看的美女",
  //     "img_url": "http://www.aijunhao.com.cn/images/1.jpg"
  // }
  _id: {
    type: Object,
    required: false
  },
  cateId: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  zhaiyao: {
    type: String,
    required: true
  },
  img_url: {
    type: String,
    default: 'http://www.aijunhao.com.cn/images/2.jpg'
  }
})

module.exports = mongoose.model('PhotoList', PhotoListSchema)
