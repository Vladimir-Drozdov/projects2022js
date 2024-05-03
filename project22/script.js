//https://jsonplaceholder.typicode.com/posts

//all - нужен если нужно дождаться результата работы нескольких промисов, принимает в себя массив
//промисов и возвращает промис, который будет завершен успешно, если только абсолютно все промисы
//завершаться успешно, завершится неуспешно, если все промисы завершатся неуспешно
//race-не будет ждать завершения всех промисов, а дождеться завершения лишь одного,
//который первее всех придет к финишу
//resolve и reject - возвращают промис сразу же в нужном сотоянии - завершен у успехом, или с 
//ошибкой
const makePromisesthings = (number) => {
   return new Promise((resolve, reject) => {
      setTimeout(resolve(`Вызов номер ${number}`), 1000);
   })
}
const firstthing = makePromisesthings(1);
const secondthing = makePromisesthings(2);
const thirdthing = makePromisesthings(3);
Promise.all([//race
   firstthing,
   secondthing,
   thirdthing]
).then((value) => console.log(value));
const getData = () => Promise.resolve('Все ОK')// равносильно
const getData2 = () => new Promise((resolve, reject) => { resolve('Все ОK') });
console.log(getData());
//async и await
//async функция возвращает промис, await- возволяет дождаться выполнения промиса
//async + await=делают асинхронный код похожим на синхронный
//await лучше применять к тому, что возвращает промис
//в async await лучше обрабатывать ошибки с помощью try, catch, т.к нет .catch
//await нельзя применять без async
 async function foo(){
    return 1;
}
foo().then((value) => console.log(value));
//или
(async function () {
   let con = await foo();
   console.log(con);
})()

const func = async function () {
   let response = await fetch('https://jsonplaceholder.typicode.com/posts');
   let posts = await response.json();
   console.log((posts));
}
func();