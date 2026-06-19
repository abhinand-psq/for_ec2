var express = require('express');
var router = express.Router();

/* GET services listing. */
router.get('/', function (req, res, next) {
  res.render('services');
});

module.exports = router;
