let express = require('express')
let router = express.Router()
let oneData=require("../mock/one.json")

router.get('', (req, res) => {
  res.send({ msg: '我是one',chartData:oneData })
})

module.exports = router
