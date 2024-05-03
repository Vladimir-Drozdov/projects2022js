//XMLHTTP работает только с файлами, находящимися на том же домене,
//что и использующая XMLHTTP страница
//https://jsonplaceholder.typicode.com/posts
//XMLHttpRequest();
//let xhr = new XMLHttpRequest();
//xhr.open(method, URL, [async, user, password])//не открывает
//соединение, а лишь инициализирует запрос
//async - если указать false, то запрос выполнится синхронно,
//т.е. заблокирует выполнение JS до завершения запроса, используется крайне редко
//user, password – логин и пароль для базовой HTTP-авторизации
//xhr.send([body])//устанавливает соединение и отсылает запрос сервиру.
//body-данные, который он отсылает(нужен для POST, а не для GET)

//Наиболее используемые события на xhr
//load-происходит, когда получен какой-л. ответ, даже 404
//error- запрос не может быть выполнен( например нет соединения или невалидный URL)
//progress-запускается периодически, сообщает о прогрессе
//timeout - срабатывает если случился таймаут, т.е. вышло время заданной
//здесь  xhr.timeout = 1000; в мс
/*
xhr.onprogress = function(event) { // запускается периодически
  // event.loaded - количество загруженных байт
  // event.lengthComputable = равно true, если сервер присылает заголовок Content-Length
  // event.total - количество байт всего (только если lengthComputable равно true)
  alert(`Загружено ${event.loaded} из ${event.total}`);
};
Мы можем указать тип ожидаемого ответа при помощи xhr.responseType;
"" (по умолчанию) – строка,
"text" – строка,
"arraybuffer" – ArrayBuffer (для бинарных данных, смотрите в ArrayBuffer, бинарные массивы),
"blob" – Blob (для бинарных данных, смотрите в Blob),
"document" – XML-документ (может использовать XPath и другие XML-методы),
"json" – JSON (парсится автоматически).
xhr.readyState-показывает состояние запроса от 0 до 4-завершен полн-ю.
xhr.abort();-отмена запроса
xhr.timeout = 10000; промежуток времени в милисекундах,в течении которого
мы готовы ждать ответ
Работа с HTTP-заголовками:
xhr.setRequestHeader('Content-Type', 'application/json'); устанавливает заголовок запроса
xhr.getResponseHeader('Content-Type') возвращает значение заголовка ответа
xhr.getAllResponseHeaders() возвращает все заголовки метода
Ослеживание событий во время отправки данных на сервер при помощи объекта xhr.upload
его события
loadstart – начало загрузки данных.
progress – генерируется периодически во время отправки на сервер.
abort – загрузка прервана.
error – ошибка, не связанная с HTTP.
load – загрузка успешно завершена.
timeout – вышло время, отведённое на загрузку (при установленном свойстве timeout).
loadend – загрузка завершена, вне зависимости от того, как – успешно или нет.

*/
 //1-ый пример
 /*
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.responseType = 'text';

xhr.send();
xhr.addEventListener('load', function (e) {
   console.log(xhr.response);
   console.log(xhr.status, xhr.statusText, xhr.response.length)
})
xhr.addEventListener('progress', function (e) {
   console.log(xhr.readyState)
   console.log(e.lengthComputable)
   console.log(xhr.getAllResponseHeaders())
   console.log(`загружено ${e.loaded} из ${e.total}`)
})
*/
/* 2-ой пример нерабочий
let xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'https://google.com/search');
xhr2.send();
xhr.addEventListener('load', function (e) {
   console.log(xhr.response);
   console.log(xhr.status, xhr.statusText, xhr.response.length)
})

*/
//3-ий пример
/*
let xhr3 = new XMLHttpRequest();

xhr3.open("POST", "https://jsonplaceholder.typicode.com/posts");
xhr3.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
xhr3.responseType='json'
xhr3.upload.onprogress = function(event) {
   console.log(`Отправлено ${event.loaded} из ${event.total}`);
};
xhr3.send(JSON.stringify({
   data2: 'data2'
}));

xhr3.onload = function (e) {
   console.log(xhr3.status, xhr3.statusText)
   console.log(xhr3.response);
   console.log(xhr3.getAllResponseHeaders())
}
*/
//4-ый пример
/*
let formData = new FormData(document.forms.person);

  // добавим ещё одно поле
  formData.append("middle", "Иванович");

  // отправим данные
let xhr = new XMLHttpRequest();
   xhr.timeout = 1;
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
  xhr.send(formData);

  xhr.onload = () => alert(xhr.response);
xhr.addEventListener('timeout', () => {
   console.log(111111);
   })
   */

