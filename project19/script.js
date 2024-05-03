const input = document.querySelector('[type="range"]');
const input2 = document.querySelector('[type="text"]');
const form = document.querySelector('form');
const p = document.querySelector('p');
input.addEventListener('input', function (e) {
   console.log(6);
   let docume= { 
      user:`${input2.value}`,
   };
   console.log(document.cookie);
   fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    
    headers: {
        'Content-Type': 'application/json',
       // 'Content-Type':'application/x-www-form-urlencoded', отправка формой 
        'User-Agent': 'Goodle Chrome'
    },
    redirect: 'follow',
    referrer:'no-referrer',
    body: JSON.stringify(docume),
})
    .then((response) => response.json())
    .then((posts) => console.log(posts));
});

form.addEventListener('submit', () => {
   console.log(5);
})
console.log(input);
p.addEventListener('copy', (e) => {
   alert('dg')
   e.preventDefault();
})
input2.addEventListener('paste', (e) => {
   e.preventDefault();
})
const att = input2.getAttribute('type');
console.log(att);
console.log(input.type);
/*function openWindow() {
   const popup = window.open("https://microsoft.com", "_blank", "width=600,height=400,left=500,top=200");
   setTimeout(() => popup.close(), 1000);
//Метод moveTo() позволяет переместить окно на новую позицию относительно левого верхнего угла экрана.
   popup.moveTo(500, 400);

} */
//openWindow();
