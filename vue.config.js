module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        // 目标地址
        target: 'http://localhost:3001',
        // 是否进行跨域
        changeOrigin: true,
        // 路径重写
        pathRewrite: { '^/api': '' }
      },
      '/wy': {
        target: 'https://m.you.163.com',
        changeOrigin: true,
        // 路径重写
        pathRewrite: { '^/wy': '' }
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        // 这里的选项会传递给 postcss-loader
        plugins: [
          require('postcss-px2rem')({
            remUnit: 75 // 1rem等于多少px
          })
        ]
      }
    }
  }
}
