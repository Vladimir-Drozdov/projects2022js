//Object.assign
let x = { t: 1 };
let y = x;
x = Object.assign({}, x, { a: 2 });
console.log(x);
const input = document.querySelector('input');
console.log(input);
const h2 = document.querySelector('h2');
console.log(h2);
input.addEventListener('change', function (e) {
   h2.innerText = input.value;
})
//Object,freeze() - неглубокая заморозка объекта
const onj = {
   q: 1,
   qq: 2,
   qqq: {
      qe: 2,
      we:3
   }
}
Object.freeze(onj);
onj.q = 2;
onj.qqq.we = -7;
console.log(onj.q, onj.qqq.we)//1,-7
//глубокое копирование
const onj3 = JSON.parse(JSON.stringify(onj));
onj3.qqq.qe = 'ww';
console.log(onj3);
console.log(onj);
function func(){
   alert("Hello");
}
let m = [];
m.push(func);
m.forEach((value) => value());
[1, 2, 3, 4, 5].filter((value) => { value !== 1 });
console.log([1, 2, 3, 4, 5].filter((value) =>  value !== 1 ));
//Размеры прокрутка
console.log(input.clientWidth);
console.log(document.documentElement.clientWidth);
console.log(document.body.scrollWidth);
console.log(document.body.offsetWidth);
console.log(document.body.clientWidth);
console.log(document.documentElement.scrollWidth);
console.log(document.documentElement.offsetWidth);
console.log(document.documentElement.clientWidth);
const input2 = document.querySelectorAll('input')[1];
const input3 = document.querySelectorAll('input')[2];
const into = document.querySelector('.into');
const input4 = document.querySelectorAll('input')[3];
input2.addEventListener('click', function () {
   window.scrollBy(0, 50);
   
})
input3.addEventListener('click', function () {
   window.scrollTo({ top:100, left:50,behavior:'smooth'});
})
input4.addEventListener('click', function () {
   into.scrollIntoView({
      block: 'center',
      inline: 'start',
      behavior: 'smooth'
   });
});
//document.body.style.overflow = "hidden"; запрет прокрутки
