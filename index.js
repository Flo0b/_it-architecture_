const http = require('http');
var soap = require('soap');
var fs = require('fs');

var mesServices = {
    MyService: {
	MyPort: {
	    HelloWorld: function(args) {
		return {
		    name: args.name
		}
	    }
	}
    }
};

function callback() {
    console.log('serveur lancé');
}

var wsdl = fs.readFileSync('myservice.wsdl', 'utf8');

var server = http.createServer(function(req, res) {
    res.end('404 : ' + req.url);
});

server.listen(8000);

soap.listen(server, '/wsdl', mesServices, wsdl, callback);