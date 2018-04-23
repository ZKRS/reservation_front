// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', // 挂载点是app, 即index.html中的<div id="app"> </div>上
  router, // 使用的路由规则, 定义在./router/index.js文件中
  components: { App }, // 内部组成部分有App.vue, 即当前目录下的App.vue文件, import App from './App'
  template: '<App/>' //
})
