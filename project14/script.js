const form = document.querySelector('form');

let pristine = new Pristine(form, {
   classTo: 'item',
    errorClass: 'has-danger',
    successClass: 'has-success',
    
    errorTextParent: 'item',
   
    errorTextTag: 'div',
    
    errorTextClass: 'text-help' 
}, false);
const letname = document.querySelector('[name="name"][id="name"]');
form.addEventListener('submit', function (e) {
   e.preventDefault();
   
   pristine.validate();
})
let vallue;
function functname(value) {
   vallue = value.length;
   return value.length >= 5;
}
function functname2() {
  
   if (vallue == 0) {
      return 'Это поле обязательно';
   } else {
      return 'Больше 5 символов'
  }
}
pristine.addValidator(letname,functname,functname2);
//pristine.addValidator(letname,functname2,'Это поле обязательно');
let pet = document.querySelector('[name="pet"]');
pet.onchange = function () {
   console.log(pet.value);
}
//Прокрутка
const up_button=document.querySelector('.up-button');
window.onscroll = function(){
   console.log("Страницу прокрутили");
   //console.log(window.pageYOffset);
   //window.scrollTo(100, 60);
   if (window.pageYOffset >= 200) {
      up_button.classList.add('show');
   }
   if (window.pageYOffset < 200) {
      up_button.classList.remove('show')
   }

}
window.scrollTo(0, 120);
up_button.onclick = function(){
   window.scrollTo(0, 0);
}
//Строгое и нестрогое равно
console.log(4 == '4');//true
console.log(4 === '4');//false
console.log(4 !== '4');//true
console.log(4 != '4');//false
console.log('////')
console.log(true == '1');//true
console.log(true === 1);//false
console.log(true !== '1');//true
console.log(true != '1');//false