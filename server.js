'use strict';

var express = require('express');
var http = require('http');

var app = express();

app.use(express.static(__dirname + '/dist'));

var port = process.env.PORT || 3000;

var server = http.createServer(app);
server.listen(port, function() {
  console.log('server has started on port ' + port);
});
