const fs = require('fs');
//streams
/*let writableStrem = fs.createWriteStream("index4.html");//создание потока для записи, если такого файла нет, то он создается
writableStrem.write("Hello");
writableStrem.write("1111");
writableStrem.end("esrdtfvhb");//заверешние записи */
let readStream = fs.createReadStream("index4.html", "utf-8");
readStream.on("data", function (chunk) {
   console.log("chunk:"+chunk);
});
/* let writeableStream = fs.createWriteStream("hello.txt");
writeableStream.write("Привет мир!");
writeableStream.write("Продолжение записи \n");
writeableStream.end("Завершение записи");*/
let readableStream = fs.createReadStream("hello.txt", "utf-8");
 
readableStream.on("data", function(chunk){ 
   console.log(chunk);
});

let read = fs.createReadStream("hello3.html");
let write = fs.createWriteStream("hello4.html");
/*read.on('data', function (chunk) {
   write.write(chunk);
});*///копирование данных из одного файла в другой
read.pipe(write);//копирование данных из одного файла в другой



