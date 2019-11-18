// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import axios from "axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入swiper轮播图插件

//配置axios,用于发送ajax请求
Vue.prototype.$http=axios;

//使用elementUI的组件，完整引入
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //router: router
  store, //store: store
  components: { App },
  template: '<App/>'
})
