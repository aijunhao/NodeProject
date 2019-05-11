var mongoose = require("mongoose")

var Schema = mongoose.Schema

var GoodsSchema = new Schema({
  // {
  //   "title": "华为 HUAWEI P30",
  //   "publish_time": "2019-04-20T14:17:45.886Z",
  //   "zhaiyao": "华为 HUAWEI P30 超感光徕卡三摄麒麟980AI智能芯片全面屏屏内指纹版手机8GB+64GB亮黑色全网通双4G手机双",
  //   "click": 0,
  //   "img_url": "./public/images/huawei.jpg",
  //   "sell_price": 3988.00,
  //   "old_price": 4988.00,
  //   "stock_quantity": 60
  // }
  _id: {
    type: Object,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  publish_time: {
    type: Date,
    default: Date.now
  },
  zhaiyao: {
    type: String,
    required: true
  },
  click: {
    type: Number,
    default: 0
  },
  img_url: {
    type: String,
    default: "http://www.aijunhao.com.cn/images/2.jpg"
  },
  sell_price: {
    type: Number,
    required: true
  },
  old_price: {
    type: Number
  },
  stock_quantity: {
    type: Number
  }
})

module.exports = mongoose.model("GoodsList", GoodsSchema)
