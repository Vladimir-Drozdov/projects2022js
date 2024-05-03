console.log(document.querySelector(`input[type="text"]`).id);
let form = document.querySelector('form');
let text = document.querySelector(`input[type="text"]`);
/*if (form.addEventListener("change", function () {
   try {
      console.log(document.querySelector(`input[type="checkbox"]:checked`).value);
 form.remove();   }
   catch (error) { form.remove(); }
})); */
let target = document.querySelector('.target');
let children = target.children;
console.log(children);
if (target.addEventListener('click', function () {
   
   children[children.length-1].remove();
}));
if (form.addEventListener('submit', function (ev) {
   ev.preventDefault();
   console.log(1);
   text.value = "5555";
}));
let textTemplate = document.querySelector(`template[id="text-tamplate"]`);
console.log(textTemplate)
let content = textTemplate.content;
let content1 = content.querySelector('.text');
console.log(content.querySelector('.text')); 
form.after(content1);
let content2 = content1.cloneNode(false);
content2.innerText = "erty";
console.log(content2);
form.after(content2);
let content3 = content1.cloneNode(true);
content2.after(content3);
let children2 = form.children;
console.log(children2);
let obj = {
   r: 1,
   rr:2,
}
let children3 = Array.from(obj);
console.log(children3);
console.log(1);
console.log([..."ert"]);
const pools = document.querySelectorAll('.pool');
const blocks = document.querySelectorAll('.el');
pools[0].removeChild(blocks[0]);
pools[1].appendChild(blocks[0]);
pools[1].appendChild(blocks[1]);
pools[1].insertBefore(blocks[3], blocks[1]);
const replaced=pools[1].replaceChild(blocks[3], blocks[1]);
pools[0].appendChild(replaced.cloneNode());
if (pools[0].contains(blocks[5])){
   pools[0].style = "background-color:red";
}
//console.log(pools[0].innerHTML);

pools[0].innerHTML = pools[0].innerHTML+'<div class="el el-6"><span>6</span></div>';
pools[0].innerHTML = pools[0].innerHTML + '<button>Игра продолжается</button>';
//blocks[2].innerHTML = '<button>Игра продолжается</button>';
blocks[3].insertAdjacentHTML('beforebegin', `<div class="el el-7"><span>7</span></div>`)
const fragment = document.createDocumentFragment();
console.log(fragment);
fragment.appendChild(blocks[3]);
console.log(fragment);
let fragment2=document.createElement('div');
fragment2.appendChild(fragment);
pools[2].appendChild(fragment2);
console.log(fragment2);
let pool = document.querySelector('.el');
console.log(pool.style);




