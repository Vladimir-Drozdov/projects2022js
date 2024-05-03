const express = require('express');
const path = require('path');
const PORT = process.env.PORT ?? 3000;
const app = express();//инициализация веб-сервера
const requestTime = require('./middlewares.js');
const serverRoutes=require('./routes/servers.js')

app.set('view engine', 'ejs');//устанавливаем переменной 'view engine' значение 'ejs'
app.set('views', path.resolve(__dirname, 'ejs'));
console.log(app.get('views'));//путь до папки


app.use(express.static(path.resolve(__dirname, 'static')));//в таком
//случае get не нужны, в ссылку нужно лишь передать имя файла,сюда
//можно в эту папку static пожно передавать css и js и картинки и их будет понимать
console.log("requestTime", requestTime[1]);
app.use(requestTime[0]);//используем middleware
app.use(requestTime[1]);
app.use(serverRoutes);
app.get('/', (req, res) => {
   res.render('index', {
      title: 'Main Page'
   });
});
app.get('/features', (req, res) => {
   res.render('features', {
      title:'features Page'
   });
})

/*
app.get('/', (req, res) => {//обрабатываем ссылку /
   //res.send('<h1>Hello express</h1>')
   res.sendFile(path.resolve(__dirname, 'static', 'index.html'));
});
app.get('/features', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'static', 'features.html'));
})
*/
app.get('/download', (req, res) => {
   //console.log(req.requestTime);
   res.download(path.resolve(__dirname, 'static','demo', 'index.html'));//передаем путь к фалу
   //который нужно скачать
})

app.listen(PORT, () => {
 
   console.log(`Server has been started on ${PORT}...`)
});//запуск 