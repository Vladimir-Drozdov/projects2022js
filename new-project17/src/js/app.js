import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
//Строки
const name = "Tom";
const name2 = new String("Tom");
console.log(`В строке "name2"  ${name2.length} символов`);
//Метод repeat() позволяет создать строку путем многократного повторения другой строки
console.log(name.repeat(3));   // TomTomTom
//Поиск в строке
const hello = "привет мир. пока мир";
const key = "мир";
const firstPos = hello.indexOf(key);
const lastPos = hello.lastIndexOf(key);
console.log("Первое вхождение: ", firstPos);    // 7
console.log("Последнее вхождение: ", lastPos);  // 17
console.log(hello.includes("мир")); // true
console.log(hello.includes("миг")); // false
console.log(hello.includes("мир", 5));  // true
console.log(hello.includes("привет", 6));   // false
//Выбор подстроки
const world = hello.substring(7, 10); // с 7-го по 10-й индекс
console.log(world); // мир
const bye = hello.substring(12);    // c 12 индекса до конца строки
console.log(bye); // пока мир
const world2 = hello.slice(7, 10); // с 7-го по 10-й индекс
console.log(world2); // мир
const bye2 = hello.slice(12);    // c 12 индекса до конца строки
console.log(bye2); // пока мир
//Управление регистром
console.log(hello.toLowerCase()); // привет том
console.log(hello.toUpperCase()); // ПРИВЕТ ТОМ
//метод charAt() возвращает сам символ, метод charCodeAt() возвращает числовой код этого символа.
console.log(hello.charAt(2));       // и
console.log(hello.charCodeAt(2));   // 1080
//Удаление пробелов-начальных и концевых
let hello2 = "   Привет Том  ";
const beforeLength = hello2.length;
hello2 = hello2.trim();
console.log(hello2);
const afterLength = hello2.length;
console.log("Длина строки до: ", beforeLength);     // 15
console.log("Длина строки после: ", afterLength);   // 10
//Метод concat() объединяет две строки
let hello3 = "Привет ";
let world3 = "мир";
hello3 = hello3.concat(world3);
console.log(hello3); // Привет мир
//Замена подстроки
let hello4 = "Добрый день";
hello4 = hello4.replace("день", "вечер");//заменяет только первое вхождение подстроки
console.log(hello4); // Добрый вечер
//метод - replaceAll() позволяет заменить все вхождения подстроки
let menu = "Завтрак: каша, чай. Обед: суп, чай. Ужин: салат, чай.";
menu = menu.replaceAll("чай", "кофе");
console.log(menu);  // Завтрак: каша, кофе. Обед: суп, кофе. Ужин: салат, кофе.
//Разделение строки, перевод строки в массив
const message = "Сегодня была прекрасная погода";
const messageParts = message.split(" ");
console.log(messageParts);  // ["Сегодня", "была", "прекрасная", "погода"]
//Проверка начала и окончания строки
const hello6 = "let me speak from my heart";
console.log(hello6.startsWith("let"));       // true
console.log(hello6.startsWith("Let"));       // false
console.log(hello6.startsWith("lets"));      // false

console.log(hello6.endsWith("heart"));       // true
console.log(hello6.startsWith("bart"));      // false
console.log(hello6.startsWith("me", 4));     // true, "me" - 4 индекс с начала строки

console.log(hello6.startsWith("my", hello6.length - 8));    // true, "my" - 8 индекс с конца
//Зaполнение строки
let hello7 = "hello".padStart(8);  // "   hello"
console.log(hello7);
hello7 = "hello".padEnd(8);      // "hello   "
console.log(hello7);
let hello8 = "hello".padStart(17, "JavaScript, ");  // "JavaScript, hello"
console.log(hello8);
hello8 = hello8.padEnd(28, " Eugene");      // "JavaScript, hello Eugene Eug"
console.log(hello8);
let hello9 = "123".padStart(6, "0");  // "000123"
console.log(hello9);
hello9 = "123".padEnd(6, "0");       // "123000"
console.log(hello9);
//Шаблоны строк
//html-код в шаблонах
const tom = { name: "Tom", age: 37 };
const markup = `<div>
       <p><b>Name</b>: ${tom.name}</p>
       <p><b>Age</b>: ${tom.age}</p>
   </div>`;

document.body.innerHTML = markup;//<b></b> устанавливает жирное напечатывание шрифта
let people = [{ name: "Tom", age: 37 }, { name: "Sam", age: 41 }, { name: "Bob", age: 21 }];
people = people.map(n => `<li>${n.name}</li>`);
document.body.innerHTML = `<ul>${people}</ul>`;


