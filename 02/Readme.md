Using express(1) to generate an app

The Express team maintains a handy quickstart project generator aptly named express(1). If you install express-generator globally with npm you'll have it available from anywhere on your machine:

	$ npm install -g express-generator

This tool provides a simple way to get an application skeleton going, but has limited scope, for example it supports only a few template engines, whereas Express itself supports virtually any template engine built for node. Be sure to check out the --help:

	Usage: express [options]

	Options:

	  -h, --help          output usage information
	  -V, --version       output the version number
	  -e, --ejs           add ejs engine support (defaults to jade)
	  -H, --hogan         add hogan.js engine support
	  -c, --css   add stylesheet  support (less|stylus|compass) (defaults to plain css)
	  -f, --force         force on non-empty directory

If you want to generate an application with Jade and Stylus support you would simply execute:

	$ express --css stylus myapp

	$ cd myapp && npm install

	$ npm start

