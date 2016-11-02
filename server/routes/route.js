const querystring = require('querystring');
const url = require('url');
const get = require('./get.js');
const post = require('./post.js');
// 这个方法主要是用于设置路由的
const route = {
  get(req,pathes){
    switch(pathes){
      case 'list':
        get.list().then((value) => {
          this.writeHead(200,{'content-type':'application/json'});
          this.write(JSON.stringify({'listItems':value}));
          this.end();
        })
      break;
      case 'article':
        let id = querystring.parse(url.parse(req.url).query).id;
        get.articles(id).then((value) => {
          this.writeHead(200,{'content-type':'application/json'});
          this.write(JSON.stringify({'articlesContents':value}));
          this.end();
        })
      break;
    }
  },
  post(req, pathes){
    //post的请求 我们应该获取到它传送过来的数据
    let body = ""; //用于保存传送过来的数据
    switch(pathes){
      case "addArticle":
        req.on('data', (chunk) => {
          body += chunk;
        }).on('end', () => {
          let bodyJson = JSON.parse(body);
          post.addArticle(bodyJson).then((value) => {
            this.writeHead(200,{'content-type':'application/json'});
            this.write(JSON.stringify({'add':value}));
            this.end();
          })
        })
      break;
      case "delete":
        req.on('data', (chunk) => {
          body += chunk;
        }).on('end', () => {
          let bodyJson = JSON.parse(body);
          post.deleteArticle(bodyJson.id).then((value) => {
            this.writeHead(200,{'content-type':'application/json'});
            this.write(JSON.stringify({'delete':value}));
            this.end();
          })
        })
      break;
    }
  }
};

module.exports = route;
