import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
//Поиск элементов
/*
getElementById(value): выбирает элемент, у которого атрибут id равен value

. Если элемента с таким идентификатором нет, то возвращается null
getElementsByTagName(value): выбирает все элементы, у которых тег равен value

getElementsByClassName(value): выбирает все элементы, которые имеют класс value

querySelector(value): выбирает первый элемент, который соответствует css-селектору value

querySelectorAll(value): выбирает все элементы, которые соответствуют css-селектору value
*/
var elems = document.querySelectorAll(".text p");

for (var i = 0; i < elems.length; i++) {
   console.log("Текст селектора " + i + ": " + elems[i].innerText + "<br/>");
}
//Свойства объекта document
/*
documentElement: предоставляет доступ к корневому элементу <html>

body: предоставляет доступ к элементу <body> на веб-странице

images: содержит коллекцию всех объектов изображений (элементов img)

links: содержит коллекцию ссылок - элементов <a> и <area>, у которых определен атрибут href

anchors: предоставляет доступ к коллекции элементов <a>, у которых определен атрибут name

forms: содержит коллекцию всех форм на веб-странице
*/
//получим корневой узел документа:
var container = document.documentElement;
//Получим все изображения на странице:
var images = document.images;
// изменим первое изображение
//images[0].src = "pics/picture_4.jpg";
//images[0].alt = "Новая картинка";
// перебирем все изображения
for (var i = 0; i < images.length; i++) {

   document.write("<br/>" + images[i].src);
   document.write("<br/>" + images[i].alt);
}
console.log(images);
//Рассмотрим получение всех ссылок на странице
var links = document.links;
for (var i = 0; i < links.length; i++) {

   document.write("<br/>" + links[i].innerText);
   document.write("<br/>" + links[i].href);
}
console.log(links);
//Объект Node. Навигация по DOM
//Объект-Node:
/*
childNodes: содержит коллекцию дочерних узлов

firstChild: возвращает первый дочерний узел текущего узла

lastChild: возвращает последний дочерний узел текущего узла

previousSibling: возвращает предыдущий элемент, который находится на одном уровне с текущим

nextSibling: возвращает следующий элемент, который находится на одном уровне с текущим

ownerDocument: возвращает корневой узел документа

parentNode: возвращает элемент, который содержит текущий узел

nodeName: возвращает имя узла - чаще всего тег, но не всегда

nodeType: возвращает тип узла в виде числа

nodeValue: возвращает или устанавливает значение узла в виде простого текста
*/

var text = document.querySelector("div.text");
var nodes = text.childNodes;
for (let i = 0; i < nodes.length; i++) {
   var type = "";
   if (nodes[i].nodeType === 1)
      type = "элемент";
   else if (nodes[i].nodeType === 2)
      type = "атрибут";
   else if (nodes[i].nodeType === 3)
      type = "текст";

   console.log(nodes[i].nodeName + ": " + type);//Вывод такой, потому что пробелы между узлами тоже считаются узлами
}
console.log("--------------------------------------------")
var articleDiv = document.querySelector("div.text");

// получаем первый дочерний элемент
var node = articleDiv.firstChild;
console.log(node.nodeName);
// обращаемся к следующему узлу, пока он определен
while ((node = node.nextSibling) !== null) {

   console.log(node.nodeName);
}
//Создание, добавление и удаление элементов веб-станицы
/*
createElement(elementName): создает элемент html, тег которого передается в качестве параметра. Возвращает созданный элемент

createTextNode(text): создает и возвращает текстовый узел. В качестве параметра передается текст узла.

appendChild(newNode): добавляет новый узел newNode в конец коллекции дочерних узлов

insertBefore(newNode, referenceNode): добавляет новый узел newNode перед узлом referenceNode

Также существуют: append, prepend, before, after


*/
var elem = document.createElement("div");
var elemText = document.createTextNode("Привет мир");
var art = document.querySelector(".annotation");
elem.appendChild(elemText);
art.append(elem);
//textContent-напрямую присваивает текст
var elem2 = document.createElement("div");
elem2.textContent = "Hello world";
var art2 = art.lastChild.previousSibling.previousSibling;
console.log(art2);
art.insertBefore(elem2, art2);

