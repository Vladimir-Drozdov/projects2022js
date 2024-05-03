const orderForm = document.querySelector('form');
const pristine = new Pristine(orderForm, {
   classTo: 'form_item',//класс объекта, внутри котрого должно всплывать сообщение об ошибке(не обязательно родительский элемент, любой предок)
    errorClass: 'form_item--invalid',// его класс при ошибке
    successClass: 'form_item--valid',//его класс при успехе
    errorTextParent: 'form_item',//родитль элемента, в котром всплывает ошибка
    errorTextTag: 'span',//создаем элемент, в котором всплывет сообщение об ошибке
    errorTextClass: 'form_error2' // класс этого созданного эл-та к отором всплывет ошибка, добавляется в конец родителя, т.е. последний ребенок
//если что-то не получается смотри в файл pristine и редактируй его
},false)//третий аргумент false, значит pristine не будет валидовать форму по мере ввода 

orderForm.addEventListener('submit', (evt) => {
   evt.preventDefault();
   
   pristine.validate();//возвращает true если форма валидна и false в противном случае

})
function validateNickname(value) {
   return value.length >= 6 && value.length <= 20;
}
pristine.addValidator(orderForm.querySelector('#nickname'), validateNickname, 'Нужно короче 20 и больше 6 символов');//первый аргумент элемент формы,
   //который нужно проверить, второй-функция,возвращающая true или false,
   //проверяющая его, и третий аргумент-сообщение, если false
const amountField = orderForm.querySelector('#amount');
const maxAmount = {
   's': 10,
   'm':5
}
function validateAmount(value) {
   const unit = orderForm.querySelector('[name="unit"]:checked');
   return value.length && parseInt(value) <= maxAmount[unit.value];
}
function getAmountErrorMessage() {
   const unit = orderForm.querySelector('[name="unit"]:checked');
   return `Не больше ${maxAmount[unit.value]} штук`
}
pristine.addValidator(amountField, validateAmount, getAmountErrorMessage);

/*function onUnitChange() {
   amountField.placeholder = maxAmount[this.value];
   pristine.validate(amountField);
}
orderForm.querySelectorAll('[name="unit"]')
   .forEach((item) => item.addEventListener('change', onUnitChange))
Второй вариант: */
const second=orderForm.querySelectorAll('.form_item')[1];
second.addEventListener('change', function onUnitChange() {
   const unit = orderForm.querySelector('[name="unit"]:checked');
   amountField.placeholder = maxAmount[unit.value];
pristine.validate(amountField);//возвращает true если точ то в скобках валидно, и false если невалидно + отвечает за сообщения рядом
})
const list = {
   "Доставка": ['Завтра', 'На выходных'],
   "Самовывоз":['Сегодня', 'Завтра']
}
const delivery = document.querySelector('[name="delivery"]');
const date = document.querySelector('[name="date"]');
function deliverydate() {
   return list[delivery.value].includes(date.value);
}
function deliverydatemessage() {
   return `${delivery.value} 
      ${date.value.toLowerCase()}
      ${delivery.value==='Доставка' ? 'невозможна' : 'невозможен'}
   `
}
pristine.addValidator(delivery, deliverydate, deliverydatemessage);//этот не сработает, т.к. первый элемент здесь не является последним дочерним элементом своего родимтеля
pristine.addValidator(date, deliverydate, deliverydatemessage);// сработает
console.log(second.children[0].children[0].matches('[checked]'));
const inp = second.children[0].children[0];
if (inp.closest(".form_item")) {
   console.log('yes')
}