//5-ый пример отсылка FormData - странное
//Content-Type:multipart/form-data в запросе для FormData-странно работает
/*
const formData = new FormData();
const request = new XMLHttpRequest();
request.open("POST", "https://jsonplaceholder.typicode.com/posts");
formData.append("name", "Vladimir");
let mass = {};
for (key of formData.entries()) {
   console.log(key)
   mass[key[0]] = key[1];
}
console.log(mass);
request.setRequestHeader('Content-Type', 'application/json;charset=utf-8');

//request.responseType='json'
request.send(JSON.stringify(mass));
request.onload = function (e) {
   console.log(request.status, request.statusText)
   console.log(request.response);
   console.log(request.getAllResponseHeaders())
}
*/
//6-ой пример отправка FormData
/*
const request = new XMLHttpRequest();
request.open("POST", "https://jsonplaceholder.typicode.com/posts");
const formData = new FormData();
formData.append("name", "Vladimir");

console.log(formData);
request.setRequestHeader('Content-Type', 'multipart/form-data');

//request.responseType='json'
request.send(formData);
request.onload = function (e) {
   console.log(request.status, request.statusText)
   console.log(request.response);
   console.log(request.getAllResponseHeaders())
}
*/
///////////Fetch
/*
response.status - код ответа
//Методы

response.text() – читает ответ и возвращает как обычный текст,
response.json() – декодирует ответ в формате JSON,
response.formData() – возвращает ответ как объект FormData
response.blob() – возвращает объект как Blob (бинарные данные с типом),
response.arrayBuffer() – возвращает ответ как ArrayBuffer (низкоуровневое
представление бинарных данных),
помимо этого, response.body – это объект ReadableStream, с помощью которого
можно считывать тело запроса по частям.
response.headers - содержит все заголовки ответа с методами которые можно увидеть в консоли
Заголовки запроса устанавливаются так:
let response = fetch(protectedUrl, {
  headers: {
    Authentication: 'secret'
  }
});

*/
//1-ый пример получение данных
/*
let func = async function (url) {
      let response = await fetch(url);
   console.log(response.headers)
   console.log(response.headers.get('Content-Type'))
   if (response.ok) {
      let json = await response.json();
      console.log(json)
   } else {
   alert("Ошибка HTTP: " + response.status);
   }
}
func('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
*/
//2-ой пример с blob- лучше в url передать картинку, тогда ок будет
/*let func = async function (url) {
   let response = await fetch(url);

   if (response.ok) {
      let blob = await response.blob();
      console.log(blob);
      let img = document.createElement('img');
      img.style = 'position:fixed;top:10px;left:10px;width:100px';
      document.body.append(img);
      img.src = URL.createObjectURL(blob);
   } else {
   alert("Ошибка HTTP: " + response.status);
   }
}
func('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
*/

//3-ий с POST-запросом
/*
let user = {
  name: 'John',
  surname: 'Smith'
};
let func = async function (url) {
   let response = await fetch(url, {
      method: 'POST',
      mode: 'cors',////////no-cors не работает
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
         'Content-Type': 'application/json;charset=utf-8',
         // 'Content-Type':'application/x-www-form-urlencoded', отправка формой 
         // 'User-Agent': 'Goodle Chrome'
      },
      redirect: 'follow',
      referrer:'no-referrer',
      body: JSON.stringify(user)
   });
   console.log(response.headers)
   console.log(response.headers.get('Content-Type'))
   if (response.ok) {
      let json = await response.json();
      console.log(json)
   } else {
   alert("Ошибка HTTP: " + response.status);
   }
}
func('https://jsonplaceholder.typicode.com/posts');
*/
//4-ый пример - отправка изображений
    canvasElem.onmousemove = function(e) {//этот позволяет наэлементе canvas рисовать мышкой
      let ctx = canvasElem.getContext('2d');//как работает не знаю
      ctx.lineTo(e.clientX, e.clientY);
       ctx.stroke();
       
    };

    async function submit() {
      let blob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));
      let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: blob
      });

      // сервер ответит подтверждением и размером изображения
      let result = await response.json();
      console.log(result);//result.message
    }

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
   e.preventDefault();
   submit();
})











