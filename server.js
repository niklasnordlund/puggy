var express = require('express');

var app  = express();
var http = require('http').Server(app);
var io   = require('socket.io')(http);

app.use(express.static(__dirname + '/src'));
app.use(express.static(__dirname + '/build'));

app.get('/slot', function (request, response) {
  response.sendFile(__dirname + '/src/slot.html');
});

app.get('/lever', function (request, response) {
  response.sendFile(__dirname + '/src/lever.html');
});

io.on('connection', function (socket) {
  socket.on('lever-pulled', function () {
    socket.broadcast.emit('lever-pulled');
  });
});

http.listen(3000, function () {
  console.log('slot machine listening on port 3000');
});