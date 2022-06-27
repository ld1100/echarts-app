let express = require('express')
let router = express.Router()
let threeData=require("../mock/three.json")
router.get('', (req, res) => {
  res.send({ msg: '我是three',chartData:threeData })
})

module.exports = router
