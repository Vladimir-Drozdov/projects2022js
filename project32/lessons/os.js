const os = require('os');
const cluster = require('cluster');
console.log(os.cpus().length);
console.log(cluster.isMaster);
if (cluster.isMaster) { //является ли текущий процесс главным
   
   for (let i = 0; i < os.cpus().length - 0; i++){
      
      cluster.fork(); //для каждого ядра запускаем процесс
      console.log(1);
   }
   cluster.on('exit', (worker) => {
     console.log(`Воркер с pid=${worker.process.pid} умер`)
      cluster.fork();
   })
}else {
   console.log(`Воркер с pid=${process.pid} запущен`);
   setInterval(() => {
      console.log(`Воркер с pid=${process.pid} всё еще работает`);
   }, 5000);
}
