//методы с двумя параметрами
const form = document.querySelector('form');
const data = new FormData(form);
console.log(data, data === form);
data.append('userpic', 'value');
//data.delete('userpic');//удаление пары ключ-значение
console.log(data.get('userpic'));//возвращает первое значение ключа
data.append('userpic', 'qwerty');
data.append('user', 'something');
console.log(data.getAll('userpic'))//возвращает все значения ключа в виде массива
console.log(data.has('user'));//проверяет есть ли такое имя ключа
console.log(data.keys());//возвращает итератор, который позволяет пройтись по всем ключам
for (key of data.keys()) {
   console.log(key);
}
data.set('user', 'someone');//меняет значение ключа, или добавляет новый
console.log(data.get('user'));
for (key of data.values()) {//проходит по всем значениям ключей, возвращает итератор
   console.log(key);
}
for (key of data.entries()) {//проходит по всем значениям пар ключ-значение, возвращает итератор
   console.log(key);
}
console.log(data);
data.forEach((value, index, arr) => {
   console.log(value, index, arr);
})
//отличие set() от append()-если в set() первым параметром передать
//существующий ключ, то он изменит его значение, если передать ключ,
//который не существует, то он добавит пару ключ-значение в конец
//append()всегда добавляет пару ключ-значение в конец, даже, если этот ключ
//существует
//Методы с тремя параметрами-применяются для отправки файлов
const file = document.querySelector('[type="file"]');
file.addEventListener('change', function (e) {
   let file2 = file.value;
   let file3 = new Blob([file2]);//тип blob - первый параметр при создании -
//массив с данными, второй - необязательный с параметрами{}
   data.append('pic', file3, 'picture.jpg');//первый павраметр - имя ключа,
//второй- типа blob, третий - имя второго параметра, котороу будет использоваться
   
   console.log(data.get('pic'));
})
//set()-аналогично append()

//Использование Объектов FormData

var request = new XMLHttpRequest();
request.open("POST", "https://jsonplaceholder.typicode.com/posts");
request.send(data);

//AJAX-Asynchronous Javascript and XML
const loadData = function (url, cb) {
   const xhr = new XMLHttpRequest();
   xhr.open(`GET`, url);
   xhr.responseType = `json`;
   xhr.addEventListener('load', cb);
   xhr.send();
}

loadData('https://api.github.com/users/AntonovIgor', function (e) {
   const response = e.currentTarget.response;//e.currentTarget-элемент который привязан к событию
//target – элемент, который создал событие;
   console.log(response);
});
//Массивы
const red=[1, 2, 3, 4, 5].reduce((result, value, index, array) => {
   return result + value+array[index];
},70)
console.log(red);//100
console.log([5, 6, 7].find(function (value, index, array) {
   return array[index] < array[index + 1];
}));//5
//findIndex aнaл-но
console.log([3, 6, 89].some((value, index, array)=>{
   return value < array[index + 1];
}));//true
//every aнaл-но
console.log([3, 34, 43, 44, 33, 34, 434, 343].sort((a, b) => a - b));
//[3, 33, 34, 34, 43, 44, 343, 434]
console.log([5, 6, 7].filter(function (value, index, array) {
   return array[index] < array[index + 1];
}));//[5,6] работает как find, но возвращает все подходящие значения массива











