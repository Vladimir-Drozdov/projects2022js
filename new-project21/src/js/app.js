import { Grid } from 'swiper';
import { FreeMode } from 'swiper';
import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
let slider1 = new Swiper('.image-slider', {
   //Стрелки
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   //Навигация
   //Булеты, текущее положение, прогрессбар
   pagination: {
      //  el: '.swiper-pagination',
      /*     //буллеты
           clickable: true,//на точки можно кликать и они будут переносить тебя на нужный слайд
           //динамические буллеты
           dynamicBullets: true,//точки изменяют размер
           //Кастомные буллеты -в центре появляется цифра
           renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
           },
     */
      /*    type: 'fraction',
          //Кастомный вывод фракции
          renderFraction: function (currentClass, totalClass) {
             return 'Фото <span class="' + currentClass + '"></span>' +
                ' из ' + '<span class="' + totalClass + '"></span>';
          },
      */
      type: 'progressbar',



   },
   scrollbar: {
      el: '.swiper-scrollbar',
      //Возможность перетаскивания скролла
      draggable: true
   },
   //Включение/отключение перетаскивания на ПК
   simulateTouch: true,
   //чувствительность свайпа
   touchRatio: 1,
   //Угол срабатывания свайпа/перетаскивания
   touchAngle: 45,
   //Курсор перетаскивания
   grabCursor: true,
   //Переключение при клике на слайд
   slideToClickedSlide: false,
   //Навишация по хешу
   hashNavigation: {
      watchState: true,//отслеживать состояние
   },
   //Управление клавиатурой
   keyboard: {
      //Включиь/выключить
      enable: true,
      //Включить/выключить только когда слайдер в пределах вьюпорта
      onlyInViewport: true,
      //Включить/выключить управление клавишами pageUp и pageDown
      pageUpDown: true,
   },
   //Управления колесом мыши
   mousewheel: {
      //Чувствительность колеса мыши
      sensitivity: 1,
      //Класс объекта на котором будет срабатывать прокрутка мышью
      eventsTarget: ".image-slider"
   },
   //Автовысота
   // autoHeight: true,//-высота всего слайдера подстраивается под высоту контента
   //Количество сладйов для показа
   slidesPerView: 2,//можно указывать нецелые числа или 'auto'-для этого в стилях надо установить ширину слайда авто
   //Отключние функционала, если слайдов меньше чем нужно-т.е слайдер отключится
   watchOverflow: true,
   //Отступ между слайдами
   spaceBetween: 30,
   //Количество пролистываемых групп
   slidesPerGroup: 1,
   //Активный слайд по центру
   //centeredSlides: true,
   //Стартовый слайд
   // initialSlide: 1,//для того чтобы работал, надо убрать у слайдов свойство data-hash
   //Мультирядность
   modules: [Grid],
   grid: {
      rows: 1,
      fill: 'row',

   },//для корректной работы отключить автовысоту
   //бесконечный слайдер
   // loop: true,//не работает с мультирядностью
   //Количество дублирующих слайдов 
   //loopedSlides: 3,
   //Свободный режим
   modules: [FreeMode],// если проблемы с колесом мыши, то mousewheel  sensitivity надо правильный установить
   freeMode: {
      enabled: true,
      // minimumVelocity: 0.2,
      // momentum: false,
   },
   //Автопрокрутка
   /*   autoplay: {
         //Пауза между прокруткой
         delay: 1000,
         //Закончить на посмледнем слайде
         stopOnLastSlide: true,
         //Отключить после ручного переключения
         disableOnInteraction: false,
      },
   
      //Скорость
      speed: 100,//поавность прокрутки, чем больше, тем плавнее
   */
   //Вертикальный слайдер
   //direction: 'vertical',
   //Эффекты переключения слайдов
   //Листание
   effect: 'slide',//есть 'slide'-обычный, 'fade', 'flip'-переворачивание, "cube" - 3D-куб - для него лучше ограничить ширину слайдв, 'coverflow';  slidesPerView: 1 -для всех кроме последнего, для него лучше больше 2
   //Дополнение к fade
   /* fadeEffect: {
       //Параллельная смена прозрачности
       crossFade: true,
    }, */
   //Дополнение к flip
   /*  flipEffect: {
        //Тень
        slideShadows: true,
        //Показ только активного слайда
        limitRotation: true,
     }
     */
   //Дополнение к cube
   /* cubeEffect: {
       //Настройки тени
       slideShadows: true,
       shadow: true,
       shadowOffset: 20,
       shadowScale: 0.94,
    }
    */
   //Дополнение к coverflow
   /*  coverflowEffect: {
        //Угол
        rotate: 20,
        //Наложение
        stretch: 50,
        //Тень
        slideShadows: true,
     }
  */
   //Брейкпойнты(адаптив)
   //Ширина экрана
   /*  breakpoints: {
        320: {
           slidesPerView: 1,
        },
        480: {
           slidesPerView: 2,
        },
        920: {
           slidesPerView: 3,
        }, // вряд ли пригодится - можно вместо цифр указывать '@0.75' - высота, деленная на ширину
     },
     */
   //Отключить предзагрузку картинок
   /* preloadImages: false,
     //Lazy Loading
     // подгрузка картинок
     lazy: {
        //Подгрузить на старте переключения слайда
        loadOnTransitionStart: false,
        //Подгрузить предыдущую и следующую картинки
        loadPrevNext: false,
     },
     //Слежка за видимыми слайдами
     watchSlidesProgress: true,
     //Добавление класса видимым слайдам
     watchSlidesVisibility: true,// последние 2 настройки лучше подключать когда slidesPerView: 'auto' или больше 2
     */
   //Зум картинки - увеличение при клике для этого в html коде в оболочке картинки нужно добавить класс swiper-zoom-container
   /*  zoom: {
        //Максимальное увеличение
        maxRatio: 5,
        //Минимальное увеличение
        minRatio: 1,
     },
     */
   //Миниатюры(превью)
   thumbs: {
      //Свайпер с миниатюрами и его  настройки

      swiper: {
         el: '.image-mini-slider',
         slidesPerView: 5,
      }
   },
   //Обновить свайпер при изменении элементов слайдера
   // observer: true,
   //Обновит свайпер при изменении родительских элементов слайдера
   ///  observeParents: true,
   //Обновить свайпер при изменении дочерних элементов слайда
   //  observeSlideChildren: true,


});
//Слайдер в слайдере
new Swiper('.image-in-slider', {
   //Курсор перетаскивания
   grabCursor: false,
   pagination: {
      el: '.swiper-pagination',
      //Буллеты
      clickable: true,
   },

   //Корректная работа перетаскивания/свайпа ждя дочернего слайдера
   nested: true,
   slidesPerView: 3,
});
let slider2 = new Swiper('.text-slider', {
   slidesPerView: 3,
   spaceBetween: 30,
});
//Передача управления одного слайдера другому

slider2.controller.control = slider1;
slider1.controller.control = slider2;

new Swiper('.parallax-slider', {
   //Включаем параллакс
   parallax: true,
   //скорость переключения
   speed: 100,
   //Стрелки
   navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
   }
});















let sw = document.querySelectorAll('.swiper');
let sww = document.querySelector('.elemt');
sww.addEventListener("mouseup", function (event) {
   for (let i in sw) {
      sw[i].style = "opacity:1;";
      console.log(1);
   }
});





