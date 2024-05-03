const colors = require('colors');
function requestTime(req, res, next) {
   req.requestTime = Date.now();

   next();//после того как завершили работу в этом middleware вызываем next()
   //эта функция говорит что теперь идем к следующему middleware
};
function logger(req, res, next) { 
   console.log(colors.bgGreen.black(`Req.time ${req.requestTime}`))
   next();
};
module.exports = [requestTime, logger];