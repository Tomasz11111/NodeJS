var http = require('http'),
	fs = require('fs'),
	server = http.createServer();


fs.readFile('index.html', function(err, html) {
	if (err) throw err;
	
	server.on('request', function(request, response) {
		response.setHeader('Content-type', 'text/html; charset=utf-8') 
		if(request.method === 'GET' && request.url === '/') {
			response.write(html);
			response.end();
		}
		else {
			fs.readFile('errorimg.jpg', function(err, img) {
				if (err) throw err;
			 	response.writeHead (404, {'Content-Type': 'image/jpeg'});
				response.end(img);
			});
		}
		
	
	});
});

server.listen(8041);
