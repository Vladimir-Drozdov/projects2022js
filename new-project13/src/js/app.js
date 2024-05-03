import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();
//ООП

let user = new Object();
user["name"] = "Tom";
user["age"] = 26;
user["display"] = function () {

   console.log(user.name);
   console.log(user.age);
};

// вызов метода
user["display"]();
let user2 = {
   name: "Tom",
   age: 26
};
user2.name = "Edward";
user2.age = "18";
let name = "Tom";
let age = 34;
let user3 = { name, age };

let teacher = { user3, course: "JavaScript" };
console.log(teacher.user3);      // {name: "Tom", age: 34}
console.log(teacher.course);    // JavaScript
user3.display = function () {

   console.log(user3.name);
   console.log(this.age);
};
user3.display();
let user5 = {
   name: "Tom",
   age: 26,
   "full name": "Tom Johns",
   "display info": function () {

      console.log(user.name);
      console.log(user.age);
   }
};
console.log(user5["full name"]);
user5["display info"]();
//Динамическое определение имен свойств и методов
const prop1 = "name";
const prop2 = "age";
let tom = {
   [prop1]: "Tom",
   [prop2]: 37
};
console.log(tom);           // {name: "Tom", age: 37}
console.log(tom.name);      // Tom
console.log(tom["age"]);    // 37
function createObject(propName, propValue) {
   return {
      [propName]: propValue,
      print() {
         console.log(`${propName}: ${propValue}`);
      }
   };
}
let person = createObject("name", "Tom");
person.print();     // name: Tom

let book = createObject("title", "JavaScript Reference");
book.print();   // title: JavaScript Reference
//Удаление
delete person.name;
console.log(person.name);

//Константный объект
const person2 = { name: "Tom", age: 37 };
Object.freeze(person2);//  Сделался константой
//person2.name = "Bob";
console.log(person2.name);
//Создание объекта из переменных и констант
function display() {
   console.log(this.name2, this.age2);
}
const move = function (place) { console.log(this.name2, "goes to", place) };
const name2 = "Tom";
const age2 = 37;
const salary = 500;
const person3 = { name2, age2, salary, display, move };

person3.display();       // Tom 37
person3.move("cinema");  // Tom goes to cinema
//Фукция Object.fromEntries()
const personData = [["name", "Tom"], ["age", 37]];
const person4 = Object.fromEntries(personData);
console.log(person4);        // {name: "Tom", age: 37}
console.log(person4.name);    // Tom
//Вложенные объекты и массивы в объектах
var country = {

   name: "Швейцария",
   languages: ["немецкий", "французский", "итальянский"],
   capital: {

      name: "Берн",
      population: 126598
   },
   cities: [
      { name: "Цюрих", population: 378884 },
      { name: "Женева", population: 188634 },
      { name: "Базель", population: 164937 }
   ]
};

// вывод всех элементов из country.languages
document.write("<h3>Официальные языки Швейцарии</h3>");
for (var i = 0; i < country.languages.length; i++)
   document.write(country.languages[i] + "<br/>");

// вывод всех элементов из country.cities
document.write("<h3>Города Швейцарии</h3>");
for (var i = 0; i < country.cities.length; i++)
   document.write(country.cities[i].name + "<br/>");
//Настоящее Копирование объектов
const tom2 = { name: "Tom", age: 37 };
const bob = Object.assign({}, tom2);
bob.name = "Bob";
bob.age = 41;

console.log(`Объект tom. Name: ${tom2.name}   Age: ${tom2.age}`);
console.log(`Объект bob. Name: ${bob.name}   Age: ${bob.age}`);
//Копирование объекта с помощью spread-оператора ...
const tom3 = { name: "Tom", age: 37, company: "Google" };
const bob2 = { ...tom3, name: "Bob" };

console.log(bob2);   // {name: "Bob", age: 37, company: "Google"}
console.log(tom3);

const tom4 = { name: "Tom", age: 37, company: { title: "Microsoft" } };
const bob3 = { ...tom4 }
bob3.name = "Bob";
bob3.company.title = "Google";

