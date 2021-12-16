const express = require('express')
const router = express.Router()
const users = require('../mock_data/user_data.json')
const fs = require('fs') // file system

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(Object.values(users))
})

router.get('/:userId', function (req, res, next) {
  const user = users.find(user => user.id === req.params.userId)

  // Verify if user exists
  if (user === undefined) {
    res.status(404).send('User not found')
    return
  }

  res.send(user)
})

router.post('/', (req, res) => {
  const user = users.find(user => user.email === req.body.email)
  const newUserId = parseInt(users[users.length - 1].id) + 1

  // Verify if user exists
  if (user !== undefined) {
    res.status(404).send('User already exists')
    return
  }

  // Create new user
  const newUser = {
    id: newUserId.toString(),
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    created: new Date(),
    updated: new Date()
  }

  users.push(newUser)
  fs.writeFile('./mock_data/user_data.json', JSON.stringify(users),
    function (err, result) {
      if (err) console.log('error', err)
    })
  res.send(newUser)
})

router.put('/:userId', (req, res) => {
  const user = users.find(user => user.id === req.params.userId)
  const index = users.indexOf(user)

  // Verify if user exists
  if (user === undefined) {
    res.status(404).send('User not found')
    return
  }

  // Create updated user
  const updatedUser = {
    id: user.id,
    name: req.body.name !== undefined ? req.body.name : user.name,
    email: req.body.email !== undefined ? req.body.email : user.email,
    password: req.body.password !== undefined ? req.body.password : user.password,
    created: user.created,
    updated: new Date()
  }

  users.splice(index, 1, updatedUser)
  fs.writeFile('./mock_data/user_data.json', JSON.stringify(users),
    function (err, result) {
      if (err) console.log('error', err)
    })
  res.send(users[index])
})

router.delete('/:userId', (req, res) => {
  const user = users.find(user => user.id === req.params.userId)
  const index = users.indexOf(user)

  // Verify if user exists
  if (user === undefined) {
    res.status(404).send('User not found')
    return
  }

  users.splice(index, 1)
  fs.writeFile('./mock_data/user_data.json', JSON.stringify(users),
    function (err, result) {
      if (err) console.log('error', err)
    })

  res.status(200).send(
    `Deleted user with id: ${req.params.userId}`
  )
})

module.exports = router
