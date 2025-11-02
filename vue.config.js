// vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'src/Home/index.vue',
      filename: 'index.vue',
      title: 'Home Page'
    },
    find: {
      entry: 'src/find/FindT.vue',
      template: 'src/find/FindT.vue', 
      filename: 'FindT.vue',
      title: 'Find Teacher'
    }
  }
})