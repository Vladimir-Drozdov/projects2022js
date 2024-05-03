const people = ["Tom", "Bob", "Sam"];
for (const person of people) {
   console.log(person);
}
//Итераторы.-next(), который возвращает объект с двумя свойствами: value(значсение 
// перебираемого элемента) и done(есть ли еще элементы?да-false)

const items = people.entries();//преобразовали массив в итератор при помощи entries();
console.log(items);
let numbers = [1, 2, 3, 4, 5];
let found = numbers.find(n => n > 1);
console.log(found);
//console.log(items.next());
//console.log(items.next());
//перебор всей коллекции
let item;
while (!(item = items.next()).done) {
   console.log(item.value);
   console.log(item.done);
}
//Но все это можно сделать при помощи цикла for of
//метод [Symbol.iterator]() -представляет итератор
const iterable = {
   [Symbol.iterator]() {
      return {
         current: 1,
         end: 3,
         next() {
            // если еще есть элементы
            // return { value: ..., done: false };
            // если больше нет элементов
            // return { value: undefined, done: true };
            if (this.current <= this.end) {
               return { value: this.current++, done: false };
            }
            return { done: true };

         }
      };
   },
   s: function far(w, e) {
      console.log(w + e);
   }

};
const myIterator = iterable[Symbol.iterator]();//Получаем итератор
while (!(item = myIterator.next()).done == true) {
   console.log(item);
}

console.log(myIterator.next());
//или так
for (let value of iterable) {
   console.log(value);
}
iterable.s(3, 4);
//Итерируемый объект можно проитерировать, они называются итерируемыми объектами, потому что существует связанный
//с ним итериратор, т.е итерируемый объект содержит функцию [Symbol.iterator](). Итератор не итерируется
//Генераторы-тип функции, корторые используются для генерации значений
//Для их обозначения после function ставится *
//Функция генератора возвращает итератор, yield- оператор применяющийся для
// возврата значения
console.log('/////////////');
function* getNumber2() {
   yield 5;
   yield [1, 2, 'r'];
   yield { 5: "5", ty: "ty" };

}

let numberGenerator2 = getNumber2();//создан об]ект итератора
//let next = numberGenerator.next();//получаем значения из генератора
//console.log(next);  // {value: 5, done: false}
/*let next;
//while (!(next = numberGenerator.next()).done == true);
//{
//   console.log(next);
//} *///почему то не работает цикл while
console.log(numberGenerator2.next());
console.log(numberGenerator2.next());
//можно завершить работу генератора с помощью метода return()
//numberGenerator.return();
console.log(numberGenerator2.next());
console.log(numberGenerator2.next());
console.log('/////////////');
//Рассмотрим случаи когда yield содержит более сложную логику
function* points() {
   let x = 0;
   let y = 0;
   while (true) {
      yield {
         x: x,
         y: y,
      };
      x += 2;
      y += 1;
   }
}

let pointGenerator = points();
console.log(pointGenerator.next().value);
console.log(pointGenerator.next().value);
console.log(pointGenerator.next().value);
// можно возвращать значения при помощи цикла for ... of
function* getNumber() {
   yield 5;
   yield 25;
   yield 125;
}
let numberGenerator = getNumber();

for (const num of numberGenerator) {
   console.log(num);
}

function* getNumber() {
   yield 5;
   yield 25;
   yield 125;
}
//при помощи цикла while
let numberGenerator3 = getNumber();
let next;
while (!(next = numberGenerator3.next()).done) {
   console.log(next);
}
//передача значений в генератор
function* getNumber(start, end, step) {
   for (let n = start; n <= end; n += step) {
      yield n;
   }
}
let numberGenerator4 = getNumber(0, 8, 2);

for (num of numberGenerator4) {
   console.log(num);
}
//передача данных в метод next.Здесь next()-переопределяет
// предыдущее значение опреатора yield
function* getNumber() {
   const n = yield 5;
   console.log("n:", n);
   const m = yield 5 * n;
   console.log("m:", m);

   yield 5 * m;
}
let numberGenerator5 = getNumber();
console.log(numberGenerator5.next().value);      // 5
console.log(numberGenerator5.next(4).value);     // 20
console.log(numberGenerator5.next(3).value);     // 15
//Обработка ошибок генератора
//Надо использовать конструкцию try...catch. Если вызываем throw, то вызывается catch
// после чего генератор завершает работу
function* generateData() {
   try {
      yield "Tom";
      yield "Bob";
      yield "Hello Work";
   }
   catch (error) {
      console.log("Error:", error);

   }
}
const personGenerator = generateData();
console.log(personGenerator.next());        // {value: "Tom", done: false}
personGenerator.throw("Something wrong");   // Error: Something wrong
//personGenerator.return();
console.log(personGenerator.next());        // {value: undefined, done: true}

//////////Конец теории
//создаем итерируемый объект

class IterableObject extends Object {
   constructor(object) {
      super();

      Object.assign(this, object);

   }

   [Symbol.iterator]() {
      const entries = Object.entries(this);

      let index = -1;

      return {
         next() {
            index++;

            return {
               value: entries[index],
               done: index >= entries.length
            }
         },
         [Symbol.iterator]() {//делаем итератор итерируемым объектом(необязательно, но принято)
            return this;
         }
      }
   }
}
const iterableObject = new IterableObject({
   1: 'a',
   2: 'b',
   3: 'c'
});
const obj2 = new Object({ 0: "tt", 1: "ttt", tt: "ty" });
console.log(obj2);
let iter = 0;
const iters = iterableObject[Symbol.iterator]();
while (!(iter = iters.next()).done) {
   console.log(iter);
}
for (let element of iterableObject) {
   console.log(element);
}
console.log('//////////')
for (let element of iterableObject[Symbol.iterator]()[Symbol.iterator]()[Symbol.iterator]()[Symbol.iterator]()) {
   console.log(element);
}
//Некоторые итераторы тоже содержат итераторы, т.е. являются итерируемыми объектами и их можно проитерировать
const ourArray = [1, 2, 3];
for (let element of ourArray) {
   console.log(element);
}
const iterator = ourArray[Symbol.iterator]();

for (let element of iterator) {
   console.log(element);
}
