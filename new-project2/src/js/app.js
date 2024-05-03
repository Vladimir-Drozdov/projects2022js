//import Swiper from "swiper";//ЛУЧШЕ НЕ ИСПОЛЬЗОВАТЬ!!! НЕ БУДУТ РАБОТАТЬ СТРЕЛКИИ ДРУГОЕ

import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();
//import Swiper from 'swiper/bundle';
//import Swiper, { Navigation, Pagination } from 'swiper';

//const swiper = new Swiper();//////////


let myImageSlider = new Swiper('.image-slider', {

   navigation: {//Стрелки
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'

   },
   pagination: {//Появились точки или прогрессбар 
      el: '.swiper-pagination',
      clickable: true,//На них можно кликать
      dynamicBullets: true,//Точки будут изменять свой размер
      renderBullet: function (index, className) {
         return '<span class="' + className + '">' + (index + 1) + '</span>';//Вывод номера точки
      },
      //  type: 'fraction',//Показывает на какой страницы из скольки ты находишься
      //  renderFraction: function (currentClass, totalClass) {
      //     return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';//Показывает на какой страницы из скольки ты находишься

      //  },
      //  type: 'progressbar',//Линия сверху которая заполняется по мере приближение к последнему слайду
   },
   scrollbar: {//Появляется ползунок скролла, работает только вместе с type: 'fraction'
      el: '.swiper-scrollbar',
      draggable: true//Возможность перетаскивать полузнок скрола
   },
   ///////
   simulateTouch: true,//Включение и выключение перетаскивания на ПК
   touchRatio: 1,//чувствительность свайпа,усли увеличить значение,то меньше сил потребуется для перетаскивания слайда
   touchAngle: 45,//угол срабатывания свайпа/перетаскивания
   grabCursor: true,//Курсор перетаскивания, меняет курсор
   // slideToClickedSlide: true,//Переключение на слайд при клике на слайд
   hashNavigation: {
      watchState: true,//У каждого слайда появляется свой адрес, название адреса по тегу data-hash в html, например data-hash="slide-9"
   },
   keyboard: {//Управление клавиатурой
      enabled: true,//Включить/выключить возможность управления клавиатурой
      onlyInViewport: true,//Включить/выключить только когда слайдер в пределах вьюп/орта
      pageUpDown: true,//Включить/выключить управление клавишами pageUp, pageDown
   },
   mousewheel: {//Управление колесом мыши
      sensitivity: 1,//Чувствительность колеса мыши
      eventsTarget: ".swiper-slide",//Класс объекта на котором будет срабатывать прокрутка мыши
   },
   autoHeight: false,//Автовысота, высота слайдера подстраивается под высоту контента
   slidesPerView: 2,
   // grid: { rows: 5, columns: 1 },//Лучше не использовать
   //Кол-во слайдов для показа,можно указывать нецелые числа, можно указать auto
   // watchOverflow: true,//Отключение функционала, если слайдов меньше,чем нужно
   spaceBetween: 30,//Отступ между слайдами в px
   // slidesPerGroup: 1,//Кол-во пролистывааемых слайдов
   centeredSlides: false,//Активный слайд по центру
   initialSlide: 0,//Стартовый слайд, первый слайд - это нулевой слайд, работает без data-hash=""
   slidesPerColumn: 1,//Будут колоны с указанным числом слайдов,slideToClickedSlide: true лучше не использовать с этим и .swiper-slide установить height: calc((100% - 30px) / 2);
   //slidesPerColumnFill: 'row',
   //loop: true,//slidesPerColumn: должен быть равен 1
   //loopedSlides: 3,//Колчисетво дублирующихся слайдов
   //freeMode: true,//Свободный режим, листаем слайды как ленту
   //  autoplay: {//Автопрокуртка
   //    delay: 1000,//Пауза между прокурткой в мс, по умолчанию-3с
   //    stopOnLastSlide: true,//Закончить на последнем слайде
   //    disableOnInteraction: false,//Отключить после ручного переключения
   // },
   // speed: 1800,//Скорость переключения слайдов в мс
   //direction: 'vertical',//или horizontal Вертикальный слайдер, установить .swiper-wrapper и .swiper-container фиксированные высоты

   effect: 'slide',//по умолчанию-slide-листание, fade-переключение слайдов сменой прозрачности, flip-переворот,cube-стоит ограничить ширину всего слайдера для использования cube, coverflow-эффект потока
   // fadeEffect: {//Дополнение к effect: 'fade'
   //    crossFade: true,//Параллельная смена прозрачности
   // }
   // flipEffect: {//Дополнение к effect: 'fade'
   //     slideShadows: true,//Параллельная смена прозрачности
   //  }
   // flipEffect: {//Дополнененик к flip
   //    slideShadows: true,//тень
   //     limitRotation: true//показ только куактивного слайда
   //  }
   // cubeEffect: {//Дополнение к cube
   //    slideShadows: true,
   //     shadow: true,
   //     shadowOffset: 20,
   //     shadowScale: 0.94,
   //   }
   //  coverflowEffect: {//Дополнение к coverflow
   //     rotate: 30,//угол
   //     stretch: 50,//наклонение
   //     slideShadows: true,//тень
   // }
   // breakpoints: {
   //   600: {
   //     slidesPerView: 1,
   //  },
   // 990: {
   //    slidesPerView: 2,
   //  },
   //  1222: {//показывает максимальное значение ширины экрана в пикселях при котором будет работать то что в скобках
   //     slidesPerView: 3,
   //   },
   //или так
   // '@0.75': {//сотоотношение сторон высота делить на ширину, не работает!
   //   slidesPerView: 1,
   //   },
   //  '@1.00': {
   //      slidesPerView: 2,
   //  },
   //  '@1.50': {//показывает максимальное значение ширины экрана в пикселях при котором будет работать то что в скобках
   //     slidesPerView: 3,
   //   },
   // },
   //Ленивый режим
   // preloadImages: false,//ОТключить предзагрузку картинок
   //  lazy: {
   //     loadOnTransitionStart: false,//подгружать на старте переключения слайда
   //     loadPrevNext: false,//Подгружать предыдущие и следующие картинки
   ///  },
   //  watchSlidesProgress: true,//Слежка за видимыми слайдами
   //  watchSlidesVisibility: true,//добавление класса видимым слайдам
   //Конец ленивого режима
   /* thumbs: {// важно: два слайдера не должны иметь один и тот же класс
       swiper: {
          el: '.image-mini-slider',
 
          spaceBetween: 30,
          slidesPerView: 5,
 
       }
    },*/
   //Следующие три свойства помогают показывать слайдер правильно, если изначально он скрыт, и нужно куда-то сначала нажать, чтобы слайдер появился
   //  observer: true,//Обновить свайпер при изменении элементов слайдера
   //  observeParents: true,//Обновить свайпер при изменении родительских элементов слайдера
   //   observeSlideChildren: true,//Обновить свайпер при изменении дочерних элементов
   /* //Виртуальные слайды
    virtual: {
       slides: (function () {
          let slide = []
          for (let i = 0; i < 500; i++) {
             slide.push(`<div class="image-slider__text">Слайд №${i}</div>`);
             console.log(7);
          }
          return slide;
       }()),
    }, */
   //Доступность для людей с ограниченными возможностями
   ally: {
      enabled: true,
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slude',
      lastSlideMessage: 'This is the last slude',
      paginationBulletMessage: 'Go to slide {{index}}',
      notificationClass: 'swiper-notification',
      containerMessage: '',
      containerRoleDescriptionMessagew: '',
      itemRoleDescriptionMessage: '',

   },
   //События
   on: {
      init: function () {//Событие инициализации
         console.log('Слайдер замущен');
      },
      slideChange: function () {//Cобытие смены слайда
         console.log('Слайд переключен');
      }
   },
});
/*new Swiper('.image-in-slider', {//cлайдер в слайдере, лучше отключить SlideToClickedSlide
   grabCursor: true,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,//Точки будут изменять свой размер
   },
   nested: true,//Корректная работа перетаскивания/свайпа для дочернего элемента

});
*/
/*let myTextSlider = new Swiper('.text-slider', { //Без loop:true
   slidesPerView: 2,
   spaceBetween: 30,
});
myImageSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImageSlider;
*/
//Параллакс
/*
new Swiper('.parallax-slider', {
   parallax: true,
   speed: 2000,
   spaceBetween: 30,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   }
})
//Получаем элемент фона с деревом
const bg = document.querySelector('.parallax-slider__bg');

//При движении мышью вызываем функцию, которая меняет положение фона
document.addEventListener("mousemove", function (e) { MoveBackground(e); });

function MoveBackground(e) {
   //Рассчитываем, насколько далеко от начала оси находится курсор: 0 - 0, 0.5 - середина экрана, 1 - ширина экрана (например, 1920)
   //Затем умножаем получившееся число на 30 - настолько будет сдвигаться фон
   //Например, если курсор находится посередине страницы (0.5), то при умножении получится 15
   //Далее отнимаем половину от 30, чтобы фон мог двигаться как влево, так и вправо
   let offsetX = (e.clientX / window.innerWidth * 30) - 15;
   let offsetY = (e.clientY / window.innerHeight * 10) - 5;
   console.log(offsetX + offsetY);
   //Меняем положение фона
   bg.setAttribute("style", "background-position: " + offsetX + "px " + offsetY + "px;");
   const bgg = document.querySelector('.parallax-slider__text');
   //  bgg.style.color = "green";
   bgg.setAttribute("style", "padding-top: " + "30px;");
   bgg.setAttribute("style", "color: " + "green;");
   // bgg.setAttribute("style", "padding-top: " + "30px;");
}
*/

