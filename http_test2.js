var http = require('http');
var server = http.createServer(function(request, response){
  console.log("Request received.");
  response.writeHead(200, {'Content_type': 'text/html'});
  response.write('<h1> Hello Manny!<h1>');
  response.end();
}).listen(52273);
console.log("Server Listening on port number 52273");
