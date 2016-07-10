var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(requset, response){
	response.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
	var user = Date.now();

	socket.on('message.sent', function (message) {
		io.emit('message', user + ':' + message);
		console.log(user + ':' + message);
	});

	io.emit('message', 'User ' + user + ' connected');
});

http.listen(3000, function () {
	console.log('Server is up Sir');
});
