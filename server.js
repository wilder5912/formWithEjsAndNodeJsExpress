const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = '*****************';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
  let city = req.body.city;
  console.log(req.body);

  let url = 'http://localhost:8080/business/getBusinessDTO'; //here put url of the backend

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body);
        console.log(weather);
        res.render('home', {weather: weather, error: null});

    }
  });

})
app.get('/home', function (req, res) {
    res.render('home', {weather: null, error: null});
})
app.post('/home', function (req, res) {
    res.render('home', {weather: null, error: null});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
