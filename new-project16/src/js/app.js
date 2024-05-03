import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
//Массивы
//Создание массива
const users = new Array("Tom", "Bill", "Alice");
const people = ["Sam", "John", "Kate"];
const people2 = Array.of("Tom", "Bob", "Sam");
console.log(people2); // ["Tom", "Bob", "Sam"]
console.log(users); // ["Tom", "Bill", "Alice"]
console.log(people); // ["Sam", "John", "Kate"]
//Создание массива с помощью Array.from
const array = Array.from("Hello");
console.log(array); // ["H", "e", "l", "l", "o"]
const numbers = [1, 2, 3, 4];
const array2 = Array.from(numbers, n => n * n);
console.log(array2); // [1, 4, 9, 16]
const array3 = Array.from({ length: 3, "0": "Tom", "1": "Sam", "2": "Bob" }, (element) => {
   console.log(element);
   return element;
});
console.log(array3); // ["Tom", "Sam", "Bob"]
//spread-оператор (оператор ...) - раскладывает массив на отдельные значени
const users4 = ["Tom", "Sam", "Bob"];
console.log(...users4);  // Tom Sam Bob
const users5 = ["Tom", "Sam", "Bob"];
console.log(users);     //  ["Tom", "Sam", "Bob"]
const people1 = [...users5];
const people22 = new Array(...users5);
const people3 = Array.of(...users5);
console.log(people1);     //  ["Tom", "Sam", "Bob"]
console.log(people22);     //  ["Tom", "Sam", "Bob"]
console.log(people3);     //  ["Tom", "Sam", "Bob"]
//Объединение массивов
const men = ["Tom", "Sam", "Bob"];
const women = ["Kate", "Alice", "Mary"];
const people4 = [...men, "Alex", ...women];

console.log(people4);     //  ["Tom", "Sam", "Bob", "Alex", "Kate", "Alice", "Mary"]
//Передача аргументов функции
const people5 = ["Tom", "Sam", "Bob"];

function print(first, second, third) {
   console.log(first);
   console.log(second);
   console.log(third);
}
print(...people5);
// Tom
// Sam
// Bob
//Копирование массивов
const people6 = [{ name: "Sam" }, { name: "Tom" }, { name: "Bob" }];
const employees = [...people6];//Глубокое копирование с помощью метода spread-оператора:
employees[0] = { name: "Dan" };
console.log(employees);     //  [{name:"Dan"}, {name:"Tom"}, {name:"Bob"}]
console.log(people6);        //  [{name:"Sam"}, {name:"Tom"}, {name:"Bob"}]
const people7 = ["Sam", "Tom", "Bob"];
const employees2 = [...people7];
employees2[0] = "Dan";
console.log(employees2);     // ["Dan", "Tom", "Bob"]
console.log(people7);        //  ["Sam", "Tom", "Bob"]
//Глубокое копирование с помощью метода slice():
const users8 = ["Tom", "Sam", "Bill"];
console.log(users8);             // ["Tom", "Sam", "Bill"]
const people8 = users8.slice();       // глубокое копирование

people8[1] = "Mike";             //  изменяем второй элемент
console.log(users8);             //  ["Tom", "Sam", "Bill"]
console.log(people8);            //  ["Tom", "Mike", "Bill"]
const users9 = ["Tom", "Sam", "Bill", "Alice", "Kate"];
const people9 = users9.slice(1, 4);//Глубокое копирование массива с 1 индекс по четвертый, не включая 4
console.log(people9);        // ["Sam", "Bill", "Alice"]
const users10 = ["Tom", "Sam", "Bill", "Alice", "Kate"];
const people10 = users10.slice(2);  // со второго индекса до конца
console.log(people10);        // ["Bill", "Alice", "Kate"]
//Метод push() добавляет элемент в конец массива:
const people11 = [];
people11.push("Tom");
people11.push("Sam");
people11.push("Bob", "Mike");

console.log("В массиве people элементов: ", people11.length);
console.log(people11); // ["Tom", "Sam", "Bob", "Mike"]
//Метод pop() удаляет последний элемент из массива:
const lastPerson = people11.pop(); // извлекаем из массива последний элемент
console.log(lastPerson);   // Mike
console.log(people11);    // ["Tom", "Sam", "Bob"]
//Метод shift() извлекает и удаляет первый элемент из массива:
const firstPerson = people11.shift(); // извлекаем из массива первый элемент
console.log(firstPerson);   // Tom
console.log(people11);    // ["Sam", "Bob"]
//Метод unshift() добавляет новый элемент в начало массива:
people11.unshift("Alice");
console.log(people11);    // ["Alice", "Sam", "Bob"]
//Удаление элемента по индексу. splice()
people11.push("Tom", "Kagari");
const deleted = people11.splice(3);//people11.splice(-1); people.splice(1, 3);-с первого по третий включая
console.log(deleted);       // [ "Tom", "Kagari" ]
console.log(people11);         // [ "Tom", "Sam", "Bill" ]
//Удаление и вставка элементов с помощью splice
const people12 = ["Tom", "Sam", "Bill", "Alice", "Kate"];
const deleted2 = people12.splice(1, 3, "Ann", "Bob");
console.log(deleted2);       // ["Sam", "Bill", "Alice"]
console.log(people12);         // ["Tom", "Ann", "Bob", "Kate"]
//Метод concat() служит для объединения массивов.
const men2 = ["Tom", "Sam", "Bob"];
const women2 = ["Alice", "Kate"];
const people13 = men2.concat(women2);
console.log(people13);         // ["Tom", "Sam", "Bob", "Alice", "Kate"]
//Метод join() объединяет все элементы массива в одну строку
const people14 = ["Tom", "Sam", "Bob"];

