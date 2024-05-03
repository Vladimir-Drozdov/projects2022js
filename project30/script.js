
const http = require('http');
const r = require('./data.js');
const fs = require('fs');
const path = require('path');
const chalk = require("chalk");
console.log(__dirname);//описывает путь до текущий папки
console.log(__filename);//описывает путь до текущего файла
console.log(chalk.blue('Hello')); 
console.log(r);
const server = http.createServer((req, res) => {
   
  /* console.log(req.url);//url от request
   if (req.url === '/') {
      fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
         if (err) {
            throw err;
         }
         res.writeHead(200, {
            'Content-Type': 'text/html'
         })
         res.end(data);
      });
   } else
      if (req.url === '/contact') {
      fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
         if (err) {
            throw err;
         }
         res.writeHead(200, {
            'Content-Type': 'text/html'
         })
         res.end(data);
      });
   }
   else {
      res.end('<h1>Hello nodejs!</h1>')
   }
   */
   let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
   console.log(1, filePath);
   fs.readFile(filePath, (err, content) => {
      if (err) {
         console.log(1);
         fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
            if (err) {
               res.writeHead(500);
               res.end('Error');
            } else {
               res.writeHead(200, {
                  'Content-Type': 'text/html'
               })
               res.end(data);
               
            }
         })
         console.log(req.method);
      } else {
         res.writeHead(200, {
            'Content-Type':'text/html'
         })
         res.end(content);
      }
   })
   
})
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {//первый параметр порт, второй колбэк, где будет инфа после запуска сервера
   console.log('server has been started on', PORT);
});