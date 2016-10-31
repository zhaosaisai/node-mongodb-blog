const fs = require('fs');
const mime = require('./mime.js');

module.exports = function(res,pagepath,extname){
  fs.exists(pagepath, (exists) => {
    if(exists){
        // 文件存在--读取文件并返回
        fs.readFile(pagepath, 'binary', (err, file) => {
          if(err){
            // 文件读取出错
            res.writeHead(500,{'content-type':mime['default']});
            res.end('服务器出错啦');
          }else {
            res.writeHead(200,{
              'content-type':mime[extname]
            })
            res.write(file,'binary');
            res.end();
          }
        })
    }else{
      // 文件不存在--返回404的状态
      res.writeHead(404, {
        'content-type':'text/html; charset="utf-8"'
      });

      res.write('<p>你访问的page不存在</p>');
      res.end('<p>你是不是觉得这个page很丑 我会优化的</p>');
    }
  })
}
