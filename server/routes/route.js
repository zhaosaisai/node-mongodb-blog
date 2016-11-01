const querystring = require('querystring');
const get = require('./get.js');
// 这个方法主要是用于设置路由的
const route = {
  get(path){
    switch(path){
      case 'list':
        get.list().then((value) => {
          this.writeHead(200,{'content-type':'application/json'});
          this.write(JSON.stringify({'listItems':value}));
          this.end();
        })
      break;
    }
  },
  post(req, path){
    //post的请求 我们应该获取到它传送过来的数据
    let body = ""; //用于保存传送过来的数据
    switch(path){
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
