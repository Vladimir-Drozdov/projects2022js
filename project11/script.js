const form = document.querySelector('form');
const pristine=new Pristine(form, {//не очень понятно
   classTo: 'mistake',
   errorTextParent: 'mistake',
   errorTextClass:'mistake-text',
});//Встроенная валидация отключена
form.addEventListener('submit', function (e) {
   e.preventDefault();
   const isValid = pristine.validate();//валидация включена по меткам html
   if (isValid) {
      console.log('Можно отправлять')
   } else {
      console.log('Нельзя отправлять, форма не валидна')
   }
})



