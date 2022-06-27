let express = require('express')
let router = express.Router()
fourData = require('../mock/four.json')
router.get('', (req, res) => {
  res.send({ msg: '我是four', chartData: fourData })
})

module.exports = router
