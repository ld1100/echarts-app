let express = require('express')
let app = express()
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')

  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')

  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS')

  next()
})
let chartOne = require('./router/one.js')
let chartTwo = require('./router/two.js')
let chartThree = require('./router/three.js')
let chartFour = require('./router/four.js')

app.use('/one', chartOne)
app.use('/two', chartTwo)
app.use('/three', chartThree)
app.use('/four', chartFour)

app.listen(8888)
