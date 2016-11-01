const getList = (db, callback) => {
 //获取文章集合
  let collection = db.collection('articles');
  //查询所有的数据
  collection.find().toArray((err, result) => {
    if(err){
      console.log('查询失败');
      return {'errorMsg':'获取信息失败'};
    }
    callback(result);
  })
}


module.exports = getList;
