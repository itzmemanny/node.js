var http = require('http');

var http = require('http');
var server = http.createServer(function(request, response){
  response.writeHead(200, {'Content_type': 'text/html'});
  response.end('<h1> Hello Dalkom IT!<h1>');
});
server.listen(52273, function(){
  console.log("Server Listening on port number 52273");
});
