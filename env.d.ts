/// <reference types="vite/client" />
// 加入这段代码能解决ts无法识别后缀名是vue的导出的问题
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}