import axios from '../vendor/axios.js';
import {renderArticle} from './render.js';
import {getId, $} from './utils.js';

const articleId = getId().id;

axios.get('/article', {
  params:{
    id:articleId
  }
}).then((value) => {
  $('.articles').innerHTML = renderArticle(JSON.parse(value.data.articlesContents))
}).then(() => {
    hljs.initHighlightingOnLoad();
})
