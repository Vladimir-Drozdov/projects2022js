let circle = document.querySelectorAll('.circle');
for (let i = 0; i < circle.length; i++){
   //console.log((circle[i].style.backgroundColor));
   if ((circle[i].style.marginLeft) == 300) {
      console.log(2)
      circle[i].style.marginLeft = "0px";
      console.log(parseInt(circle[i].style.marginLeft));
   }
}
let maincircle = document.querySelector('.maincircle');
let wrapper = document.querySelector('.wrapper')
let out = document.querySelector('.out')
let popup=document.querySelector('.popup')
//console.log(maincircle.getBoundingClientRect().x, ' ', maincircle.getBoundingClientRect().y);
//console.log(circle[0].getBoundingClientRect().x);
/*wrapper.addEventListener("mousemove", function (e) {
   out.innerHTML = `${e.clientX} ${e.clientY} ${circle[0].getBoundingClientRect().y} ${Math.round(circle[0].getBoundingClientRect().x)}`
  // while (maincircle.getBoundingClientRect().x + 5 == e.clientX) {
  //    maincircle.getBoundingClientRect().x = e.clientX;
  // }
   maincircle.style.left = e.clientX + 'px';
   maincircle.style.top = e.clientY + 'px';
   for (let i = 0; i < circle.length; i++) {
      if ((e.clientY >= circle[i].getBoundingClientRect().y-10 &&
            e.clientY <= circle[i].getBoundingClientRect().y+10) &&
         (e.clientX >= circle[i].getBoundingClientRect().x-10 &&
            e.clientX <= circle[i].getBoundingClientRect().x+10)) {
         popup.style = "visibility: visible; opacity:1;"
      }
   }
}) */
maincircle.style.left = '10px';
maincircle.style.top = '0px';
document.addEventListener("keydown", function (e) {
   console.log(e.key);
   if (e.key === 'ArrowRight') {
      //maincircle.style.left = String(parseInt(maincircle.style.left)+10)+'px';
      //console.log(String(parseInt(maincircle.style.left)-10)+'px')
      maincircle.style.left = parseInt(maincircle.style.left) + 10 + 'px';
   }
   if (e.key === 'ArrowUp') {
      maincircle.style.top = parseInt(maincircle.style.top) - 10 + 'px';
   }
   if (e.key === 'ArrowDown') {
      maincircle.style.top = parseInt(maincircle.style.top) + 10 + 'px';
   }
   if (e.key === 'ArrowLeft') {
      maincircle.style.left = parseInt(maincircle.style.left) - 10 + 'px';1
   }
  

})


setInterval(func, 1);
function func() {
   //console.log(1);
   for (let i = 0; i < circle.length; i++) {
      if ((parseInt(maincircle.style.top) >= circle[i].getBoundingClientRect().y - 10 &&
         parseInt(maincircle.style.top) <= circle[i].getBoundingClientRect().y + 10) &&
         (parseInt(maincircle.style.left) >= circle[i].getBoundingClientRect().x - 10 &&
            parseInt(maincircle.style.left) <= circle[i].getBoundingClientRect().x + 10)) {
        //popup.style="visibility: visible; opacity: 1;"
         
         popup.classList.toggle('popup2');
      }
   }
}





