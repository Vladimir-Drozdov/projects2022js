const path = require('path');
const fs = require('fs');
const http = require('http');
console.log(__dirname);
const server = http.createServer((req, res) => {
   const filepath = path.join(__dirname, 'public', 'index.html');
   fs.writeFile(filepath, '<h1>TTT</h1>', err => {
      if (err) {
         throw err;
      }
   });
   if (req.url === '/') {
      fs.readFile(path.join(__dirname, 'public', 'index.html'), (err,data) => {
         if (err) {
            throw err;
         }
         res.end(data);
      })
   } else if (req.url === '/contain.html') {
      fs.readFile(path.join(__dirname, 'public', 'contain.html'), (err,data) => {
         if (err) {
            throw err;
         }
         res.end(data);
      })
   }else if (req.url === '/contain2.html') {
      fs.readFile(path.join(__dirname, 'public', 'contain2.html'), (err,data) => {
         if (err) {
            throw err;
         }
         res.end(data);
      })
   }
});
server.listen(3000, () => {
   console.log('сервер3 создан')
})
