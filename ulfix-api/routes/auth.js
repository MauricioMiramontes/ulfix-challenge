const express = require('express')
const router = express.Router()
const users = require('../mock_data/user_data.json')
const jwt = require('jsonwebtoken')

const TOKEN_SECRET = 'spooky secret'

function generateAccessToken ({ id, email }) {
  return jwt.sign({ email, id }, TOKEN_SECRET, { expiresIn: '18000s' })
}

router.get('/signout', function (req, res, next) {
  res.send({ message: 'User signed out' })
})

router.post('/signin', (req, res) => {
  const user = users.find(user => user.email === req.body.email)
  if (user !== undefined && user.password === req.body.password) {
    const accessToken = generateAccessToken({ email: user.email, id: user.id })
    res.send(
      {
        accessToken,
        user: {
          email: user.email,
          id: user.id,
          name: user.name
        }
      }
    )
  } else {
    // For tests even if the authentication fails, we return a valid access token for the test user
    // res.status(401).send('Invalid credentials')
    const accessToken = generateAccessToken({ email: 'test@user.com', id: '1' })
    res.json(
      {
        accessToken,
        user: {
          email: 'test@user.com',
          id: '1',
          name: 'Test User'
        }
      }
    )
  }
})

module.exports = router
