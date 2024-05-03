const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
   console.log(`Запрошенный адрес: ${req.url}`);
   fs.readFile('index5.html','utf-8', function (err, data2) {
      data2 = data2.replace("{message}", "1111").replace("{p}", "Rob");
         res.write(data2);
         
      if (err) {
         console.log(err);
      }
   });
   if (req.url === "/user") {
      
        let data = "";
        req.on("data", chunk => {
           data += chunk;
           
        });
      
        req.on("end", () => {
           console.log("data:"+data);
           res.write(JSON.stringify(data));
           res.end("Data is given");
        }); 
     /* for (let chunk of req) {
         data += chunk;

      } 
      console.log("data:" + data);
      res.write("Data is given"); */
      
    } 
   
   const filepath = req.url.substr(1);
   let read2 = fs.createReadStream('index.html');
   let read = fs.createReadStream(filepath, 'utf-8');
   read.on('error', function () {
      res.statusCode = 404;
      read2.pipe(res);
   })
   read.pipe(res); 
   
}).listen(3000, function () {
   console.log('server started working');
});











