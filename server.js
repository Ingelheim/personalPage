var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 8080;
var _ = require('lodash');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/views/index.html');
});

console.log("listening onf " + port)
server.listen(port);
