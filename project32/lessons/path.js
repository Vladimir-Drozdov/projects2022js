const path = require('path');
console.log(path.join(__dirname, '..'));
console.log(path.resolve('first', 'second'));
const pars = path.resolve('first', 'second');
console.log(path.parse(pars));
console.log(path.basename(pars));
const ur = 'http://localhost:8000/users/ut/ttt?id=1';
const url = new URL(ur);
console.log(url)