//Копирование элемента-cloneNode

var art3 = art2.cloneNode(true);
art.append(art3);
//Удаление элемента
art.lastChild.previousSibling.remove();
//Замена элемента
var newNode = document.createElement("h2");
var newNode2 = document.createTextNode("GoodBye");
newNode.prepend(newNode2);
art.replaceChild(newNode, art3);

//Объект Element. Управление элементами

function getChildren(elem) {

   for (var i in elem.childNodes) {

      if (elem.childNodes[i].nodeType === 1) {

         console.log(elem.childNodes[i].tagName);
         getChildren(elem.childNodes[i]);
      }
   }
}
var root = document.documentElement;
console.log(root.tagName);
getChildren(root);
//Свойства innerText и innerHTML
console.log(art.innerText);//innerText аналогичен TextContent
console.log(art.innerHTML);

//getAttribute(attr), setAttribute(attr, value),removeAttribute(attr)
var art4 = art.getAttribute("style");
console.log(art4);
art.setAttribute("style", "width:205px;");
art.removeAttribute("style");
/*
Свойства offsetWidth и offsetHeight определяют соответственно ширину и высоту элемента в пикселях. В ширину и высоту включается граница элемента.

Свойства clientWidth и clientHeight также определяют ширину и высоту элемента в пикселях, но уже без учета границы:
*/

console.log("offsetHeight: " + art.offsetHeight);
console.log("offsetWidth: " + art.offsetWidth);
console.log("clientHeight: " + art.clientHeight);
console.log("clientWidth: " + art.clientWidth);
//getBoundingClientRect().
var clientRect = art.getBoundingClientRect();
console.log("top: " + clientRect.top);
console.log("bottom: " + clientRect.bottom);
console.log("left: " + clientRect.left);
console.log("right: " + clientRect.right);

//Свойство style
art.style = "color:blue;";
art.style.fontFamily = "Verdana;";
art.style.fontSize = "24px;";
//Свойство className
var text = document.querySelector(".text");
text.className = text.className + " annotation";//className удаляет предыдущий класс, если элемент нужно лишить всех классов, то можно указать ""
//Свойство classList
/*его методы
add(className): добавляет класс className

remove(className): удаляет класс className

toggle(className): переключает у элемента класс на className. Если класса нет, то он добавляется, если есть, то удаляется
*/
art.classList.add("text");
//Создание своего элемента HTML
//В JavaScript HTML-элемент представлен интерфейсом HTMLElement.
class HelloMetanit extends HTMLElement {
   constructor() {
      super();
      let welcome = "Доброе утро";
      const hour = new Date().getHours();
      if (hour > 17) {
         welcome = "Добрый вечер";
      } else if (hour > 12) {
         welcome = "Добрый день";
      }
      this.style = "cursor:pointer;"
      this.innerText = welcome;
      // либо так
      // this.textContent = welcome;
   }
   connectedCallback() {
      this.style.color = "red";
      if (this.hasAttribute("hellocolor")) {
         this.style.color = this.getAttribute("hellocolor");
      }
   }
}
//customElements.define(name, constructor, options);//вcтроенная функция
customElements.define("hello-metanit", HelloMetanit);

/*
name: имя кастомного элемента html, который будет представлять класс JavaScript. Важно: имя должно содержать дефис.

constructor: конструктор (по сути класс JavaScript), который представляет кастомный элемент html.

options: необязательный параметр - объект, который настраивает кастомный html-элемент. В настоящий момент он поддерживает один параметр - extends. Он определяет название встроенного html-элемента, который применяется для создания кастомного элемента html.

*/