//Передача шаблона строки в функцию
const person = "Tom";

function check(parts, name) {
   console.log(parts);
   return parts[0] + name + parts[1];
}
let checkedTemplate = check`Person: ${person}.`;//parts - это массив частей шаблона, разделенных вставляемыми динамическими фрагментами. name - это динамически вычисляемый фрагмент шаблона. 
console.log(checkedTemplate);

document.body.innerHTML = checkedTemplate;
//Объект RegExp. Регулярные выражения
const myExp1 = /hello/;// регулярное выражение
const myExp2 = new RegExp("hello");// регулярное выражение
//метод test() возвращает true, если строка соответствует регулярному выражению, и false, если не соответствует.
let initialText = "hello world!";
let exp = /hello/;
let result = exp.test(initialText);
console.log(result); // true

const initialText2 = "beautifull wheather";
const result2 = exp.test(initialText2);
console.log(result2); // false - в строке "beautifull wheather" нет "hello"
//метод exec возвращает ту часть строки, которая соответствует выражению, первое вхождение.
let initialText3 = "hello world hello!";
let exp3 = /hello/;
let result3 = exp3.exec(initialText3);
console.log(result3); // hello

initialText3 = "beautifull wheather";
result3 = exp3.exec(initialText3);
console.log(result3); // null
//Группы символов
let initialText4 = "обороноспособность";
let exp4 = /[абв]/;// строка должна иметь одну из трех букв, можно задать диапозон let exp = /[а-я]/; let exp = /[^а-я]/; - ^ указывает, что строка не должна иметь только определенные символы
let result4 = exp4.test(initialText4);
console.log(result4); // true
let result41 = exp4.exec(initialText4); console.log(result41);
initialText = "город";
result = exp.test(initialText);
console.log(result); // false
initialText = "3di0789";
exp = /[^0-9]/;// можно так указать const exp = /[дт]о[нм]/; - указывает на те строки, которые могут содержать подстроки "дом", "том", "дон", "тон".
result = exp.test(initialText);
console.log(result); // true
let resultt = exp.exec(initialText);
console.log(resultt);
//Флаги выражений
/*
Флаг global позволяет найти все подстроки, которые соответствуют регулярному выражению. По умолчанию при поиске подстрок регулярное выражение выбирает первую попавшуюся подстроку из строки, которая соответствует выражению. Хотя в строке может быть множество подстрок, которые также соответствуют выражению. Для этого применяется данный флаг в виде символа g в выражениях

Флаг ignoreCase позволяет найти подстоки, которые соответствуют регулярному выражению, вне зависимости от регистра символов в строке. Для этого в регулярных выражениях применяется символ i

Флаг multiline позволяет найти подстроки, которые соответствуют регулярному выражению, в многострочном тексте. Для этого в регулярных выражениях применяется символ m

Флаг dotAll позволяет сопоставить точку в регулярном выражении с любым символом текста, в том числе с разделителем строки. Для этого в регулярных выражениях применяется символ s
*/
initialText = "привет Мир";
exp = /мир/i;
result = exp.test(initialText); // true
let text = "hello\nwworld";
exp = /hello.wworld/s;
result = exp.test(text); // true
console.log(result);    // true
console.log(1);
initialText =
   `Lorem5 Lorem4  Lorem3 Lorem3 Lorem3
   Lorem5 Lorem4  Lorem3 Lorem3 Lorem3

   `;
