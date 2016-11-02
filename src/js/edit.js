import axios from '../vendor/axios.js';
import {$} from './utils.js';

//获取需要使用的元素
const title = $('.title');
const icon = $('.icon-preview');
const btn = $('.submit-article');

btn.addEventListener('click', () => {
  icon.click();
  let preview = $('.editor-preview');
  //获取需要传递的信息
  axios.post('/addArticle', {
    title: title.value,
    content: preview.innerHTML,
    time: new Date()
  }).then((data) => {
    console.log(data);
  }).catch((err) => {
    console.log(err);
  })
}, false);
