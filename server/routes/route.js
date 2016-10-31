// 这个方法主要是用于设置路由的
const route = {
  get(path){
    switch(path){
      case 'index':
        this.writeHead(200,{'content-type':'application/json'});
        this.write(JSON.stringify({'path':'index11'}));
        this.end();
      break;
    }
  },
  post(path){

  }
};

module.exports = route;
