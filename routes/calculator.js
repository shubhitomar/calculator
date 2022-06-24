var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('calculator');
  });

  router.post('/add', function(req, res) {
    var a= parseInt(req.body.num1);
    var b= parseInt(req.body.num2);
    var c=a+b;
    res.render('calculator',{c});
  });

  router.post('/multi', function(req, res) {
    var a= parseInt(req.body.num1);
    var b= parseInt(req.body.num2);
    var c=a*b;
    res.render('calculator',{c});
  });

  router.post('/sub', function(req, res) {
    var a= parseInt(req.body.num1);
    var b= parseInt(req.body.num2);
    var c=a-b;
    res.render('calculator',{c}); 
  });



module.exports = router;