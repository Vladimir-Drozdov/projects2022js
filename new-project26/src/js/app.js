import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
//Куки-это небольшие текстовые файлы, в которые браузер записывает данные с посещенных вами сайтов

//Для установки куков достаточно свойству document.cookie присвоить строку с куками
document.cookie = "login=tom31;";
//Строка куки принимает до шести различных параметров: имя куки, значение,
//срок окончания действия(expires), путь(path), домен(domain) и secure.
//Если мы не хотит, чтобы кука удалилась после закрытия браузера следует
//установить параметр expires, т.е. срок действия куки
document.cookie = "loginn=tom32; expires=Mon, 4 July 2022 00:00:00 GMT;";//GMT+3 часа=московское время
//можно установить даут програмно
var expire = new Date();
expire.setHours(expire.getHours() + 4);
document.cookie = "loginnn=tom33;expires=" + expire.toUTCString() + ";";
//В данном случае срок действия куки будет составлять 4 часа.
//Если в друг нам надо установить куки для какого-то определенного пути на сайте,
//то мы можем использовать параметр path.Например, мы хотим установить куки только
//  для пути www.mysite.com/home:
document.cookie = "loginnnn=tom34;expires=Mon, 4 July 2022 00:00:00 GMT;path=/home;";
//Если на нашем сайте есть несколько доменов, и мы хотим установить куки 
//непосредственно для определенного домена, тогда можно использовать
// параметр domain.Например, у нас на сайте есть поддомен blog.mysite.com:
document.cookie = "loginnnnn=tom35;expires=Mon, 4 July 2022 00:00:00 GMT;path=/;domain=blog.mysite.com;";
//Последний параметр - secure задает использование SSL (SecureSockets Layer)
//и подходит для сайтов, использующих протокол https.Если значение этого
// параметра равно true, то куки будут использоваться только при установке
// защищенного соединения ssl.По умолчанию данный параметр равен false.
//Всем кукам лучше давать разное имя

document.cookie = "loginy=tom36;expires=Mon, 4 July 2022 00:00:00 GMT;path=/;domain=http://vin2008h.beget.tech/;secure=false;";
document.cookie = "loginyy=tom37;expires=Mon, 4 July 2022 00:00:00 GMT;path=/;domain=vin2008h.beget.tech;";//!!! domain следует вводить именно так!

document.cookie = "loginyy=tom38;expires=4 July 2022 00:00:00 GMT;path=/;domain=vin2008h.beget.tech;";//И так можно тоже
document.cookie = "loginyyr=tom39;expires=Mon, 4 July 2022 00:00:00 GMT;path=/;domain=http://vin2008h.beget.tech;";
//Получение куки
document.cookie = "country=Germany;";
document.write(document.cookie);
console.log(document.cookie);
var cookies = document.cookie.split(";");
console.log(cookies);
for (var i = 0; i < cookies.length; i++) {

   var parts = cookies[i].split("="),
      name = parts[0],
      value = parts[1];
   document.write("Имя куки: " + name + "<br/>");
   document.write("Значение: " + value + "<br/><br/>");
}

//web storage.-состоит из двух компонентов: session storage и local storage.
//Session storage представляет временное хранилище информации, которая
//удаляется после закрытия браузера.
//Local storage представляет хранилище для данных на постоянной основе.
//Для сохранения данных надо передать в метод setItem() объекта localStorage. 
//В этот метод передаются два значения:ключ и значение сохраняемого объекта
localStorage.setItem("login", "tom32@gmail.com");
//метод getItem()-получение сохраненных данных
var login = localStorage.getItem("login");
console.log(login);//tom32@gmail.com
//Чтобы удалить объект, применяется метод removeItem()
localStorage.removeItem("login");
//И для полного удаления всех объектов из localStorage можно использовать метод clear():
localStorage.clear();
//данные в localStorage сохраняются в виде строки
localStorage.setItem("age", 23);
var age = localStorage.getItem("age");
age = parseInt(age) + 10;
document.write(age); //33
//Сохранение сложных объектов
var user = {
   name: "Tom",
   age: 23,
   married: false
};

localStorage.setItem("user", JSON.stringify(user));
console.log();
var savedUser = JSON.parse(localStorage.getItem("user"));
console.log(localStorage.getItem("user"));
console.log(savedUser);
document.write(savedUser.name + " " + savedUser.age + " " + savedUser.married); // Tom 23 false

////////////////////
/////Конец теории
var r = "king";
document.cookie = `log=${r}`;
console.log(document.cookie.split(";"));
console.log(document.cookie.split(";")[document.cookie.split(";").length - 1]);








