import "./mod1.js";//инициализация модуля без импорта его частей, т.е просто выполнится код внутри
// без импорта частей
//import {hh} from "./mod1.js";
console.log(555);

function fn1() {
    console.log(hh());
}
const fen2 = 333;
const ar = 4;
export { fn1, fen2, ar };
export const ar2 = 44;
export function ret(a) {
    console.log(a * 2);
}
/*export default class User{
    constructor(name) {
        this.name = name;
    }
} */
export default function() {
    console.log(9);
}