console.log(`${tom4.name} - ${tom4.company.title}`);  // Tom - Google
console.log(`${bob3.name} - ${bob3.company.title}`);  // Bob - Google
//Тем не менее если объекты содержат вложенные объекты, то эти вложенные объекты при копировании опять же по сути будут представлять ссылки на один и тот же объект
//Сравнение объект
const tom6 = { name: "Tom" };
const bob5 = { name: "Bob" };
console.log(tom6 == bob5);    // false
console.log(tom6 === bob5);   // false
//Проверка наличия и перебор методов и свойств
const user4 = {};
user4.name = "Tom";
user4.age = 26;
user4.print = function () {

   console.log(this.name);
   console.log(this.age);
};
let hasNameProp = "name" in user4;
console.log(hasNameProp); // true - свойство name есть в user

let hasWeightProp = "weight" in user4;
console.log(hasWeightProp); // false - в user нет свойства или метода под названием weight
let hasPrintMethod = "print" in user4;
console.log(hasPrintMethod); // true - в user есть метод print

// Метод hasOwnProperty()
hasNameProp = user4.hasOwnProperty("name");
console.log(hasNameProp); // true
hasPrintMethod = user4.hasOwnProperty("print");
console.log(hasPrintMethod); // true
hasWeightProp = user4.hasOwnProperty("weight");
console.log(hasWeightProp); // false

//Перебор свойств и методов
const tom7 = {
   name: "Tom",
   age: 26,
   print() {
      console.log(`Name: ${this.name}  Age: ${this.age}`);
   }
};

for (const prop in tom7) {
   console.log(prop, " : ", tom7[prop]);
}
//Функции Object.entries, Object.keys, Object.values
const tom8 = {
   name: "Tom",
   age: 26,
   print() {
      console.log(`Name: ${this.name}  Age: ${this.age}`);
   }
};

for (const prop of Object.entries(tom8)) {
   console.log(prop);
}
console.log(Object.keys(tom8)); // ["name", "age", "print"]
console.log(Object.values(tom8)); // ["Tom", 26, print()]

//Создание через функцию нескольких однотипных объектов
function createUser(pName, pAge) {
   return {
      name: pName,
      age: pAge,
      displayInfo: function () {
         document.write("Имя: " + this.name + " возраст: " + this.age + "<br/>");
      },
      driveCar: function (car) {
         document.write(this.name + " ведет машину " + car.name + "<br/>");
      }
   };
};

function createCar(mName, mYear) {
   return {
      name: mName,
      year: mYear
   };
};
var tom9 = createUser("Том", 26);
tom9.displayInfo();
var bently = createCar("Бентли", 2004);
tom9.driveCar(bently);

//Конструкторы объектов
function User(pName, pAge) {
   this.name = pName;
   this.age = pAge;
   this.displayInfo = function () {
      document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
   };
}
var tom10 = new User("Том", 26);
console.log(tom10.name); // Том
tom10.displayInfo();

//Оператор instanceof позволяет проверить, с помощью какого конструктора создан объект.
var tom11 = new User("Том", 26);
function Car(r) {
   this.car = r;
}
var isUser = tom11 instanceof User;
var isCar = tom11 instanceof Car;
console.log(isUser);    // true
console.log(isCar);     // false
//Расширение объектов. Prototype
function User2(pName, pAge) {
   this.name = pName;
   this.age = pAge;
   this.displayInfo = function () {
      document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
   };
};

User2.prototype.hello = function () {
   document.write(this.name + " говорит: 'Привет!'<br/>");
};
User2.prototype.maxAge = 110;

var tom12 = new User2("Том", 26);
tom12.hello();
var john = new User2("Джон", 28);
john.hello();
console.log(tom12.maxAge); // 110
console.log(john.maxAge); // 110

