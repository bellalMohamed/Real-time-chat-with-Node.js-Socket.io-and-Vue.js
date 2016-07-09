var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(requset, response){
	response.sendFile(__dirname + '/index.html');
})

http.listen(3000, function () {
	console.log('hai :D');
});
