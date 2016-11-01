import {formatDate} from './utils.js';

export function renderList(data){
  return data.map((obj) => {
    return `<div class="items">
              <h3 class="item-title"><a href="#">${obj.title}</a></h3>
              <div class="item-content">
                ${obj.content}
              </div>
              <h6 class="item-time">${formatDate(new Date(obj.time))}</h6>
          </div>
          `;
  })
}
