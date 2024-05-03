const http = require('http');
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
   res.writeHead(200, {
      'Content-Type':'text/html; charset=utf-8'
   })
   res.end('Сервер стартовал2');//добавляем контент на сервер, адрес на сервере
})
server.listen(PORT, () => console.log(`Сервер начал работу на порту ${PORT}`));




