import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();
document.write("<h2>Первая программа на JavaScript</h2>");
var sum = 2 + 5;
document.write("2 + 5 =");
document.write(sum);
console.log(sum);
//alert("Привет мир");
var username = "Edward";
var userName;//Две разные переменные
console.log("username после изменения:", username);
const username2 = 3;//Переменную const обязательно инициализировать сразу же
document.write("</br>");
document.write(0.1 + 0.2);
document.write("</br>");
let num = 999999999999999999999n;
document.write(num + 3n);
let r = BigInt("88888888888888888888888888");
document.write("</br>");
document.write(r);
let company = "Бюро \"Рога и копыта\"";
document.write("</br>");
document.write(company);
document.write("</br>");
let a1 = "Tom";
let a2 = `Name: ${a1}`;
document.write(a2); document.write("</br>");
document.write(typeof a1); document.write("</br>");
//Тернарная опреация
const a = 1;
const b = 2;
const result = a < b ? a : b;
console.log(result); // 1
//Преобразование переменных
let a3 = 4;
let a4 = String(a3);
let a5 = "6";
document.write("</br>");
document.write(a4);
document.write("</br>");
document.write(parseInt(a5) + 8); document.write("</br>");
let a6 = "45hello67";
document.write(parseInt(a6));
let a7 = 9.456; document.write("</br>");
document.write(parseFloat(a7));
let num1 = "javascript";
let num2 = "22";
let result2 = isNaN(num1);
console.log(result2); // true - num1 не является числом

result2 = isNaN(num2);
console.log(result2); //  false - num2 - это число
//Преобразование в другой системе исчисления
let num3 = "110";
let num4 = parseInt(num3, 2);
console.log(num4); // 6
//Массивы
const people = ["Tom", "Alice", "Sam"];
console.log(people);    // ["Tom", "Alice", "Sam"];
console.log(people[2]);
people[2] = "Edward";
console.log(people[2]);
people[3] = "Edward";
console.log(people);
people[4] = "Edward";
console.log(people);
const numbers2 = [[0, 1, 2], [3, 4, 5]];
console.log(numbers2);
console.log(numbers2[0][1]);
const people2 = [
   ["Tom", 25, false],
   ["Bill", 38, true],
   ["Alice", 21, false]
];

console.log(people2[0]); // ["Tom", 25, false]
console.log(people2[1]); // ["Bill", 38, true]
people2[3] = ["Edward", 20, false];
console.log(people2);
//Условные конструкции
//Проверка наличия значения
let myVar = 89;
document.write("</br>");
if (myVar) {
   document.write(`Переменная myVar имеет значение: ${myVar}`);// сработает код внутри если не 0, '' , null, undefined
}

//Конструкция switch..case
const income = 300;
switch (income) {

   case 100:
      console.log("Доход равен 100");
      break;
   case 200:
      console.log("Доход равен 200");
      break;
   case 300:
      console.log("Доход равен 300");
      break;
   default:
      console.log("Доход неизвестной величины");
      break;
}
//Циклы for, for..in, for..of, while, do..while
//Применение нескольких счетчиков в цикле
for (let i = 1, j = 1; i < 5, j < 4; i++, j++) {

   console.log(i + j);
}
// 1 итерация: i=1, j=1; i + j = 2
// 2 итерация: i=2, j=2; i + j = 4
// 3 итерация: i=3, j=3; i + j = 6
//цикл while
let i = 1;
while (i <= 5) {

   console.log(i);
   i++;
}
//цикл do..while
let i1 = 1;
do {
   console.log(i1);
   i1++;
} while (i1 <= 5)
//Операторы continue и breaks
for (let i = 1; i <= 10; i++) {

   if (i === 6) break;
   console.log(i);
}
console.log("Конец работы");
// пропускаем итерацию, но не выходим из цикла:
for (let i = 1; i <= 10; i++) {

   if (i === 6) continue;
   console.log(i);
}
console.log("Конец работы");
//for..in - для обработки объектов(точнее его свойств)
const person = { name: "Tom", age: 37 };
for (let prop in person) {
   console.log(prop);
}
//Цикл for...of - для перебора наборов данных.
const website = "METANIT.COM";
for (let ch of website) {

   console.log(ch);
}
let a10 = [3, 4, 5];
for (let ch of a10) {
   console.log(ch);//3 4 5
}
let a11 = [3, 4, 5];
for (let ch in a11) {
   console.log(ch);//0 1 2
}
//Функции
// определение функции
function hello() {
   console.log("Hello from Metanit.com");
}
// передача константе message ссылки на функцию hello
const message = hello;
message();  // вызываем функцию, ссылка на которую хранится в константе message
//Анонимные функции
let message2 = function () {
   console.log("Hello JavaScript");
}
message2();

function sum2(x, y) {

   // y = 5;
   // x = 8;
   const z = x + y;
   console.log(z);
}
sum2();          // NaN
sum2(6);         // NaN
sum2(6, 4);       // 10

function sum3(x = 8, y = 10 + x) {

   const z = x + y;
   console.log(z);


}
sum3();      // 26
sum3(6);     // 22
sum3(6, 4)   // 10

