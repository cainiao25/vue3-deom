import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index'
import App from './App.vue'
// 验证
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 公共样式
import './assets/common.css'

createApp(App)
  .use(createPinia())
  .use(router)
  .use(ElementPlus)
  .mount('#app')
