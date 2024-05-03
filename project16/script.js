//Если стили не меняются, то панель разработчика-элементы-стили
//и смотреть нужные классы там
const sliderElement = document.querySelector('.level-form__slider');
const value = document.querySelector('.level-form__value')
const specialElement=document.querySelector('.level-form__special')
noUiSlider.create(sliderElement, {
   range:
   {
      min: 0,
      max:100,
   },
   start: 80,//если несколько двигающихся слайдеров надо сделать то
   //[20, 40, 60] пишется так
   step: 1,
   connect: 'lower',//с какой стороны закрашивать слайдер второе значение-upper
   //если несколько слайдером то значения connect уже true или false и их на 
   //на 1 больше чем кол-во слайдеров пример:start: [20, 40, 60] connect: [true,false,true,true]
   tooltips:true,//Включаем возможность показа цифр над движущейся штукой слайдера
   //Класс noUi-tooltip - для изменения стилей этой штуки
   format: {
      to: function (value) {//.format.to нужен для форматирования значения
      //из слайдера и вывода его куда-то (обычно при помощи .get() и других функций)
         if (Number.isInteger(value)) {
            return value.toFixed(0);
         } else {
             return value.toFixed(1);
         }
         
      },
      from: function (value) {//.format.from форматирует значения для слайдера
         return parseFloat(value);//которые получаются при помощи .set() и других
         //функций
      },
   }
})
sliderElement.noUiSlider.on('update', (...rest) => {//обработчик события
//update-поменялось расположение слайдера
   //console.log(rest);
   console.log(sliderElement.noUiSlider.get());
   value.value = sliderElement.noUiSlider.get();
//при помощи get() получаем значение слайдера get() это массив
})

specialElement.addEventListener('change', (e) => {
   if (e.target.checked) {
      sliderElement.noUiSlider.updateOptions({//обновление слайдера
         range: {
            min: 0,
            max: 10,
         },
         step: 0.1,
         start:8,
      });
   } else {
      sliderElement.noUiSlider.updateOptions({
         range:
         {
            min: 0,
            max: 100,
         },
         step: 1,
         
      });
      sliderElement.noUiSlider.set('70.56gdr');//установка начального значения(помимо
      //метода start)
   }
});
//Заблокируем слайдер
sliderElement.setAttribute('disabled', true);
//Разблокируем слайдер
sliderElement.removeAttribute('disabled');
//Удаление слайдера
//sliderElement.noUiSlider.destroy();
//Меняем стили движущегося значка слайдера в CSS
/*#slider .noUi-handle{
   height: 18px;
      width: 18px;
      top: -5px;
      right: -9px;
      
      border-radius: 9px;
}
*/
