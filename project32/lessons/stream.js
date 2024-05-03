const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'text.txt'), (err, data) => {
   if (err) {
      console.log(err);
   }
   console.log(data);
})

const stream=fs.createReadStream(path.join(__dirname,'text.txt'))
stream.on('data', chunk => {
   console.log(chunk);//один чанк по дефолту 64 килобайта
})
stream.on('end', () => {
   console.log('Закончили чтение');//один чанк по дефолту 64 килобайта
})
stream.on('error', (err) => {
   console.log('err');//один чанк по дефолту 64 килобайта
})

const writableStream = fs.createWriteStream(path.resolve(__dirname, 'text2.txt'))
for (let i = 0; i <= 20; i++){
   writableStream.write(i + '\n');
}
writableStream.end();

const http = require('http');
http.createServer((req, res) => {
   const stream = fs.createReadStream(path.resolve(__dirname, 'text2.txt'))
   stream.pipe(res);
})