const fs = require('fs');
const path = require('path');
const http = require('http');
const express = require('express');
const app = express();
const jsonParser = express.json();
app.get("/", function (req, res) {
   res.sendFile(path.resolve(__dirname, 'static', 'index.html'));
});
app.use(express.static(path.join(__dirname, 'static')));
app.listen(3000, () => {
   console.log("Сервер начал работу");
})
app.get("/lk", function (req, res) {
   res.send({ "tt": "ff" });
})
app.post("/lk", jsonParser, function (req, res) {
      
    if(!req.body) return res.sendStatus(400);
   console.log(req.body);
    const userSend = req.body.send;
   
    let user = {send: userSend};
      
   
   // data = JSON.stringify(user);
    // перезаписываем файл с новыми данными
    //fs.writeFileSync("users.json", data);
   res.send(user);
   //res.send({ "tt": "ff" });
});
/*
http.createServer(function (req, res) {
   if (req.url === '/') {
      let read = fs.createReadStream(path.join(__dirname, '/index.html'), 'utf-8');
      read.on('data', function (chunk) {
        
         res.write(chunk);
         
                       
         res.end();
      });
   }
   if (req.url === '/mathanalys') {
      fs.readFile('./mathanalysis.html', 'utf-8', function (err, data) {
         if (err) throw err;
       
         res.write(data);
         res.end();
      });
   }
   if (req.url === '/lk') {
      fs.readFile("./lk.html", 'utf-8', function (err, data) {
         if (err) throw err;
         res.write(data);
         res.end();
      });
      req.on('data', (chunk) => {
         
         console.log(chunk.toString());
      })
   }
   
}).listen(3000, () => console.log('Сервер начал работу'));
*/






















