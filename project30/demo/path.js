const path = require('path');
//метолы файла
console.log('Название файла: ', path.basename(__filename));
console.log('Название директории: ', path.dirname(__filename));
console.log('Расширение файла: ', path.extname(__filename));
console.log('Parse: ', path.parse(__filename));//выдаст параметры данного файла
console.log('Имя файла: ', path.parse(__filename).name);//выдаст имя файла
console.log(path.join(__dirname, 'server', 'index.html'));//получаем путь к файлу