import {formatDate, getRanLength} from './utils.js';

export function renderList(data){
  return data.map((obj) => {
    let content = obj.content.length > 200 ? getRanLength(obj.content) : obj.content;
    return `<div class="items">
              <h3 class="item-title"><a href="/articles.html?id=${obj._id}" target="_blank">${obj.title}</a></h3>
              <div class="item-content">
                ${content}<span style="display:${obj.content.length > 200 ? 'inline' : 'none'}">......</span>
              </div>
              <h6 class="item-time">${formatDate(new Date(obj.time))}</h6>
          </div>
          `;
  })
}

export function renderArticle(data){
  return `<h2 class="title">
            <span>${data.title}</span>
            <span class="time">${formatDate(new Date(data.time))}</span>
          </h2>
          <div class="content">
            ${data.content}
          </div>
          `;
}