//Инкапсуляция-сокрытие состояния объекта от прямого доступа извне
function User3(name, age) {
   this.name = name;
   var _age = age; //Как правило, названия локальных переменных в конструкторах начинаются со знака подчеркивания.
   this.displayInfo = function () {
      document.write("Имя: " + this.name + "; возраст: " + _age + "<br>");
   };
   this.getAge = function () {
      return _age;
   }
   this.setAge = function (age) {
      if (typeof age === "number" && age > 0 && age < 110) {
         _age = age;
      } else {
         console.log("Недопустимое значение");
      }
   }
}

var tom13 = new User3("Том", 26);
console.log(tom13._age); // undefined - _age - локальная переменная
console.log(tom13.getAge()); // 26
tom13.setAge(32);
console.log(tom13.getAge()); // 32
tom13.setAge("54"); // Недопустимое значение
//Функция как объект. Методы call и apply

var square = new Function('n', 'return n * n;');
console.log(square(5));

function display3() {

   console.log("привет мир");
}
Function.prototype.program = "Hello";


console.log(display3.program); // Hello

function add(x, y) {

   return x + y;
}
var result = add.call(this, 3, 8);
var result2 = add(4, 5);
console.log(result); // 11

function User5(name, age) {
   this.name = name;
   this.age = age;
}
var tom14 = new User5("Том", 26);
function display4() {
   console.log("Ваше имя: " + this.name);
}
display4.call(tom14); // Ваше имя: Том
function add2(x, y) {

   return x + y;
}
var result = add2.apply(null, [3, 8]);// То же что call только с массивом

console.log(result); // 11
//Наследование
// конструктор пользователя
function User6(name, age) {
   this.name = name;
   this.age = age;
   this.go = function () { document.write(this.name + " идет <br/>"); }
   this.displayInfo = function () {
      document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
   };
}
User6.prototype.maxage = 110;

// конструктор работника
function Employee(name, age, comp) {
   User6.call(this, name, age);
   this.company = comp;
   this.displayInfo = function () {
      document.write("Имя: " + this.name + "; возраст: " + this.age + "; компания: " + this.company + "<br/>");
   };
}
Employee.prototype = Object.create(User6.prototype);

var tom15 = new User6("Том", 26);
var bill = new Employee("Билл", 32, "Google");
tom15.go();
bill.go();
tom15.displayInfo();
bill.displayInfo();
console.log(bill.maxage);
console.log(this);
/* для не use strict
function foo() {
   console.log(this.bar);
}

var o3 = { bar: "bar3" }
var bar = "bar1";
foo();  // bar1
var func = foo.bind(o3);
func(); // bar3
*/
//Деструктуризация
const user17 = {
   name6: "Tom",
   age: 24,
   phone: "+367438787",
   email: "tom@gmail.com"
};
let { name6, email } = user17;
name = 1;
console.log(name);      // Tom
console.log(email);     // tom@gmail.com
const user18 = {
   name: "Tom",
   age: 24,
   phone: "+367438787",
   email: "tom@gmail.com"
};
const { name: userName, email: mailAddress } = user18;
console.log(userName);      // Tom
console.log(mailAddress);   // tom@gmail.com

const user19 = {
   name3: "Tom",
   age: 24,
};
const { name3 = "Sam", email: mailAddress2 = "sam@gmail.com" } = user19;
console.log(name3);              // Tom
console.log(mailAddress2);       // sam@gmail.com

const user20 = {
   name4: "Tom",
   age: 24,
   account: {
      login: "tom555",
      password: "qwerty"
   }
};
let { name4, account: { login } } = user20;
console.log(name4);      // Tom
console.log(login);     // tom555

//rest-оператор или оператор ... 

const tom21 = {
   name: "Tom",
   age: 24,
   phone: "+367438787",
   email: "tom@gmail.com"
};
const { name7, age6, ...contacts } = tom21;
console.log(name7);      // Tom
console.log(age6);       // 24
console.log(contacts);  // {phone: "+367438787", email: "tom@gmail.com"}
//Деструктуризация массивов
let users = ["Tom", "Sam", "Bob"];
let [a, b, c] = users;

