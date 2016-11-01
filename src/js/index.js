import axios from '../vendor/axios.js';
import {renderList} from './render.js';
import * as util from './utils.js';

//首先进行首页请求获取到数据
axios.get('/list').then((value) => {
  // console.log(typeof JSON.parse(value.data.listItems));
  //获取到数据之后进行数据的渲染
  util.$('#content').innerHTML = renderList(JSON.parse(value.data.listItems)).join('');
}).catch((err) => {
  console.log(`the error happening ${err}`);
})
