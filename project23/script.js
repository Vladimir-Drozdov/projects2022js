//arr.sort() - все ясно. А для сравнения не ASCII символов используется localeCompare
var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
items.sort(function (a, b) {
  return a.localeCompare(b);
});
console.log(items);// items равен ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']
//arr.filter()-создает новый массив со всеми эл-ами старого, которые прошли проверку
const array = ['erg', 'srtdrh', 'srtgryhj', 'sg'];
const result = array.filter(value => value.length > 4);
console.log(result.join());
// indexOf();- возвращает номер элемента в строке, начиная с которого идет строка в скобках
const str = 'ertyuiyu';
const str2 = 'yu';
console.log(str.indexOf(str2));//3
//дребезг-эффект, связанный с мгновенной реакцией на пользовательские события
//files-хранит список файлов
const file = document.querySelector('[type="file"]');
const image = document.querySelector('img');
file.addEventListener('change', () => {
   console.log(file.files[0]);
   image.src = URL.createObjectURL(file.files[0]);
   //URL.revokeObjectURL(image.src)
});
//endsWith
console.log('fghjk'.endsWith('hjk'));//true

//функция устранения дребезга - непонятная функция, не использовать пока
function debounce(callback, timeoutDelay = 500) {
   let timeoutId
   return (...rest)=>{
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
   }
}
const smallRectangle = document.querySelector('.small__rectangle');
const all = document.documentElement;
console.log(all.clientHeight);
let fullHeight = Math.max(
   document.body.scrollHeight, document.documentElement.scrollHeight,
   document.body.offsetHeight, document.documentElement.offsetHeight,
   document.body.clientHeight, document.documentElement.clientHeight
);

console.log(fullHeight);
/*
window.addEventListener('scroll', function () {
   setTimeout(() => {
   smallRectangle.style.width = (pageYOffset/fullHeight)*200+"px";
   console.log(pageYOffset);
   smallRectangle.style.backgroundColor = "black";
   }, 2000);
   
})
*/
function Dreb() {
   let timeout=setInterval(() => {
   smallRectangle.style.width = (pageYOffset/fullHeight)*200+"px";
   console.log(pageYOffset);
   
   //window.removeEventListener('scroll', Dreb);
   clearInterval(timeout);
   smallRectangle.style.backgroundColor = "black";
   }, 200); 
}
window.addEventListener('scroll',
   Dreb
   
);

//Интерфейс URL
/*const url = new URL(url [, base]) если url-абсолютный адрес, то base не нужен, 
если относительный, то base нужен, туда передают абсолютный адрес
Пример:
let m = 'https://developer.mozilla.org';
let a = new URL("/", m);     
Свойства: если что их всех можно посмотреть в консоли с помощью console.log(url)
1)hash - строка начинающаяся с # и потом после нее еще идут символы
# нужен для пролистывания страницы к нужному моменту без перезагрузки
*/
let url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/href#Examples');
console.log(url.hash);//'#Examples'
/*
2)host - имя хоста, в случае если после него идет : , то host вернет и это, если это не код ошибки 
*/
url = new URL('https://developer.mozilla.org:4097/en-US/docs/Web/API/URL/host');
console.log(url.host); // "developer.mozilla.org"
/*
3)hostname-имя хоста без :
*/
url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/hostname');
console.log(url.hostname); //'developer.mozilla.org'
/*
4)href-содержит весь URL
*/
url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/href');
console.log(url.href); //  'https://developer.mozilla.org/en-US/docs/Web/API/URL/href'
/*
5)origin-содержит сериализацию в юникоде
*/
url = new URL("blob:https://mozilla.org:443/");
console.log(url.origin); // 'https://mozilla.org'
/*
6)password-содержит пароль,указанный перед доменным именем
*/
url = new URL('https://anonymous:flabada@developer.mozilla.org/en-US/docs/Web/API/URL/password');
console.log(url.password) // "flabada"
/*
7)pathname-точто следует после первого /
*/
url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname?q=value');
console.log(url.pathname); // "/en-US/docs/Web/API/URL/pathname"
/*
8)port-номер порта URL
*/
url = new URL('https://mydomain.com:80/svn/Repos/');
console.log(url.port); //  '80'
/*
9)protocol-схема протокола, включающая :
*/
url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/protocol');
console.log(url.protocol); // "https:"
/*
10)search - сожержит ? и то что идет дальше
*/
url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/search?q=123');
console.log(url.search); // "?q=123"
/*
11)searchParams-позволяет получить аргументы GET запроса
*/
let params = (new URL("https://example.com/?name=Jonathan%20Smith&age=18")).searchParams;
let name = params.get('name'); // is the string "Jonathan Smith".
let age = parseInt(params.get('age')); // is the number 18
console.log(name, age);
/*
12)username-имя пользователя
*/
url = new URL('https://anonymous:flabada@developer.mozilla.org/en-US/docs/Web/API/URL/username');
console.log(url.username) // Logs "anonymous"
///////////
url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname')
url.search = "?q=123";
console.log(url);
//Методы
/*
1)URL.createObjectURL() - создает строку, содержащую URL-адрес объекта, переанного в параметр
2)URL.revokeObjectURL() - удаляет строку, содержащую URL-адрес объекта, созданную URL.createObjectURL()
тут в параметр надо передать объект, которому мы поставили в = с URL.createObjectURL()
Пример выше на 20-ч строчках
3).toJSON()
4).toString()
*/
url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname');
console.log(url.toString());
console.log(url)