console.log(a);     // Tom
console.log(b);     // Sam
console.log(c);     // Bob

//Пропуск элементов

let users2 = ["Tom", "Sam", "Bob", "Ann", "Alice", "Kate"];
let [first, , , , fifth] = users2;

console.log(first);     // Tom
console.log(fifth);     // Alice
//Деструктуризация объектов из массивов

let people = [
   { name: "Tom", age: 34 },
   { name8: "Bob", age: 23 },
   { name: "Sam", age: 32 }
];
let [, { name8 }] = people;

console.log(name8);  // Bob
//Обмен значениями
let nums = [9, 3, 5, 2, 1, 4, 8, 6];
for (let i = 0; i < nums.length; i++)
   for (let j = 0; j < nums.length; j++)
      if (nums[i] < nums[j]) [nums[j], nums[i]] = [nums[i], nums[j]];

console.log(nums);  // [1, 2, 3, 4, 5, 6, 8, 9]
//оператор ?.
let tom22 = null;
let bob7 = { name: "Bob" };

function printName(person) {
   console.log(person?.name);
}
printName(tom22); // undefined
printName(bob7); // Bob

let tom23 = { name: "Tom" };
let bob8 = {
   name: "Bob",
   say(words) {
      return (words);
   }
};

console.log(tom23.say?.("my name is Tom"));   // undefined
console.log(bob8.say?.("my name is Bob"));   // my name is Bob

//Классы

class Person {
   name;
   age;
}
const tom29 = new Person();
tom29.name = "Tom";
tom29.age = 37;
console.log(tom29.name);  // Tom
console.log(tom29.age);   // 37

class Person2 {
   name;
   age;
   move(place) {
      console.log(`Go to ${place}`);
   }
   eat() {
      console.log("Eat apples");
   }
}
const tom30 = new Person2();
tom30.move("Hospital");   // Go to Hospital
tom30.move("Cinema");     // Go to Cinema
tom30.eat();              // Eat apples


//конструктор в классе
class Person3 {
   name;//Можно убрать
   age;//Можно убрать
   constructor(personName, personAge) {// конструктор - просто функция которая что-то выполняет, чаще всего используется для инициализации данных
      this.name = personName;
      this.age = personAge;
   }
   print() {
      console.log(`Name: ${this.name}  Age: ${this.age}`);
   }
}
const tom31 = new Person3("Tom", 37);
tom31.print();    // Name: Tom  Age: 37
const bob31 = new Person3("Bob", 41);
bob31.print()     // Name: Bob  Age: 41
//Приватные поля и методы
class Person6 {
   #name;
   #age;
   constructor(name, age) {
      this.#name = name;
      this.setAge(age);
   }
   setAge(age) {
      if (age > 0 && age < 110) this.#age = age;
   }
   print() {
      console.log(`Name: ${this.#name}  Age: ${this.#age}`);
   }
}
const tom34 = new Person6("Tom", 37);
// tom.#name = "Sam";   // ! Ошибка - нельзя обратиться к приватному полю
// tom.#age = -45;      // ! Ошибка - нельзя обратиться к приватному полю

tom34.print();    // Name: Tom  Age: 37
tom34.setAge(22);
tom34.print();    // Name: Tom  Age: 22
tom34.setAge(-1234);
tom34.print();    // Name: Tom  Age: 22

class Person7 {
   #name = "undefined";
   #age = 1;
   constructor(name, age) {
      this.#name = this.#checkName(name);
      this.setAge(age);
   }
   #checkName(name) {
      if (name !== "admin") return name;
   }
   setAge(age) {
      if (age > 0 && age < 110) this.#age = age;
   }
   print() {
      console.log(`Name: ${this.#name}  Age: ${this.#age}`);
   }
}
const tom35 = new Person7("Tom", 37);
tom35.print();    // Name: Tom  Age: 37
const bob35 = new Person7("admin", 41);
bob35.print();    // Name: Undefined  Age 41
//let personName = bob.#checkName("admin"); // ! Ошибка - нельзя обратится к приватному методу

