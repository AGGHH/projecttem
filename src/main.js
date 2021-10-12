import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'lib-flexible'
import '@/assets/index.css'
import * as echarts from 'echarts'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import vueConfig from '../vue.config'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
    // 将echarts挂载到Vue原型上
Vue.prototype.$echarts = echarts

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')