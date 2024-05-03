const Emitter = require('events');

const emitter = new Emitter();
const callback=(data, second, third) => {
   console.log(data);
   console.log(second);
   console.log(third);
}
emitter.on('message', callback);
//emitter.removeAllListeners();//удалить все события
//emitter.removeListener('message', callback);//удаляет конкретное события работает только с коллбэком
const MESSAGE = process.env.message || '1';             
if (MESSAGE) {
   emitter.emit('message', MESSAGE, 123);
}
