/*
const form = document.querySelector('#form');
const name = document.querySelector('[name="name"]');
const out = document.querySelector('.out');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    out.innerHTML = `Привет ${name.value}!`;
})
function foo(){
    return 1;
}
function foo2(funct) {
    return funct();
}
console.log(foo2(foo));
//Промисы
//resolve и reject могут принимать только один аргумент

const promise = new Promise((resolve, reject) => {
  const randomNumber = Math.random();
    console.log(randomNumber)
    if(randomNumber < .6) {
      return resolve('Все прошло отлично!');
    } else {
      return reject('Что-то пошло не так');
  }

});
promise.then((message) => {
    console.log(message)
}).catch(
    (message) => {
        console.log(message);
    }
).finally(() => console.log(5));

const promise2 = new Promise((resolve) => {
    return resolve(1);
})
promise2.then((result) => { return result + 1 }).then((result2) => { return result2 + 1 }).then((result3) => {
    console.log(result3);
})
//fetch API, ну или просто функция fetch
//результат выполнения fetch - это promise
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((posts) => console.log(posts));
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        if (response.ok) {
            //console.log(response.text());
            return response;
        }
        throw Error(`${response.status}- ${response.statusText}`)//status-код ответа сервера и statusText-пояснительная строка
    })
    .then((response) => response.json())
    .then((posts) => console.log(posts))
    .catch((error) => console.log(error));

async function getResponse() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let content = await response.text();
    console.log(JSON.parse(content));//или вместо последних двух строчек просто response.text()
    
}
getResponse()

//Передаем данные на сервер
const post = {
    id: 1,
    userId: 2,
    title: 'Fetch API',
    body:'Fetach Api-is cool'
}
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
    body: JSON.stringify(post),
})
    .then((response) => response.json())
    .then((posts) => console.log(posts));

//XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () => {
    console.log(xhr.status, xhr.statusText);
});
xhr.open('GET', 'https://25.javascript.pages.academy/code-and-magick/data');

xhr.send();

fetch('https://25.javascript.pages.academy/code-and-magick/data', {
    method: 'GET',
    credentials: 'same-origin'//передача кук серверу
})
    .then((response) => {
        return response.json()
    }).then((json) => {
        console.log(json);
    });

fetch('https://25.javascript.pages.academy/code-and-magick/data', {
    method: 'POST',
    credentials: 'same-origin',//передача кук серверу
    body: new FormData()//передаем пустой запрос, получаем ошибку
})
    .then((response) => {
        console.log(response.status, response.ok);
        return response.json()
    }).then((json) => {
        console.log(json);
    }).catch((err) => {
        console.log(err);
});

fetch('https://cp.beget.com/login')
    .then((response) => {
        console.log(response.ok, response.status);
})


const sendData = (onSuccess, onFail) => {
    fetch('https://25.javascript.pages.academy/code-and-magick/data')
        .then((response) => {
            if (response.ok) {
            return response.json()
            } else {
                throw onFail('Ошибка');
        }
        }).then((data) => {
            onSuccess(data);
    })
}

sendData(console.log, Error);
*/
const post = {
    id: 1,
    userId: 2,
    title: 'Fetch API',
    body:'Fetach Api-is cool'
}
fetch('http://vin200kc.beget.tech/', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    
    headers: {
        'Content-Type': 'application/json',
       // 'Content-Type':'application/x-www-form-urlencoded', отправка формой 
       //'User-Agent': 'Goodle Chrome'
    },
    redirect: 'follow',
    referrer:'no-referrer',
    body: JSON.stringify(post),
})
    .then((response) => response.json())
    .then((posts) => console.log(posts));

