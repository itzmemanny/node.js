var http = require('http');
var url = require('url');
var fs = require('fs');


//서버 생성
var server = http.createServer(function (req, res) {
  // URL 뒤에 있는 디렉토리/파일이름 파싱
  var pathname = url.parse(req.url).pathname;

  console.log('Request for ' + pathname + ' Received.');

  //파일 이름이 비어있다면 index.html 로 설정
  if(pathname == '/'){
    pathname = '/index.html';
  }

  // 파일 읽기
  fs.readfile(pathname.substr(1), function(err, data) {
    if(err) {
      console.log(err);
      // 페이지 찾을 수 없음
      // HTTP status : 404 : NOT FOUND
      // Content Type: text/plain
      res.writeHead(404, {'Content-Type': 'text/html'});

    } else {
         // 페이지를 찾음
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         res.writeHead(200, {'Content-Type': 'text/html'});

         // 파일을 읽어와서 responseBody 에 작성
         res.write(data.toString());
    }
    //responseBody 전송
    res.end();
  });
}).listen(8081);

console.log('Server running at http://localhost:8081/');
