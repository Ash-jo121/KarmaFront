var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 5000

app.use(bodyParser.json())

app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Users = require('./routes/Users')

app.use('/users', Users)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})


app.get('/attendance', function (req, res) {
  connection.connect();

  connection.query('SELECT * FROM users', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
  });

  connection.end();
});