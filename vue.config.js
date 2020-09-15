const path = require('path')
module.exports = {
  devServer: {
    port: 9527,
    open: true,
    proxy: {
      '/database': { // 请求 接口 以 /api开头，自动匹配
        target: 'https://api.it120.cc', // 目标地址
        ws: false,
        changeOrigin: true, // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          '^/database': '/database'
        } // 这里重写路径
      }
    }
  },
  lintOnSave: false,
}