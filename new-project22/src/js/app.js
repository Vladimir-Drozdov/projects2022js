import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
let a1 = document.body.parentNode;
console.log(a1);
let a2 = document.querySelector('div > p');
console.log(a2);
let a3 = document.querySelector('[data-item]');
let a4 = document.querySelector('[data-size]');
console.log(a3);
a3.innerHTML = "<p>TTTTT</p>";
console.log(a3.innerHTML);
console.log(a3.innerText);
a2.before(a3);
console.log(a2.getAttribute('name'));
console.log(a4.dataset.size);
console.log(a4.getAttribute('data-size'));
function setScrollToOptions() {
   window.scrollTo({ top: 500, left: 0, behavior: "smooth" });
}
function setScrollIntoView(top) {
   let a6 = document.querySelector('.last');
   a6.scrollIntoView(top);
}

let a5 = document.querySelector('button');
a5.addEventListener("click", setScrollIntoView);

let a6 = a5.clientTop;
let a7 = a5.clientLeft; console.log(a6); console.log(a7);
let a8 = document.documentElement;
console.log(a8.scrollHeight);
a8.scrollTop = 150;
let a9 = document.querySelector('.lorem');
a9.scrollTop = 200;



