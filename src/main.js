// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store/store"
import font from "../static/javascript/font"
import swiper from "../static/javascript/swiper.min"
import resource from "vue-resource"
import VueLazyload from "vue-lazyload"

Vue.config.productionTip = false
Vue.use(resource);
Vue.use(VueLazyload, {
  	preload:1.3,
  	error: 'static/error.png',//这个是请求失败后显示的图片
  	loading: 'static/img/timg.jpg',//这个是加载的loading过渡效果
  	try: 6,// 这个是加载图片数量
  	attempt:1,
    fade: true
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  VueLazyload,
  template: '<App/>',
  components: { App }
})