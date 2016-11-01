const path = require('path');

module.exports = {
  entry:{
    'index':path.resolve(__dirname, './src/js/index.js'),
    'add':path.resolve(__dirname, './src/js/add.js'),
    'article':path.resolve(__dirname, './src/js/article.js')
  },
  output:{
    filename:'[name].js'
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        loader:'babel-loader',
        query:{
          presets:['es2015']
        }
      }
    ]
  }
}
