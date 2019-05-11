const express = require('express')
const router = require('./router')
const path = require('path')
var bodyParser = require('body-parser')
var cors = require('cors')

const port = 5000
const hostname = '127.0.0.1'

var app = express()
app.use(cors())
// app.use(
//   cors({
//     origin: ['http://127.0.0.1:4000'],
//     methods: ['GET', 'POST'],
//     alloweHeaders: ['Content-Type', 'Authorization']
//   })
// )
// 配置 body-parser
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// 开放公共空间
app.use('/public/', express.static(path.join(__dirname, 'public')))

// 挂载路由
app.use(router)

app.listen(port, hostname, () => {
  console.log(`服务器启动成功，通过 http://${hostname}:${port}/ 访问`)
})
