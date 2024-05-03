//File System
const fs = require('fs');
const path = require('path');
/*fs.mkdir(path.join(__dirname, 'test'), (err) => { // созадние папка, первый аргумент-путь, второй-колбэк функция
   if (err) {
      throw err;
   }
   console.log('Папка создана')
}) */
const filepath = path.join(__dirname, 'test', 'text.txt');
fs.writeFile(filepath, 'Hello Node JS', (err) => {//создание файла, второй аргумент-содержимое файла, третий - колюэк функция
   if (err) {
      throw err;
   }
   console.log('Файл создан');
})
fs.writeFile(filepath, 'Hello again', (err) => {//создание файла, второй аргумент-содержимое файла, третий - колюэк функция
   if (err) {
      throw err;
   }
   console.log('Файл создан');
})//может перетирать файлы, но не полностью, в зависимости от длины контента
fs.appendFile(filepath, 'Hello again', (err) => {//создание файла, второй аргумент-содержимое файла, третий - колюэк функция
   if (err) {
      throw err;
   }
   console.log('Файл изменен');
})//добывляет контент файлу в конец
fs.readFile(filepath, (err, content) => {
   if(err) {
      throw err;
   }
   console.log('Контент: ',content.toString());//олучаем буфер, нужно добавить toString(), чтобы получить сожержимое файла
});
//или
fs.readFile(filepath,'utf-8', (err, content) => {
   if(err) {
      throw err;
   }
   console.log('Контент: ',content)
});
