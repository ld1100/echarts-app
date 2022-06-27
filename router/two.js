let express = require('express')
let router = express.Router()
let twoData=require("../mock/two.json")

router.get('/data', (req, res) => {
  res.send({ msg: '我是two',chartData:twoData  })
})

module.exports = router
