const http = require("http");
const fs = require('fs');
const util = require('util');
const Emitter = require('events');
const os = require('os');
const name = require('./index');

http.createServer(function(request,response){
   fs.readFile('./index.html', 'utf-8', function (err, data) {
      response.end(data);
   });
    
     
}).listen(4000, "127.0.0.1", function(){
    console.log("Сервер начал прослушивание запросов на порту 3000");
});
console.log(os.userInfo());
console.log("global.name:" + global.name + ' ' + age);
//process.argv - передаем параметры через консоль
//process.argv[2]='Robby2';
//process.argv[3]=17;

console.log("nodePath: " + process.argv[0]);
console.log("appPath: " + process.argv[1]);
console.log(process.argv[2]);
console.log(process.argv[3]);
/*
//чтение файла
const fileread = fs.readFileSync('./index.html', 'utf-8');
//console.log(fileread);
fs.readFile('./index2.html', 'utf-8', function (err, data) {
   if (err) throw err;
   //console.log(data);
});
fs.writeFile("./hello3.html", 'hello', function (err) {
   if (err) throw err;
   let data = fs.readFileSync("./hello3.html", 'utf-8');
   console.log(data);
});
fs.appendFileSync('./index2.html', 'Helllo2');
fs.appendFile('./hello3.html', 'Heeelllooo', function (err) {
   if (err) throw err;
   fs.readFile('./hello3.html', 'utf-8', function (err) {
      if (err) throw err;
   });
})
//fs.unlinkSync('index2.html');
/*fs.unlink('hello3.html', function (err) {
   if (err) throw err;
}) */
//События
let emitter = new Emitter();
emitter.on('greet', function () {
   console.log('Hello');
});
emitter.on('greet', function () {
   console.log('Hello2');
})

emitter.emit('greet');

//util.inherits(User, Emitter);//User наследовал функционал класса Emmiter
class User extends Emitter{

}
User.prototype.say = function (data) {
   this.emit('greet2', data)
}
let user = new User();
user.on('greet2', function (data) {
   console.log(data);
});
user.say('fffff')

//streams
let writableStrem = fs.createWriteStream("index4.html");//создание потока для записи, если такого файла нет, то он создается
writableStrem.write('Hello');
writableStrem.write('1111');
writableStrem.end('esrdtfvhb');//заверешние записи
let readStream = fs.createReadStream('index4.html', 'utf-8');
readStream.on('data', function (chunk) {
   console.log('chunk:'+chunk);
});
 let writeableStream = fs.createWriteStream("hello.txt");
writeableStream.write("Привет мир!");
writeableStream.write("Продолжение записи \n");
writeableStream.end("Завершение записи");
let readableStream = fs.createReadStream("hello.txt", "utf-8");
 
readableStream.on("data", function(chunk){ 
    console.log(chunk);
});