var SwipeItem = require('./models/swipeItemSchema.js')
var NewsList = require('./models/newsListSchema')

exports.findSwipeItems = callback => {
  SwipeItem.find()
    .then(data => {
    //   console.log(data)
      return callback(null, data)
    })
    .catch(err => {
      return callback(err)
    })
}

exports.findNewsList = callback => {
  NewsList.find()
    .then(data => {
    //   console.log(data)
      return callback(null, data)
    })
    .catch(err => {
      return callback(err)
    })
}

exports.findNewsInfoById = (id, callback) => {
  NewsList.findById(id)
    .then(data => {
    //   console.log(data)
      return callback(null, data)
    })
    .catch(err => {
      return callback(err)
    })
}
