import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

//import Swiper, { Navigation, Pagination } from 'swiper';

//const swiper = new Swiper();//////////
let icon = document.querySelector('.user-header__icon');

icon.addEventListener("click", function (e) {
   let user_menu = document.querySelector('.user-header__menu');
   console.log(1);
   user_menu.classList.toggle('_ar');
});
document.addEventListener("click", function (e) {
   console.log(e);
   if (!e.target.closest('.user-header')) {
      let user_menu = document.querySelector('.user-header__menu');
      //   console.log(1);
      user_menu.classList.remove('_ar');
   }
});
/*
//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
   for (let index = 0; index < sliders.length; index++) {
      let slider = sliders[index];
      if (!slider.classList.contains('swiper-bild')) {
         let slider_items = slider.children;
         if (slider_items) {
            for (let index = 0; index < slider_items.length; index++) {
               let el = slider_items[index];
               el.classList.add('swiper-slide');
            }
         }
         let slider_content = slider.innerHTML;
         let slider_wrapper = document.createElement('div');
         slider_wrapper.classList.add('swiper-wrapper');
         slider_wrapper.innerHTML = slider_content;
         slider.innerHTML = '';
         slider.appendChild(slider_wrapper);
         slider.classList.add('swiper-bild');
      }
      if (slider.classList.contains('_gallery')) {
         //slider.data('lightGallery').destroy(true);
      }
   }
   slider_bild_callback();
}
function slider_bild_callback(params) { }
*/
let main_slider = new Swiper('.main-slider', {
   observer: true,
   observeParents: true,
   slidesPerView: 1,
   spaceBetween: 0,
   autoHeight: true,
   simulateTouch: true,
   mousewheel: {//Управление колесом мыши
      sensitivity: 1,//Чувствительность колеса мыши
      eventsTarget: ".swiper-slide",//Класс объекта на котором будет срабатывать прокрутка мыши
   },
   grabCursor: true,
   // autoHeight: true,
   speed: 800,
   loop: false,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   }
})

















