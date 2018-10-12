var path = require('path');
var config = {
  debug: true, //debug 为true时，用于本地调试
  miniAssets(){
    return !this.debug;  // 是否启用静态文件的合并压缩，详见视图中的Loader
  },
  staticHost: "", // 静态文件存储域名
  // mongodb 配置
  db: 'mongodb://localhost:27017/easybook',
}
module.exports = config;