//Параметры слайдера

//let qSlides = myImageSlider.slides.length;//Получаем количество слайдов
//myImageSlider.params.speed = 3000;//Изменение параметра скорость
//Методы
//myImageSliderImageSlider.update();//Обновить слайдер
//myImageSlideTo(2, 800);//Переключиться на слайд 2, скорость 800
//События
//Событие смены слайда
myImageSlider.on('slideChange', function () {
   console.log('Слайд переключен');
});
/*
//Запуск автопрокрутки при наведении
let sliderBlock = document.querySelector('.image-slider');
sliderBlock.addEventListener("mouseenter", function (e) {
   myImageSlider.params.autoplay.disableOnInteraction = false;
   myImageSlider.params.autoplay.delay = 500;
   myImageSlider.autoplay.start();
});
sliderBlock.addEventListener("mouseleave", function (e) {
   myImageSlider.autoplay.stop();
});
*/
/*
//Фрация и прогрессбар одновременно
let mySliderAllSlides = document.querySelector('.image-slider__total');
let mySliderCurrentSlide = document.querySelector('.image-slider__current');
mySliderAllSlides.innerHTML = myImageSlider.slides.length;
myImageSlider.on('slideChange', function () {
   let currentSlide = ++myImageSlider.realIndex;
   mySliderCurrentSlide.innerHTML = currentSlide;
})
*/
