const querystring = require('querystring');
const url = require('url');
const get = require('./get.js');
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
      case "add":
        req.on('data', (chunk) => {
          body += chunk;
        }).on('end', () => {
          let bodyJson = querystring.parse(body);
          this.end(JSON.stringify(bodyJson));
        })
      break;
    }
  }
};

module.exports = route;
