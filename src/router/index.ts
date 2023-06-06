import { createRouter, createWebHashHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

const login = () => import('../views/login.vue')
// vue学习
const vueStudy = () => import('../views/vue3/index.vue')
const ref = () => import('../views/vue3/06_ref/ref.vue')
const home = () => import('../views/home.vue')
const reactive = () => import('../views/vue3/07_reactive/reactive.vue')
const setup = () => import('../views/vue3/01_setup的细节/index.vue')
const calculate = () => import('../views/vue3/02_计算属性和监视/index.vue')
const definitionHook = () => import('../views/vue3/03_自定义hook/index.vue')
const toRefs = () => import('../views/vue3/04_toRefs/index.vue')
const pinia = () => import('../views/vue3/05_pinia的使用/index.vue')
const component_communication = () => import('../views/vue3/08_组件通信/index.vue')
// 猫眼电影
const maoyan = () => import('../views/猫眼电影/index.vue')
// 两种方法
// 第一种自定义 除非是需要添加一些不符合他的规范的就需要用第一种，自己去定义类型
interface IRouterList {
  name?:string,
  path:string,
  component?:any,
  [propname:string]:any
}
// 第二种用内置的 
// RouteRecordRaw 内置的类型接口
const routes :Array<RouteRecordRaw>= [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: login
  },
  {
    path: '/home',
    component: home,
    children: [
      {
        path:"",
        redirect: "/home/vue-study"
      },
      // {
      //   path:"",
      //   redirect: "home/maoyan"
      // },
      // 嵌套录用下面不用假/
      {
        path: "vue-study",
        component: vueStudy,
        children: [
          // 重定向要写完整路径
          {
            path: "",
            redirect: "/ref"
          },
          {
            path: "ref",
            component: ref
          },
          {
            path: "reactive",
            component: reactive
          },
          {
            path: "setup",
            component: setup
          },
          {
            path: "calculate",
            component: calculate
          },
          {
            path: "definitionHook",
            component: definitionHook
          },
          {
            path: "toRefs",
            component: toRefs
          },
          {
            path: "pinia",
            component: pinia
          },
          {
            path: "component_communication",
            component: component_communication,
            children:[
              {
                path:'',
                redirect:'/props'
              }
            ]
          },
        ]
      },
      {
        path: "maoyan",
        component: maoyan
      },
    ]
  }
];


// 3. 创建路由实例
const router = createRouter({

  // 4. 采用hash 模式
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // 采用 history 模式
  // history: createWebHistory(),
  // routes, 
  // short for `routes: routes`
  routes: routes,
});

// 路由守卫
//前置路由
// import { userStore } from '../store/userInfo';
// router.beforeEach((to, from, next) => {
//     const store = userStore();
//     //判断是否有权限返回登录界面
//     if (from.meta.isAuth) {
//         if (store.userInfo.token) {
//             next()
//         } else {
//             next("/login")
//         }
//     } else {
//         console.log("没有权限");
//         next()
//     }
// })
export default router

