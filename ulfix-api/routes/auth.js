const express = require('express')
const router = express.Router()
const users = require('../mock_data/user_data.json')

router.get('/signout', function (req, res, next) {
  res.send(Object.values(users))
})

router.post('/signin', (req, res) => {
  res.send('Login')
})

module.exports = router
