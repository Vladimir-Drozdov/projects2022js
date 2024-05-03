const http = require('http');
const fs = require('fs');
console.log(1);
http.createServer(function (request, response) {
   if (request.url === '/') {
         let read = fs.createReadStream('index.html', 'utf-8');
         read.on('data', function (chunk) {
         response.setHeader("Content-Type", "text/html; charset=utf-8;");
         console.log(chunk);
         response.write(chunk);
        
         console.log("Все заголовки:")
         console.log(request.headers);
         console.log("метод:" + request.method);
         console.log("url:" + request.url);
         
      })
   } else if (request.url === '/set') {
      response.write('11111');
      
   } else if (request.url === '/rest') {
      response.statusCode = 302;//Переадресация
      response.setHeader("Location", "/newpage");
   } else if(request.url === "/newpage"){
        response.write("New address");
   } else {
      response.statusCode = 404;
      response.write('Not Found');
   }
   response.end();
}).listen(3000, function () {
   console.log('Сервер начал работу');
});





