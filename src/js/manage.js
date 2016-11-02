import axios from '../vendor/axios.js';
import {renderTitle} from './render.js';
import * as util from './utils.js';

//为所有的按钮设置删除事件
const addEvent = (domList) => {
  let i = 0, len = domList.length;
  for(; i < len; i++){
    domList[i].addEventListener('click', function(){
      let id = this.dataset.index;
      axios.post('/delete', {
        id:id
      }).then((value) => {
        if(value.data.delete && value.data.delete.n > 0){
          util.$('.list').removeChild(this.parentNode);
        }else{
          alert('删除失败');
        }
      })
    }, false);
  }
}

//获取到所有的列表
axios.get('/list').then((value) => {
  util.$('.list').innerHTML = renderTitle(JSON.parse(value.data.listItems)).join('');
  let allBtn = util.$all('.deleteArticle');
  addEvent(allBtn);
}).catch((err) => {
  console.log(`the error happening ${err}`);
})
