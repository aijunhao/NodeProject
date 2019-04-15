const mongoose = require('mongoose')

const port = 27017
const hostname = '127.0.0.1'
const dbName = 'vuedb'
const dbUrl = `mongodb://${hostname}:${port}/${dbName}`

// 连接数据库
mongoose.connect(dbUrl)

// 获取数据库连接状态对象
var db = mongoose.connection
db.on('error', () => {
  console.log(dbUrl, ' 数据库连接失败！')
})

db.once('open', function () {
  console.log(dbUrl, ' 数据库连接成功！')
})
db.on('disconnected', () => {
  console.log(dbUrl, ' 数据库连接中断')
})
db.on('error', () => {
  console.log(dbUrl, ' 数据库连接异常')
})

module.exports = mongoose
