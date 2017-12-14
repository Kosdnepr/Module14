var http = require('http');

var app = http.createServer(function(req, res) {
	
	if(req.url === '/about') {
		res.write('<p>Request data is outputed to the console</p>');
		console.log(req);
		res.end();
	} else if (req.url === '/stop') {
		res.write('<p>Server stopped</p>');
		app.close();
		res.end();
	} else {
		res.write('<h1>Welcome on board</h1>');
		res.end();
	}
});
app.listen(3000, function() {
	console.log('Server on localhost:3000');
});