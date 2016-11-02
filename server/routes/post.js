const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const config = require('../../config.json');
const DB_URL = config.db.url+'/'+config.db.database;
const database = require('../../db/db.js');
//这个模块主要是用于处理post请求的
const postRequest = {
  //插入数据
  addArticle(data){
    return new Promise((resolve, reject) => {
      MongoClient.connect(DB_URL, (err, db) => {
        if(err){
          reject({'success':'false', 'errorMsg':'保存到数据库失败'})
        }
        database.addArticle(db, data, (result) => {
          resolve(result);
          db.close();
        })
      })
    })
  },
  deleteArticle(id){
    return new Promise((resolve, reject) => {
      MongoClient.connect(DB_URL, (err, db) => {
        if(err){
          reject({'success':'false', 'errorMsg':'删除失败'})
        }
        database.deleteArticle(db, id, (result) => {
          resolve(result);
          db.close();
        })
      })
    })
  }
}
module.exports = postRequest;
