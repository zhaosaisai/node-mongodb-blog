const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const config = require('../../config.json');
const DB_URL = config.db.url+'/'+config.db.database;
const getList = require('../../db/list.js');
//这个模块主要是用于处理get请求的
const getRequest = {
  //处理获取文章列表的接口--用于首页的文章的渲染
  list(){
    //连接数据库
    return new Promise((resolve, reject) => {
      MongoClient.connect(DB_URL, (err, db) => {
        if(err){
          reject({'error':'数据库连接失败'});
        }
        getList(db, (result) => {
          resolve(JSON.stringify(result));
          db.close();
        })
      })
    })
  }
}
module.exports = getRequest;
