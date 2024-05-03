const http = require('http');
const EventEmitter=require('events')
module.exports = class Application {
   constructor() {
      this.emitter = new EventEmitter();
      this.server = this._createServer();
      this.middlewares=[]
   }
   use(middleware) {
      this.middlewares.push(middleware);
   }
   listen(port, callback) {
      this.server.listen(port, callback);
   }
   addRouter(router) {
      Object.keys(router.endpoints).forEach(path => {
         const endpoint = router.endpoints[path];
         Object.keys(endpoint).forEach((method) => {
            const handler = endpoint[method];
            console.log(11, handler.toString());
             this.emitter.on(this._getRouteMask(path, method), (req, res) => {
               
                this.middlewares.forEach(middleware => middleware(req, res));
                handler(req, res);
                console.log(2, this._getRouteMask(path, method), handler.toString());
            })
         })
      })
   }
   _createServer() {
      return http.createServer((req, res) => {
         let body = "";
         req.on('data', (chunk) => {
            body += chunk;
            console.log(chunk);
         })
         req.on('end', () => {
            if (body) {
               req.body = JSON.parse(body);
            }
            const emitted = this.emitter.emit(this._getRouteMask(req.url, req.method), req, res);
            if (!emitted) {
               res.end(req.url);
            }
         })
         
      })
   }
   _getRouteMask(path,method) {
      return `[${path}]:[${method}]`
   }
}