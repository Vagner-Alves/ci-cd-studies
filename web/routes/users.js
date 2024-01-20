const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.send('respond with a resource')
})

// creating a testing route

router.get('/dev', function(req, res, next){
  res.send('test features in this route')
})

module.exports = router
