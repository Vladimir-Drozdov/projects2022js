const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('anything', (data) =>{
   console.log(`on anything ${data}`)
})
emitter.emit('anything', {a: 1});
emitter.emit('anything', 2);
class Dispatcher extends EventEmitter{
   subscribe(eventName,cb) {
      console.log('Subscribe');
      this.on(eventName,cb);
   }
   dispatch(eventName, data) {
      console.log('Dispatching...')
      this.emit(eventName, data)
   }
}
const dis = new Dispatcher();
dis.subscribe('aa', dat => {
   console.log('on aa:', dat)
})
dis.dispatch('aa', 'fff');