// const urlDns = "https://192.168.2.23";   // 老叶电脑
// const urlDns = "https://192.168.2.113";   // 本地
// const urlDns = "https://jolongnet.cn";    // 阿里云
const urlDns = "https://111.230.225.181";   // 腾讯云
// const urlDns = 'http://123.207.32.32:8000'   // why 服务器



// vue.config.js=====================================================================================


module.exports = {
  // 打包过程中  相关配置================================
  publicPath: process.env.NODE_ENV === 'production'? './' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  filenameHashing: true,   // 文件名哈希
  runtimeCompiler: false,   // 是否包含运行时编译器vue构建版本
  transpileDependencies: [],   // 转译某一个依赖
  productionSourceMap: false,

  // 解决别名的问题============================================
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'store': '@/store',
        'views': '@/views'
      }
    }
  },
  // 反向代理:   解决访问数据的问题
  devServer: {
    publicPath: process.env.NODE_ENV === 'production'? '/jilinC/' : '/',
    open: false,
    https: false,
    hotOnly: false,
    port: '8012',
    proxy: {
      '/control': {
        target: urlDns,   // 这样 /control 将会替换成 https://111.230.225.181
        changeOrigin: true,
        ws:true,
        // secure: false,  // 如果是https接口，需要配置这个参数
        pathRewrite: {
          '^/control': '/control_app'   // 这种接口配置出来  https://111.230.225.181:8000/control_app/home
        }

      },
      '/hyt': {
        target: urlDns,
        changeOrigin: true,
        ws:true,
        pathRewrite: {
          '^/hyt': ''   // 这种接口配置出来     https://111.230.225.181:8000/home
        }
      },
      '/api': {
        target: 'http://39.97.33.178',
        changeOrigin: true,
        ws:true,
      }
    }
  },
}