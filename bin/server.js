var app = require('../app')
var io = require('../io');
var server = require('http').createServer(app);

var port = process.env.PORT || 8080;

server.listen(port)
io.attach(server);

console.log('Magic happens on port ' + port);
