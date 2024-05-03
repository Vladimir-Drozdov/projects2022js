const fs = require('fs');
const path = require('path');
fs.mkdir(path.resolve('first'), (err) => {
   if (err) {
      console.log(err);
   }
   console.log('Папка создана');
});
console.log(1);
fs.rmdir(path.resolve('first'), err => {
   if (err) {
      console.log(err);
   }
   console.log('Папка удалена');
});
fs.writeFile(path.join(__dirname, 'text.txt'), '1111', (err) => {
   if (err) {
      console.log(err);

   }
   console.log('Файл создан')
})
const writeFileAsync = async (path, data) => {
   return new Promise((resolve, reject) => {
      fs.writeFile(path, data, (err) => {
         if (err) {
            return reject(err);
         }
         resolve();
      })
   })
}
const appnedFileAsync = async (path, data) => {
   return new Promise((resolve, reject) => {
      fs.appendFile(path, data, (err) => {
         if (err) {
            return reject(err);
         }
         resolve();
      })
   })
}
const readFileAsync = async (path) => {
   return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf-8', (err, data) => {
         if (err) {
            return reject(err);
         }
         resolve(data);
      })
   })
}
const removeFileAsync = async (path) => {
   return new Promise((resolve, reject) => {
      fs.rm(path, (err) => {
         if (err) {
            return reject(err);
         }
         resolve();
      })
   })
}
/*writeFileAsync(path.join(__dirname, 'second.txt'), '123')
   .then(() => appnedFileAsync(path.join(__dirname, 'second.txt'), '123'))
   .then(() => appnedFileAsync(path.join(__dirname, 'second.txt'), '123456'))
   .then(() => readFileAsync(path.join(__dirname, 'second.txt')))
   .then((data) => console.log(data))
   .then(() => removeFileAsync(path.join(__dirname, "second.txt")))
   .catch(err => console.log(err));
*/

const text = process.env.TEXT || '';

writeFileAsync(path.join(__dirname, 'text.txt'),text)
   .then(() => readFileAsync(path.join(__dirname, 'text.txt')))
   .then((data) => (data.split('').length))
   .then((count) => writeFileAsync(path.join(__dirname, 'count.txt'), `Количество ${count}`))
   .then(() => readFileAsync(path.join(__dirname, 'count.txt')))
   .then((data)=>console.log(data))
