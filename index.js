const express = require('express')
const router = require('./router')
const path = require('path')

const port = 5000
const hostname = '127.0.0.1'

var app = express()

// 开放公共空间
app.use('/public/', express.static(path.join(__dirname, 'public')))

// 挂载路由
app.use(router)

app.listen(port, hostname, () => {
  console.log(`服务器启动成功，通过 http://${hostname}:${port}/ 访问`)
})
