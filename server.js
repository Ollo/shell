var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// assets
app.use('/', express.static(__dirname + '/'));

/* Route all requests to the client for routing */
app.get('*', function(req, res) {
  res.sendFile('index.html', { root: __dirname });
});

app.listen(port, function() {
  console.log('Server running on port ' + port);
})

module.exports = app;
