import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
//alert("Привет мир!");
//Управление окнами
//Метод confirm() отображает окно с сообщением, в котором пользователь должен подтвердить действие двух кнопок OK и Отмена.
/*var result = confirm("Завершить выполнение программы?");
if (result === true)
   document.write("Работа программы завершена");
else
   document.write("Программа продолжает работать");
//метод prompt() позволяет с помощью диалогового окна запрашивать у пользователя какие-либо данные.
var age = prompt("Введите свой возраст:");
document.write("Вам " + age + " лет");
*/
//История браузера. Объект history
document.write("В истории " + history.length + " станиц");
//history.back(); // перемещение назад,к прошлой посмотренной странице
//cпециальный метод go(), который позволяет перемещаться вперед и назад по истории на определенное число страниц
//history.go(-1);//можно ставить отрицательные значения
//Объект location
document.write("<br />" + "Строка запроса: " + location.href + "<br />");
document.write("Путь к ресурсу: " + location.pathname + "<br />");
document.write("Схема: " + location.origin + "<br />");
document.write("Протокол: " + location.protocol + "<br />");
document.write("Порт: " + location.port + "<br />");
document.write("Хост: " + location.host + "<br />");
document.write("Имя хоста: " + location.hostname + "<br />");
document.write("Хэш: " + location.hash + "<br />");
document.write("Поиск: " + location.search + "<br />");
//Объект navigator
document.write(navigator.userAgent);
var browser, uAgent = navigator.userAgent;
//Проверка браузера
if (uAgent.indexOf("Chrome") > -1) {
   browser = "Google Chrome";
} else if (uAgent.indexOf("Safari") > -1) {
   browser = "Apple Safari";
} else if (uAgent.indexOf("Opera") > -1) {
   browser = "Opera";
} else if (uAgent.indexOf("Firefox") > -1) {
   browser = "Mozilla Firefox";
} else if (uAgent.indexOf("MSIE") > -1) {
   browser = "Microsoft Internet Explorer";
}
document.write(browser);
//Объект geolocation - определяет географическое положение пользователя
function success(position) {
   var latitude = position.coords.latitude;
   var longitude = position.coords.longitude;
   var altitude = position.coords.altitude;
   var speed = position.coords.speed;

   document.write("Широта: " + latitude + "<br/>");
   document.write("Долгота: " + longitude + "<br/>");
   document.write("Высота: " + altitude + "<br/>");
   document.write("Скорость перемещения: " + speed + "<br/>");
};

function error(obj) {
   document.write("Ошибка при определении положения");
};
navigator.geolocation.getCurrentPosition(success, error);


















