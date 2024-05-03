const a = 3;
const b = 4;
const c = 5;
console.log(Array.of(a, b, c));
const t = Array.of(a, b, c);
for (const value of t) {
   continue;
   console.log(value);

}
const r = {
   t: 3,
   get lev() {
      return this.t;
   },
   level() {
      return this.t;
   },
   set lev2(newt) {
      this.t = newt;
   }
}
console.log(r.lev, r.level());
r.lev2 = 4;
console.log(r.lev, r.level(), r.t);

const plenty = new Set([3, 4, 5, 'nape']);
console.log(plenty);
console.log(plenty.has(3));//true
const weak = new WeakSet();
const obj = { tt: 4 };
weak.add(obj);
console.log(weak.has(obj));
//Map
const obj2 = { ed: 17 };
const mass = [1, 2, 3];
const te = 'rtfgh';
const re = 7;
const map = new Map([[obj2, mass], [te, re]]);
for (let value of map) {
   console.log(`${value[0].ed} и ${value[1][0]}`);
}
///
const r2 = (a,b,c) => {
   return Math.floor(Math.random() * (Math.max(a, b, c)));
}
const jj = {
   [r2(3,4,5)]:5,
}
console.log(jj); console.log(r2(7, 8, 90));
const ob = {
   t: '5555',
   tt: 666,
   tt2() {
      return 1;
   }
}
for (let key of Object.keys(ob)) {
   console.log(typeof ob[key]);
}
const ma = [1, 2, 3];
for (let key of ma.keys()) {
   console.log(key);
}
Object.prototype.er2 = [3, 4, 5];
console.log(ob.hasOwnProperty('t'));
console.log(ob.hasOwnProperty('er'));
delete ob.t;
console.log(ob.t);

const odfge = Object.fromEntries([[1, 2], ['t', 6]]);
console.log(odfge);
console.log(Object.entries(ob));