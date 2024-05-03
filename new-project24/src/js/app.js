import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
//Обращение к форме
var searchForm = document.search;
console.log(searchForm);
var searchForms;
for (var i = 0; i < document.forms.length; i++) {
   if (document.forms[i].name === "search") {
      searchForms = document.forms[i];
   }
}
document.write(searchForms.name); document.write("<br/>");
document.write(searchForms.name);
var sea = document.forms;
console.log(sea);
console.log(document.forms["settings"]);
var forma = document.querySelectorAll('form');
console.log(forma);
var forma2 = document.getElementsByTagName('form');
console.log(forma2);
//свойство elements
document.write("<br/>");
var search = document.forms["search"];
for (var i = 0; i < search.elements.length; i++) {
   document.write(search.elements[i].name + "<br/>");
}
var searchForm = document.forms["search"];
var keyBox = search.elements["key"];
console.log(keyBox);
document.write("<br/>" + keyBox.name);
keyBox.value = "TT";
console.log(keyBox.form);//Получаем форму
//метод focus()- устанавливает фокус на элемент, blur()- убирает его
keyBox.focus();
//Атрибут action в форме - это адрес, куда должна отправиться форма

function sendForm(e) {
   var val = keyBox.value;
   if (val.length > 5) {
      alert("Недопустимая длина строки");
      e.preventDefault();
   } else {
      alert("Отправка разрешена");
   }
}
var send = document.search.send;
send.addEventListener("click", sendForm);
/* <input type="text"  поддерживает ряд событий, в частности:

focus: происходит при получении фокуса

blur: происходит при потере фокуса

change: происходит при изменении значения поля

select: происходит при выделении текста в текстовом поле

keydown: происходит при нажатии клавиши клавиатуры

keypress: происходит при нажатии клавиши клавиатуры для печатаемых символов

keyup: происходит при отпускании ранее нажатой клавиши клавиатуры
*/
// обработчик изменения текста
function onchange(e) {
   // получаем элемент printBlock
   var printBlock = document.getElementById("printBlock");
   // получаем новое значение
   var val = e.target.value;
   // установка значения
   printBlock.textContent = val;
}
// обработка потери фокуса
function onblur(e) {

   // получаем его значение и обрезаем все пробелы
   var text = keyBox.value.trim();
   if (text === "")
      keyBox.style = "box-shadow: 0 0 15px red";
   else
      keyBox.style = "box-shadow: 0 0 15px green";
}
// получение фокуса
function onfocus(e) {

   // установка цвета границ поля
   keyBox.style = "box-shadow: 0 0 15px blue";
}
keyBox.addEventListener("change", onchange);
keyBox.addEventListener("blur", onblur);
keyBox.addEventListener("focus", onfocus);

var messageBox = document.search.message;

// обработчик ввода символа
function onkeypress(e) {
   // получаем элемент printBlock
   var printBlock2 = document.getElementById("printBlock2");
   // получаем введенный символ
   var val = String.fromCharCode(e.keyCode);
   // добавление символа
   printBlock2.innerText += val;
}

function onkeydown(e) {
   if (e.keyCode === 8) { // если нажат Backspace

      // получаем элемент printBlock
      var printBlock2 = document.getElementById("printBlock2"),
         length = printBlock2.textContent.length;

      console.log(printBlock2.textContent);
      // обрезаем строку по последнему символу
      printBlock2.textContent = printBlock2.textContent.substring(0, length - 1);
   }
}

messageBox.addEventListener("keypress", onkeypress);
messageBox.addEventListener("keydown", onkeydown);
//Флажки и переключатели
var enabledBox = document.search.enabled;
function onclick(e) {
   var printBlock3 = document.getElementById("printBlock3");
   var enabled = e.target.checked;
   console.log(enabled);
   printBlock3.textContent = enabled;

}
enabledBox.addEventListener("click", onclick);

function onclickk(e) {

   var printBlock = document.getElementById("printBlock3");
   var language = e.target.value;
   printBlock.textContent = "Вы выбрали: " + language;
}
for (var i = 0; i < search.languages.length; i++) {
   search.languages[i].addEventListener("click", onclickk);
}
//select и option
//Атрибут size позволяет установить, сколько элементов будут отображаться
//одномоментно в списке.Значение size = "1" отображает только один элемент списка,
//а сам список становится выпадающим.Если установить у элемента select атрибут
//multiple, то в списке можно выбрать сразу несколько значений.
//Все элементы списка доступны через коллекция options. И каждый объект этой коллекции
//имеет свойства index (индекс в коллекции options),
//text(отображаемый текст) и value(значение элемента).Также у коллекции options
//есть свойство selectedIndex
//В JavaScript элементу select соответствует объект HTMLSelectElement,
// а элементу option - объект HtmlOptionElement или просто Option.
var firstLanguage = search.lang.options[0];
console.log("Index: " + firstLanguage.index);
console.log("Text: " + firstLanguage.text);
console.log("Value: " + firstLanguage.value);
//Добавление и удаление элементов списка
var addButton = search.addButton,
   removeButton = search.removeButton,
   languagesSelect = search.lang;
// обработчик добавления элемента
function addOption() {
   // получаем текст для элемента
   var text = search.textInput.value;
   // получаем значение для элемента
   var value = search.valueInput.value;
   // создаем новый элемента
   var newOption = new Option(text, value);
   languagesSelect.options[languagesSelect.options.length] = newOption;
   //или languagesSelect.add(newOption);
}
// обработчик удаления элемент
function removeOption() {

   var selectedIndex = languagesSelect.options.selectedIndex;
   // удаляем элемент 
   languagesSelect.options[selectedIndex] = null;
   //или languagesSelect.remove(selectedIndex);
}
addButton.addEventListener("click", addOption);
removeButton.addEventListener("click", removeOption);
//События элемента select: blur (потеря фокуса), focus (получение фокуса)
// и change(изменение выделенного элемента в списке).
var languagesSelect = search.lang;
function changeOption() {

   var selection = document.getElementById("printBlock3");
   var selectedOption = languagesSelect.options[languagesSelect.selectedIndex];
   selection.textContent = "Вы выбрали: " + selectedOption.text;
}

languagesSelect.addEventListener("change", changeOption);

//////////////////////////////////////////////////////////////////
//Конец теории
let form = document.forms["peck"]["secondinput"];
console.log(form.value);
form.value = "Write me";
console.log(document.forms["peck"].length);
let d = document.forms["peck"].select.options[1].value;
console.log(d);
let d2 = new Option("option4", "opt4");
document.forms["peck"].select.options[3] = d2;
let d3 = document.forms["peck"]["firstinput"].value;
let length = document.forms["peck"]["firstinput"].value.length;
let d4 = d3.substring(0, length - 1);
console.log(d3);
console.log(length);
console.log(d4);
document.forms["peck"]["firstinput"].addEventListener("change", function (e) {
   let d3 = document.forms["peck"]["firstinput"].value;
   let length = document.forms["peck"]["firstinput"].value.length;
   let d4 = d3.substring(0, length - 1);
   console.log(d3);
   console.log(length);
   console.log(d4);
   let d5 = document.peck.select[document.peck.select.selectedIndex];
   //document.forms["peck"]["firstinput"].value = d5.innerText;
   //document.forms["peck"]["firstinput"].value = null;
   //document.forms["peck"]["firstinput"].value = document.forms["peck"]["firstinput"].value.trim();
   //console.log(document.forms["peck"]["firstinput"].value.trim());
});
