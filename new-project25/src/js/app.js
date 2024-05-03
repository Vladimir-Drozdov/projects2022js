import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
//JSON (JavaScript Object Notation) представляет легковесный формат хранения данных.
//JSON поддерживает три типа данных: примитивные значения, объекты и массивы.
//Примитивные значения представляют стандартные строки, числа, значение null,
//логические значения true и false.Не хранит функции или переменные
//в JSON названия свойств заключаются в кавычки, как обычные строки.
//Сериализация в JSON и десериализация

var user = {
   name: "Tom",
   married: true,
   age: 30,
};
var serializedUser = JSON.stringify(user);
console.log(serializedUser);// {"name":"Tom","married":true,"age":30}
//Для сериализации объекта javascript в json применяется функция JSON.stringify()
//Для обратной операции - десериализации или парсинга json-объекта в javascript применяется метод JSON.parse()
var tomUser = JSON.parse(serializedUser);
console.log(tomUser);
console.log(tomUser.name);
var use = [3, "Tok"];
console.log(JSON.stringify(use));
