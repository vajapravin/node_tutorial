var express = require("express")
var app = express();

app.get('/hello.txt', function(req, res){
	res.send("Hello World");
}).listen(8080);


