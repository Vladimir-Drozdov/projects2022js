comments=document.querySelector('.comments')
const cabinet = document.querySelector('.cabinet');
const between = document.querySelector('.between');
cabinet.addEventListener('click', function (e) {
   e.preventDefault();
   between.classList.toggle('visible');
   
   if (!between.classList.contains('visible')) {
      comments.style.width = "62.8vw";
   } else {
      comments.style.width = "75.8vw";
   }
   
});































