import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
// 导入字体图标
import './assets/fonts/iconfont.css'
import { Button, Form, FormItem, Input } from 'element-ui'
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