exp = /Lorem3/g;
result = exp.exec(initialText);
console.log(initialText.match(exp));['Lorem3', 'Lorem3', 'Lorem3', 'Lorem3', 'Lorem3', 'Lorem3']
console.log(result);
//Регулярные выражения в методах String
initialText = "Сегодня была прекрасная погода";
exp = /\s/;
result = initialText.split(exp);
result.forEach(value => console.log(value));
//Для поиска всех соответствий в строке применяется метод match():
initialText = "Он пришел домой и сделал домашнюю работу";
exp = /дом[а-я]*/gi;//Символ * указывает на возможность наличия после строки "дом" неопределенного кол-ва символов от а до я
result = initialText.match(exp);
result.forEach(value => console.log(value));
//Метод search находит индекс первого включения соответствия в строке
initialText = "hello world";
exp = /wor/;
result = initialText.search(exp);
console.log(result); // 6
//Метасимволы
/*
\d: соответствует любой цифре от 0 до 9

\D: соответствует любому символу, который не является цифрой

\w: соответствует любой букве, цифре или символу подчеркивания(диапазоны A–Z, a–z, 0–9)

\W: соответствует любому символу, который не является буквой, цифрой или символом подчеркивания(то есть не находится в следующих диапазонах A–Z, a–z, 0–9)

\s: соответствует пробелу

\S: соответствует любому символу, который не является пробелом

.: соответствует любому символу
*/
let phoneNumber = "+1-234-567-8901";
let myExp = /\d-\d\d\d-\d\d\d-\d\d\d\d/;
phoneNumber = phoneNumber.replace(myExp, "00000000000");
document.write(phoneNumber);
//Модификаторы
/*
{ n }: соответствует n - ому количеству повторений предыдущего символа.Например, h{ 3 } соответствует подстроке "hhh"

{ n,}: соответствует n и более количеству повторений предыдущего символа.Например, h{ 3,} соответствует подстрокам "hhh", "hhhh", "hhhhh" и т.д.

{ n, m }: соответствует от n до m повторений предыдущего символа.Например, h{ 2, 4 } соответствует подстрокам "hh", "hhh", "hhhh".

?: соответствует одному вхождению предыдущего символа в подстроку или его отсутствию в подстроке.Например, /h?ome/ соответствует подстрокам "home" и "ome".

+: соответствует одному и более повторений предыдущего символа

*: соответствует любому количеству повторений или отсутствию предыдущего символа
//С двумя последними - сложности
^: соответствует началу строки.Например, ^ h соответствует строке "home", но не "ohma", так как h должен представлять начало строки

$: соответствует концу строки.Например, м$ соответствует строке "дом", так как строка должна оканчиваться на букву м
*/
phoneNumber = "+1-234-567-8901";
myExp = /\+\d-\d{3}-\d{3}-\d{4}/;
phoneNumber = phoneNumber.replace(myExp, "80000000000");
console.log(phoneNumber);
//применение комбинации '\b', которая указывает на соответствие в пределах слова.
initialText = "Языки обучения: Java, JavaScript, C++";
exp = /\bJava\b/g;
result = initialText.replace(exp, "C#");
console.log(result); // Языки обучения: C#, JavaScript, C++
//Группы в регулярных выражениях, заключаются в скобки
initialText = '<img src= "picture.png" />';
exp = /[a-z]+\.(png|jpg)/i;// Так как точка является специальным символом в регулярных выражениях, то она экранируется слешем
result = initialText.match(exp);
result.forEach(function (value, index, array) {

   console.log(value);
   //console.log(array);
});

exp = /(\d{4})-(\d{2})-(\d{2})/;
result = exp.exec("2021-09-06");// или result = ("2021-09-06").match(exp);
console.log(result);

console.log(result[0]); // 2021-09-06
console.log(result[1]); // 2021
console.log(result[2]); // 09
console.log(result[3]); // 06
console.log(`${result[3]}.${result[2]}.${result[1]}`); // 06.09.2021
//Именнованные группы (?<название_группы> ... )
exp = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
result = exp.exec("2021-09-06");
console.log(result);
console.log(result[0]);
console.log(result.groups);         // {year: "2021", month: "09", day: "06"}
console.log(result.groups.year);    // 2021
console.log(result.groups.month);   // 09
console.log(result.groups.day);     // 06
//Утверждения
const text1 = "All costs: $10.53";
const text2 = "All costs: €10.53";

exp = /(?<=\$)\d+(\.\d*)?/;

const result1 = exp.exec(text1);
console.log(result1);   // ["10.53", ".53", index: 12, input: "All costs: $10.53", groups: undefined]

const result21 = exp.exec(text2);
console.log(result21);    // null

//(?<=...)-подстрока должна предваряться другой подстрокой
//(?<!...)-После восклицательного знака ! идет выражение, которым НЕ должна предваряться подстрока.
let str = `Edww wwa
           wwa rdwwe`;
let expr = /wwa/g;
let res = str.match(expr);['wwa', 'wwa']
console.log(res);
let res3 = str.replace(expr, '');
console.log(res3);
let res2 = expr.exec(str);
console.log(res2[1]);
//console.log(res2.groups.year);
/*
const tom2 = { name: "Tom", age: 37 };
const markup2 = `<div>
       <p><b>Name</b>: ${tom.name}</p>
       <p><b>Age</b>: ${tom.age}</p>
   </div>`;
const main = document.querySelector('.main');
main.innerHTML = "ddd";
/*function log(msg) {
   const logElem = document.querySelector(".main");

   const time = new Date();
   const timeStr = time.toLocaleTimeString();
   logElem.innerHTML += timeStr + ": " + msg + "<br/>";
}

log("Logging mouse events inside this container...");

*/