//Статические поля и методы - к ним нельзя обратиться через this, определяются для всего класса а не объекта
class Person8 {
   static retirementAge = 65;
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
   print() {
      console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
   }
   static printClassInfo() {
      console.log("Класс Person8 представляет человека");// здесь нельзя использовать слово this при обращении к переменным
   }
}

console.log(Person8.retirementAge); // 65
Person8.retirementAge = 62;
console.log(Person8.retirementAge); // 62
Person8.printClassInfo();

//Но можно так:
class Person9 {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
   static print(person) {
      console.log(`Имя: ${person.name}  Возраст: ${person.age}`);
   }
}
const tom36 = new Person9("Tom", 37);
const bob36 = new Person9("Bob", 41);
Person9.print(tom36);  // Tom 37
Person9.print(bob36);  // Bob 41
//мы можем использовать в статических методах слово this для обращения к статическим полям и другим статическим методам
class Person10 {
   static retirementAge = 65;
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
   print() {
      console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
   }
   static calculateRestAges(person) {
      if (this.retirementAge > person.age) {
         const restAges = this.retirementAge - person.age;
         console.log(`До пенсии осталось ${restAges} лет`);
      }
      else console.log("Вы уже на пенсии");
   }
}
const tom37 = new Person10("Tom", 37);
Person10.calculateRestAges(tom37);      // До пенсии осталось 28 лет
const bob37 = new Person10("Bob", 71);
Person10.calculateRestAges(bob37);      // Вы уже на пенсии
// set и get


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

//Свойства, доступные только для чтения, то есть только get, а не set
class Person12 {
   #age = 1;
   #name;
   constructor(name, age) {
      this.#name = name;
      this.age = age;
   }
   //set name(value){ this.#name = value; }
   get name() { return this.#name; }
   set age(value) { if (value > 0 && value < 110) this.#age = value; }
   get age() { return this.#age; }
}
const tom40 = new Person12("Tom", 37);
console.log(tom40.name);  // Tom,
//tom40.name = "Bob";       // Это ничего не даст
console.log(tom40.name);  // Tom   - значение не изменилось
//Наследование extends
class Person45 {
   name;
   age;

   print() {
      console.log(`Name: ${this.name}  Age: ${this.age}`);
   }
}
class Employee2 extends Person45 {
   company;
   work() {
      console.log(`${this.name} works in ${this.company}`);
   }
}

class Person46 {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
   print() {
      console.log(`Name: ${this.name}  Age: ${this.age}`);
   }
}
class Employee46 extends Person46 {
   company;
   work() {
      console.log(`${this.name} works in ${this.company}`);
   }
}

const tom46 = new Person46("Tom", 34);
tom46.print();    // Name: Tom  Age: 34

const sam46 = new Employee46("Sam", 25);    // унаследованный конструктор
sam46.print();    // Name: Sam  Age: 25

//Ключевое слово super
class Person47 {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
   print() {
      console.log(`Name: ${this.name}  Age: ${this.age}`);
   }
}
class Employee47 extends Person47 {

   constructor(name, age, company) {
      super(name, age);
      this.company = company;
   }
   work() {
      console.log(`${this.name} works in ${this.company}`);
   }
}

const tom47 = new Person47("Tom", 34);
tom47.print();    // Name: Tom  Age: 34

const sam47 = new Employee47("Sam", 25, "Google");
sam47.print();    // Name: Sam  Age: 25
sam47.work();     // Sam works in Google
//Переопределение методов базового класса.
class Person49 {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
   print() {
      console.log(`Name: ${this.name}  Age: ${this.age}`);
   }
}
class Employee49 extends Person49 {

   constructor(name, age, company) {
      super(name, age);
      this.company = company;
   }
   print() {
      super.print();
      console.log(`Company: ${this.company}`);
   }
   work() {
      console.log(`${this.name} works in ${this.company}`);
   }
}
const sam49 = new Employee49("Sam", 25, "Google");
sam49.print();    // Name: Sam  Age: 25
                // Company: Google

