
let week = document.querySelector(`input[type="week"]`);
console.log(week.value);
week.addEventListener('change', function () {
   console.log(week.value);
});
//Как работает пока не понятно!!!
if (window.localStorage) {
   var elements = document.querySelectorAll('[name]');
   for (var i = 0, length = elements.length; i < length; i++){
      (function (element) {
         var name = element.getAttribute('name');
         element.value = localStorage.getItem(name) || element.value;
         element.onkeyup = function () {
            localStorage.setItem(name, element.value);
         };

      })(elements[i]);
   }
}
////////////////////////////

const readonly = document.querySelector(`input[type="tel"][readonly]`);
console.log(readonly.tagName, ' ', readonly.nodeName);
const ul = document.querySelector('#ul');
console.log(ul);

const onClick = function (e) {
   console.log(e.cancelable);
   if (e.target.nodeName === 'UL' || e.target.nodeName==='LI') {
      e.target.innerText = '4444';
      console.log(e.concelable);
   }

}
ul.addEventListener('click', onClick);
//ul.removeEventListener('click', onClick);

console.log(Math.ceil(Math.random() * 10));
console.log(ul.getElementsByClassName.border);