var express = require('express');
var router = express.Router();

router.get('/signout', function(req, res, next) {
  res.send(
    'Logout',
  );
});

router.post('/signin', (req, res) => {
  res.send('Login');
});

module.exports = router;