const peopleToString = people14.join("; ");
console.log(peopleToString);         // Tom; Sam; Bob
//Метод sort() сортирует массив по возрастанию:
const people15 = ["Tom", "Sam", "Bob"];
people15.sort();
console.log(people15);         // ["Bob", "Sam", "Tom"]
const numbers4 = [200, 15, 5, 35];

numbers4.sort((a, b) => a - b);
console.log(numbers4);         // [5, 15, 35, 200]
//Метод reverse() переворачивает массив задом наперед:
const people16 = ["Tom", "Sam", "Bob"];

people16.reverse();
console.log(people16);         // ["Bob", "Sam", "Tom"]
//Методы indexOf() и lastIndexOf() возвращают индекс первого и последнего включения элемента в массиве.
const people17 = ["Tom", "Sam", "Bob", "Tom", "Alice", "Sam"];

const firstIndex = people17.indexOf("Tom");
const lastIndex = people17.lastIndexOf("Tom");
const otherIndex = people17.indexOf("Mike");
console.log(firstIndex); // 0
console.log(lastIndex);  // 3
console.log(otherIndex); // -1
//Проверка наличия элемента
console.log(people17.includes("Bob", 2)); // true
console.log(people17.includes("Bob", 4))  // false
//Метод every() проверяет, все ли элементы соответствуют определенному условию
const numbers6 = [1, -12, 8, -4, 25, 42];
const passed = numbers6.every(n => n > 0);
console.log(passed);// false
//Метод some() проверяет, соответствует ли хотя бы один элемент условию
const passed2 = numbers6.some(n => n > 0);
console.log(passed2); // true
//Метод filter() возвращает массив тех элементов, которые соответствуют условию
const filteredNumbers = numbers6.filter(n => n > 0);
console.log(filteredNumbers); // [1, 8, 25, 42]
//Методы forEach() - принимает только 1 параметр-текущий перебираемый элемент массива
const numbers7 = [1, 2, 3, 4, 5, 6];

numbers7.forEach(n =>
   console.log("Квадрат числа", n, "равен", n * n)
);
//Метод map() похож на метод forEach, но он возвращает новый массив с результатами
const squares = numbers7.map(n => n * n);
console.log(squares);   //  [1, 4, 9, 16, 25, 36]
//Метод find() возвращает первый элемент массива, который соответствует некоторому условию.
let found = numbers7.find(n => n > 1);
console.log(found); // 2
//Метод findIndex возвращает индекс первого элемента массива, который соответствует этому условию
let foundIndex = numbers7.findIndex(n => n > 1);
console.log(foundIndex);    // 1
//Метод flat() упрощает массив с учетом указанной вложенности элементов, в скобках указывается уровень влложенности
const people21 = ["Tom", "Bob", ["Alice", "Kate", ["Sam", "Ann"]]];
const flattenPeople = people21.flat();
console.log(flattenPeople); // ["Tom", "Bob", "Alice", "Kate", ["Sam", "Ann"]]
const flattenPeople2 = people21.flat(2);
console.log(flattenPeople2); // ["Tom", "Bob", "Alice", "Kate", "Sam", "Ann"]
const flattenPeople3 = people21.flat(Infinity);
console.log(flattenPeople3); // ["Tom", "Bob", "Alice", "Kate", "Sam", "Ann"]
//Наследование массивов
class Team extends Array {

   constructor(name, ...members) {
      super(...members);
      this.name = name;
   }
}
// создаем объект команды
const barcelona = new Team("Barcelona", "Tom", "Sam", "Bob");
console.log(barcelona);     // Team(3) ["Tom", "Sam", "Bob"]

// перебор набора
for (const person of barcelona) {
   console.log(person);
}
barcelona.push("Tim");      // добавим один элемент
console.log(barcelona);     // Team(4) ["Tom", "Sam", "Bob", "Tim"]
barcelona.splice(1, 1);     // удалим второй элемент
console.log(barcelona);     // Team(3) ["Tom", "Bob", "Tim"]
//Переопределение методов
class Team2 extends Array {

   constructor(name, ...members) {
      super(...members);
      this.name = name;
   }
   push(person) {
      if (person !== "admin") super.push(person);
   }
}

const snowbars = new Team2("SnowBars", "Tom", "Sam", "Bob");

snowbars.push("admin");     // добавим один элемент - admin
console.log(snowbars);      // Team(3) ["Tom", "Sam", "Bob"]
snowbars.push("Tim");       // добавим один элемент - Tim
console.log(snowbars);      // Team(4) ["Tom", "Sam", "Bob", "Tim"]