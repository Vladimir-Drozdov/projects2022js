const EventEmitter = require('events');
const http = require('http');
const PORT = process.env.PORT || 5000;

const emitter = new EventEmitter();
const Router = require('../framework/router.js');
const Application=require('../framework/application.js')
const application = new Application();
const jsonParser = require('../framework/parseJson');
const router = new Router();
const userRouter = require('../src/user-router');
/*router.get('/users', (req, res) => {
   res.end('YOU SEND REQUEST TO /USERS')
});
router.get('/posts', (req, res) => {
   res.end('YOU SEND REQUEST TO /POSTS')
});*/
application.use(jsonParser);
application.addRouter(userRouter);
/*const server = http.createServer((req, res) => {
   console.log('sdf')
   const emitted = emitter.emit(`[${req.url}]:[${req.method}]`, req, res);
   console.log(111,`[${req.url}]:[${req.method}]`);
   if (!emitted) {
      res.end(req.url);
   }
  /* res.writeHead(200, {
      //'Content-Type':'text/html; charset=utf-8'
      'Content-Type': 'application/json',
   })
   if (req.url === '/') {
      //res.end(req.url);//добавляем контент на сервер, req.url-адрес на сервере
      res.end(JSON.stringify([{
         tt: 2,
         ttt:'ttt',
      }]))
   }
   if (req.url === '/as') {
      res.end('sdrxtfhc');//добавляем контент на сервер, req.url-адрес на сервере
   } */
//}) 
application.listen(PORT, () => console.log(`Сервер начал работу на порту ${PORT}`));




