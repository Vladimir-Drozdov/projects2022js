// window.console.log(10);
// JSON.parse() и JSON.stringify()
const post = {
  title: 'My post',
  likesQty: 5,
  ty: {
    surname: 'Varis',
  },
};
const r = JSON.stringify(post);
console.log(r);
const r1 = JSON.parse(r);
console.log(r1);
const post2 = JSON.parse(JSON.stringify(post));
post2.ty.name = '000';
post.ty.name = '111';
console.log(post2.ty.name, '', post.ty.name);
function increase(post) {
  post.likesQty += 1;
}
increase(post);
console.log(post.likesQty);
console.log(+'55');
console.log(+'8strict5');
const elem = { ...post };
const q = (post, er = Date()) => ({
  ...post,
  er,
});
console.log(q(post));
const q1 = function (post, er = Date()) {
  return {
    ...post,
    er,
  };
};

console.log(q1(post));

// Вывести ошибку какую-то и дальше код не будет выполняться
// throw new Error('some error');
// try/catch
try {
  throw new Error('some error');
} catch (error) {
  console.log(error);
  console.error(error);// выведет ошибку красным цветом
}
const myArray = [1, 2, 3];
const newArray = myArray.map((el, key, array) => el * 3);
myArray.forEach((el, key, array) => {
  console.log(array);
});

console.warn(newArray);
const { title: rr, t } = post;
console.log(`${rr} ${t}`);

// import sum from './script2.mjs'
// console.log(sum(3, 4)) //запускать: в терминале node потом имя файла, который запускаем
// $ node script.mjs
const tt = 5;
/*
//Промисы - это обещания предоставить результат позже
fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then(response => {
      console.log(response)
      return response.json()
   })
   .then(json => console.log(json))
   .catch(error => console.log(error))
//async/await - упрощение работы с промисами
// async function возвращает промис всегда
/*const asyncFn = async () => {
   return 'Success!'
}P
asyncFn()
   .then(value => console.log(value));
*/
// function getSum(a, b) {
//   const description = 'Сумма двух чисел равна';
//   const sum = a + b;
//   return `${description} ${sum}`;
// }
// function foo(name) {
//   const lastName = name;
// }
let arr1 = [0, 1, 2, 3];
let arr2 = arr1.reduce((result,el, index, array) => array[index - 1]);
console.log(arr2);
console.log(
  (4).toString()
);

console.log(...[1, 2, 3]);