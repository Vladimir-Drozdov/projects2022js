const cabinet = document.querySelector('.cabinet');
const between = document.querySelector('.between');
cabinet.addEventListener('click', function (e) {
   between.classList.toggle('visible');
});
fetch("./mathanalysis.html")
            .then(response => {
               if (response.ok) {
                  console.log("Ответ от index.js: " + response.text());
               return response.text();
               }
               else {
                  throw Error('Ошибка');
               }
            }) 






























