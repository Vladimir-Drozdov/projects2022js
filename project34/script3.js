const fs = require('fs');
const path = require('path');
const stream = fs.createReadStream(path.join(__dirname, 'hello.txt'), 'utf-8')
stream.on('data', chunk => {
   console.log(chunk);//один чанк по дефолту 64 килобайта
})
stream.on('end', () => {
   console.log('Закончили чтение');//один чанк по дефолту 64 килобайта
})
stream.on('error', (err) => {
   console.log('err');//один чанк по дефолту 64 килобайта
})

/*const writableStream = fs.createWriteStream(path.resolve(__dirname, 'text2.txt'))
for (let i = 0; i <= 20; i++){
   writableStream.write(i + '\n');
}
writableStream.end();
*/

let stream2 = fs.createReadStream(path.resolve(__dirname, 'text2.txt'), 'utf-8')

stream2.on('data', function (chunk) {
   console.log(chunk);
})