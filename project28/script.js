class Red{
   constructor(a, b, c) {
      this.re = a;
      this.re2 = b;
      this.re3 = c;
   }
   re4 = 5;
   re5 = 6;
   say() {
      console.log(689)
   }
   static re6 = 'fr0';
   static hello() {
      console.log('hi');
   }
   static thi() { return new this(1,2,3) };
}
const black = new Red('t', 'tt', 'ttt');
console.log(black);
console.log(black.re4);
console.log(black.re5);
Red.hello();
console.log(Red.re6);
let gu = Red.thi();
console.log(gu);
//Функция-конструктор
console.log(4);
const Constr = function (first,second) {
   this.first = first;
   this.second = second;
}
Constr.prototype.write = function () {
   console.log(333);
}
const ex = new Constr('tt', 'yy');
console.log(ex);
console.log(1);
console.log(parseInt(`111ABCDEFG`, 16));

//this,bind,apply,call
const Obj = {
   name: 1,
    he(){
       console.log(this.name);
   }
}
const obj2 = {
   name:2
}
Obj.he.bind(this)();
//////
const button = document.querySelector('button');

class AboutButton{
   constructor(elem) {
      this.elem =elem;
   }
   setListener() {
      
      this.elem.addEventListener('click', this.onButton)
   }
   onButton(){
      //e.preventDefault();
      console.log(1);
   }
  
}

const but = new AboutButton(button);
but.setListener();
class Ed{
   #tt;
   constructor(first2,second){
      this.first = first2;
      this.second = second;
   }
   say() {
      console.log(5);
   }
}
class Ed2 extends Ed{
   #rr;
   constructor(first, second) {
      super(first, second);   
   }
   fun() {
      super.say();
   }
   set rr(rr) {
      this.#rr = rr;
   }
   get rr2() {
      return this.#rr;
   }
}
const ed3 = new Ed2(1,2); ed3.fun();
ed3.rr = 4; console.log(ed3.rr2); console.log(ed3.first);







