const express = require('express')
const router = express.Router()
const users = require('../mock_data/user_data.json')
const jwt = require('jsonwebtoken')
const fs = require('fs') // file system

const TOKEN_SECRET = 'spooky secret'

function generateAccessToken ({ id, email }) {
  return jwt.sign({ email, id }, TOKEN_SECRET, { expiresIn: '18000s' })
}

function authenticateToken (req, res, next) {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) {
      console.log(err)
      return res.sendStatus(403)
    }

    req.user = user

    next()
  })
}

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(Object.values(users))
})

router.get('/:userId', authenticateToken, function (req, res, next) {
  const user = users.find(user => user.id === req.params.userId)

  // Verify if user exists
  if (user === undefined) {
    res.status(404).send({ message: 'User not found' })
    return
  }

  // Verify if user is authenticated
  if (req.user.id !== user.id) {
    res.status(403).send({ message: 'Forbidden' })
    return
  }

  res.send(user)
})

/* POST new user name, email and password are required fields */
router.post('/', (req, res) => {
  // Check for required fields
  if (!req.body.email || !req.body.password || !req.body.name) {
    res.status(400).send({ message: 'Missing required fields' })
    return
  }

  const user = users.find(user => user.email === req.body.email)
  const newUserId = parseInt(users[users.length - 1].id) + 1

  // Verify if user exists
  if (user !== undefined) {
    res.status(404).send({ message: 'User already exists' })
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

  const accessToken = generateAccessToken({ email: newUser.email, id: newUser.id })
  res.json(
    {
      accessToken,
      user: {
        email: newUser.email,
        id: newUser.id,
        name: newUser.name
      }
    }
  )
})

/* Update existing user if a field is not send in the body the privious value will be kept, Users can only edit themselves */
router.put('/:userId', authenticateToken, (req, res) => {
  const user = users.find(user => user.id === req.params.userId)
  const index = users.indexOf(user)

  // Verify if user exists
  if (user === undefined) {
    res.status(404).send({ message: 'User not found' })
    return
  }

  // Verify if user is authenticated
  if (req.user.id !== user.id) {
    res.status(403).send({ message: 'Forbidden' })
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

  const accessToken = generateAccessToken({ email: updatedUser.email, id: updatedUser.id })
  res.json(
    {
      accessToken,
      user: {
        email: updatedUser.email,
        id: updatedUser.id,
        name: updatedUser.name
      }
    }
  )
})

/* Delete existing user, users can only delete themselves */
router.delete('/:userId', authenticateToken, (req, res) => {
  const user = users.find(user => user.id === req.params.userId)
  const index = users.indexOf(user)

  // Verify if user exists
  if (user === undefined) {
    res.status(404).send({ message: 'User not found' })
    return
  }

  // Verify if user is authenticated
  if (req.user.id !== user.id) {
    res.status(403).send({ message: 'Forbidden' })
    return
  }

  users.splice(index, 1)

  fs.writeFile('./mock_data/user_data.json', JSON.stringify(users),
    function (err, result) {
      if (err) console.log('error', err)
    })

  res.status(200).send(
    {
      message: `Deleted user with id: ${req.params.userId}`
    }
  )
})

module.exports = router