//Массив arguments
function sum4() {
   let result = 0;
   for (const n of arguments)
      result += n;
   console.log(result);
}
sum4(6);             // 6
sum4(6, 4)           // 10
sum4(6, 4, 5)        // 15
//Параметр ... С помощью оператора ... (многоточие) мы можем указать, что с помощью параметра можно передать переменное количество значений
function display(season, ...temps) {
   console.log(season);
   for (let index in temps) {
      console.log(temps[index]);
   }
}
display("Весна", -2, -3, 4, 2, 5);
display("Лето", 20, 23, 31);
//Функции в качестве параметров
function sum5(x, y) {
   return x + y;
}

function subtract(x, y) {
   return x - y;
}

function operation(x, y, func) {

   const result = func(x, y);
   console.log(result);
}

console.log("Sum");
operation(10, 6, sum5);  // 16

console.log("Subtract");
operation(10, 6, subtract); // 4

//Возвращение функции из функции
function menu(n) {

   if (n == 1) return function (x, y) { return x + y; }
   else if (n == 2) return function (x, y) { return x - y; }
   else if (n == 3) return function (x, y) { return x * y; }
   return function () { return 0; } //или sum5 без скобок
}

const action = menu(4);         // выбираем первый пункт - сложение
const result3 = action(2, 5);    // выполняем функцию и получаем результат в константу result
console.log(result3);

//Переменную var можно использовать вне блока, let и const - нет
//let - уровень блока кода, var - уровень функции
/*//Необъявленные переменные - это глобальные переменные , режим "use strict" это делать не дает

function bar() {
   foo = "25";
}
bar();
//const y = bar();
console.log(foo);   // 25 */
//Замыкание функций
function outer() {
   let x = 5;
   function inner() {
      x++;
      console.log(x);
   };
   return inner;
}
let fn = outer();//let fn = inner;     // fn = inner, так как функция outer возвращает функцию inner
// вызываем внутреннюю функцию inner
fn();   // 6
fn();   // 7
fn();   // 8
function a14(x, y) {
   console.log(`${x + y}`);
}
let a15 = a14(3, 4);
console.log(a15);//undefined
let a16 = a14;
a16(4, 5);
//Самовызывающиеся функции
(function () {
   console.log("Привет мир");
}());

(function (n) {

   var result = 1;
   for (var i = 1; i <= n; i++)
      result *= i;
   console.log("Факториал числа " + n + " равен " + result);
}(4));
//Паттерн Модуль
let foo = (function () {
   let obj = { greeting: "hello" };

   return {
      display: function () {
         console.log(obj.greeting);
      }
   }
})();
foo.display();  // hello

let calculator = (function () {
   let data = { number: 0 };

   return {
      sum: function (n) {
         data.number += n;
      },
      subtract: function (n) {
         data.number -= n;
      },
      display: function () {
         console.log("Result: ", data.number);
      }
   }
})();
calculator.sum(10);
calculator.sum(3);
calculator.display();   // Result: 13
calculator.subtract(4);
calculator.display();   // Result: 9

let m = (function () {
   let r = 0;
   return {
      a16: function () {
         document.write("</br>");
         document.write(r);

         console.log(r);
      },
      a17: function (n) {
         r = r ** n;
      },
      a18: function () {
         r++;
      }
   }
})();
m.a16();
m.a18();
m.a18();
m.a17(3);
m.a16();
//Переопределение функций
function display2() {
   console.log("Доброе утро");
   display2 = function () {
      console.log("Добрый день");
   }
}

display2(); // Доброе утро
display2(); // Добрый день
function display3() {
   console.log("Доброе утро");
   display3 = function () {
      console.log("Добрый день");
   }
}
// присвоение ссылки на функцию до переопределения
var displayMessage = display3;
display3(); // Доброе утро
var displayMessage2 = display3;
display3(); // Добрый день
displayMessage(); // Доброе утро
displayMessage(); // Доброе утро
displayMessage2();// Добрый день

//Hoisting

console.log(foo4);   // undefined
var foo4 = "Tom";
display5();//Функция работает

function display5() {
   console.log("Hello Hoisting");
}
//Передача параметров по значению и по ссылке, функция получает копию числа, но ссылку, если это объект или массив

function change(x) {
   x = 2 * x;
   console.log("x in change:", x);
}

var n = 10;
console.log("n before change:", n); // n before change: 10
change(n);                          // x in change: 20
console.log("n after change:", n);  // n after change: 10

function change2(user) {
   user.name = "Tom";
}

var bob = {
   name: "Bob"
};
console.log("before change:", bob.name);    // Bob
change2(bob);
console.log("after change:", bob.name);     // Tom

function change3(array) {
   array[0] = 8;
}
function changeFull(array) {
   array = [9, 8, 7];
}

var numbers = [1, 2, 3];

console.log("before change:", numbers);     // [1, 2, 3]
change3(numbers);
console.log("after change:", numbers);      // [8, 2, 3]
changeFull(numbers);//Если передать весь массив, то он не изменится
console.log("after changeFull:", numbers);  // [8, 2, 3]
//Стрелочные функци
let user = (userName, userAge) => ({ name: userName, age: userAge });

let tom = user("Tom", 34);
let bob2 = user("Bob", 25);

console.log(tom.name, tom.age);     // "Tom", 34
console.log(bob.name, bob2.age);     // "Bob", 25
//Стрелочная Функция из нескольких инструкций
const square = n => {
   let result = n * n;
   console.log(result);
}

square(5);     // 25
square(6);     // 36