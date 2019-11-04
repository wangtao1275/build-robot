// const path = require("path");
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  filenameHashing: false,
  // 生产环境 sourceMap
  productionSourceMap: false,

  // webpack 配置，键值对象时会合并配置，为方法时会改写配置
  // https://cli.vuejs.org/guide/webpack.html#simple-configuration
  configureWebpack: {
    entry: NODE_ENV === "development" ? "./src/main.js" : "./src/index.js",
    output: {
      filename: "build-robot.js",
      library: "buildRobot", // 指定的就是你使用require时的模块名
      libraryTarget: "umd", // libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的
      umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
    },
    optimization: {
      splitChunks: false,
      minimize: true
    },
    resolve: {
      // 增加别名，指向第三方lib
    }
  },

  // webpack 链接 API，用于生成和修改 webapck 配置
  // https://github.com/mozilla-neutrino/webpack-chain
  chainWebpack: config => {
    // 'src/lib' 目录下为外部库文件，不参与 eslint 检测
    config.module
      .rule("eslint")
      .exclude.add("/public/lib")
      .end();
  },

  // 配置高于chainWebpack中关于 css loader 的配置
  css: {
    // 是否开启支持 foo.module.css 样式
    modules: false,

    // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
    extract: false,

    // 是否构建样式地图，false 将提高构建速度
    sourceMap: false,

    // css预设器配置项
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      }     
    }
  },

  devServer: {
    open: process.platform === "darwin",

    host: "0.0.0.0",

    port: 8080,

    https: false,

    hotOnly: false,

    proxy: {
      "/api": {
        target: "http://localhost:8081",
        changeOrigin: true
      }
    }

 
  },
  // 构建时开启多进程处理 babel 编译
  parallel: require("os").cpus().length > 1,

  // 第三方插件配置
  pluginOptions: {}
};
