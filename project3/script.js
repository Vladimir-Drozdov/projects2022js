class Ed {
   r = 4;
   rr = 6;
   constructor(a, b, c) {
      this.a = a;
      this.ba = b;
      this.c = c;

   }
   e = function () {
      console.log(4);
   }
   d() {
      console.log(this.ba + this.c);
   }
   y = 9;
   print() {
      console.log(55);
   }

}

let ed = new Ed(3, 4, 5);
ed.e(); ed.d(); console.log(ed.r); console.log(ed.y); ed.print();
//Наследование
class River extends Ed {
   constructor(a, b, mark) {
      super(a, b);
      this.mark = mark;
   }
   d() {
      console.log(1);
   }
}
let river = new River(5, 6, 7, 8);
console.log(river.a); console.log(river.ba); river.d(); river.print();
//Инкапсуляция
let Ed2 = class {
   #birthYear;
   constructor(q, w, e, r) {
      this.#birthYear = q + w + e + r;
   }
   print() {
      console.log(this.#birthYear); console.log(this);
   }
}
let ed2 = new Ed2(1, 2, 3, 4);
ed2.print();
//Абстракция-класс представляет только такую инфу. которая соответствует тексту задачи,
//вовне используются лишь те св-ва, окторые собираемся использовать
//Полиморфизм-множество форм, способность метода возвращать разные значения
let edd2 = new Ed2(3, 4, 5, 6);
edd2.print();//отличается от ed2.print();
//Композиция
let flyingAbility = (obj) => { obj.fly = () => console.log(`Now I can fly`) };
flyingAbility(ed2); ed2.fly();
//static-переменные класса, а не объекта
let Ed3 = class {
   static a = 3;
   constructor(a) {
      this.a = a;
   }
   static sum(per) {
      return this.a + this.a + per.a;//this можно употреблять только с статистическими полями и методами в статистическом методе
   }
}

let ed3 = new Ed3(90);
console.log(Ed3.a); Ed3.a = 4; console.log(Ed3.a);
console.log(Ed3.sum(ed3));
//set и get-пока не понятно вернуться позже
class Person11 {
   #ageValue = 1;
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
   set age(value) {
      console.log(`Передано ${value}`);
      if (value > 0 && value < 110) this.#ageValue = value;
   }
   get age() {
      return this.#ageValue;
   }
}
const tom38 = new Person11("Tom", 37);
console.log(tom38.age);
tom38.age = -15;
console.log(tom38.age);
//объекты
function createObject(propName, propValue) {
   return {
      [propName]: propValue,
      "print"() {
         console.log(`${propName}: ${propValue}`);
      }
   };
}
let ed4 = createObject("name", 001);
console.log(ed4); ed4.print(); console.log(ed4["name"]);
//Настоящее копирование объектов
let ed5 = Object.assign({}, ed4);
console.log(ed5);
ed5.surname = "002";
console.log(ed5);
//Проверка наличия свойства. можно еще:"su" in ed5 или ed5.hasOwnProperty("su");всегда в ковычках
if (ed5.su) {
   console.log(6);
};
console.log(ed5.hasOwnProperty("print")); console.log(ed5.hasOwnProperty("surname"));
//Функции Object.entries, Object.keys, Object.values
const ed6 = {
   0: "ty",
   name: "er",
   "2": 9,
}
console.log(ed6[0]);//к ключам внутри объекта можно обращаться либо при помощи точки,
//либо при помощи [] без точки, если цифра-то можно обращаться как при помощи кавычек, так и без,
//если слово, то в []должны стоять кавычки
console.log(Object.entries(ed6));
console.log(Object.keys(ed6));
console.log(Object.values(ed6));
//Конструктор объекта
function Ed7(q, w) {
   this.q = q;
   this.w = w;
   this.print = function () {
      console.log(this);
   }

}
const ed7 = new Ed7("q", 4);
console.log(9, ed7.print());
//Проверка каким конструктором создан объект
console.log(ed7 instanceof Ed7);
//Расширение объекта prototype
Ed7.prototype.sum = function (e, r) {
   return e + r;
}
console.log(ed7.sum(7.8, 8));
//Инкапсуляция в конструкторах
function Ed8(q, w) {
   var _r = q + w;
   this.getr = function () {
      return _r;
   }
   this.setr = function (r) {
      _r = r;
   }
}
let ed8 = new Ed8(1, 3);
console.log(ed8._r);//undefined
//call и apply f.call(контекст, аргумент1, аргумент2...) Контекст-то, на какой объект ссылается this
//функции, внутри которой он вызван
function ty(t) {
   return t;
}
var result = ty.call(this, 6);
console.log(result);
var result = ty.apply(this, [8]);
console.log(result);
function ser(t) {
   return this.name + ' ' + this.surname + ' ' + t;
}

var ed9 = {
   name: "Qer",
   surname: "888",
}

console.log(ser.call(ed9, "ert"));

var o = {
   prop: 1,
}
var con = function () {
   console.log(this);
}
con.apply(o);
//Наследование
function Ed10(q, w) {
   this.name = q;
   this.surname = w;
   this.age = function () {
      return q + w;
   }
}
function Ed11(t, y, u) {
   Ed10.call(this, t, y);

}
let y = Object.create({ tr: "er", "df": 1 });
Ed10.prototype = { qui: "quy" };
let ed10 = new Ed10("rt", "io");
let ed11 = new Ed11("f", "g", "h");
console.log(ed11.name);
console.log(ed11.age());

console.log(ed10.qui);//quy
console.log(ed11.qui);//undefined
//Обмен значениями
[a, c] = [3, 4];
console.log(a);
//Оператор ?.
let ed12 = {
   "name": 0,
   1: 1,
   say: function () {
      return this.name;
   }
}
let ed13 = {
   "surname": "Ed",
   2: 7,
   sayhello: function () {
      return this.surname;
   }
}
console.log(ed12?.say());
//console.log(ed13?.say());
console.log(ed12.say?.());
console.log(ed13.say?.());