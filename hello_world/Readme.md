Create NodeWebApp using express

1] Check npm express version using
	
	npm info express version

2] create version.json file in project_dir/

	mkdir HelloWorld
	cd HelloWorld
	vi package.json
	
	Paste following code into package.json
	----------------------------------------
	{
		"name": "hello-world",
		"description": "Hello World Test App",
		"version": "0.0.1",
		"private": true,
		"dependencies": {
			"express": "4.1.1"
		}
	}

3] sudo npm install

	above command will create following dir 

	node_modules

4] make app.js or server.js in current proj dir
	
	vi server.js
	----------------------------------------
	var express = require("express")
	var app = express();

	app.get('/hello.txt', function(req, res){
		res.send("Hello World");
	}).listen(8080);

5] Start server using
	
	node server.js

6] open http://localhost:8080/hello.txt


