console.log(process.pid);
const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.PORT);
console.log(process.env.NODE_ENV);
console.log(process.argv);
if (Math.random() >= .3) {
   console.log('Выполнение программы завершено');
   process.exit();
   console.log('Выполнение программы завершено2');
}