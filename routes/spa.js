var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.sendFile("spa.html", {root: `C:\\Users\\Lucas\\Desktop\\Vue-Example\\YPF\\Express\\views`});
});

module.exports = router;