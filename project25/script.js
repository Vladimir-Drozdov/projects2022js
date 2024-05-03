import * as $ from 'jquery'
import { sayHello, sayBye } from './applicationmgfh'
import './style.css'
import json from '@/json.json'
import image from './rectangle_2_2168.png'
sayHello();
$('pre').html('555');
sayBye();
console.log(6);
console.log('json:', json);
console.log('image:', image)
const div = document.querySelector('div');
div.style.color = "green";
div.style.backgroundColor = "green";