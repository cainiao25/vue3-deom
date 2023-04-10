import { defineStore } from "pinia";
import { Names  } from "./store_name";

/**
 * 管理员
 */
type User = {
  name: string,
  age: number
}
const Login = (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name:'管理员',
        age: 23
      })
    },2000)
  })
}

export const useInfoStore = defineStore(Names.TEST, {
  state: () => {
    return {
      name: '我是小明',
      age:10
    }
  },
// getters 类似于 vue 里面的计算属性，可以对已有的数据进行修饰。有两种写法
  getters:{
    // 在之前 name 的基础上拼接上了一个字符串 因为ts所以得加一个类型定义告诉他，就是字符串类型
    // 这个 getter 也是可以像 actions 一样相互调用的
    newName():string {

      return `这是getter修饰过的名称  ${this.name},他的年纪是${this.getAge}` // 这个 getter 也是可以像 actions 一样相互调用的,这里调用了getter里的setAge方法
    },
    getAge():number {
      return this.age
    }
  },

  actions:{
    // 增加年龄
    setAge() {
      this.age++
    },
    // 传参
    setAdd(num:number) { // 注意，这里就不要写箭头函数了，不然 this 指向会出问题。
      this.age += num
    },
    
    // 异步
    async setUser() {
      const result = await Login()
      this.name = result.name
      this.age = result.age
      // actions 同步、异步连用 setUser调用方法setAge
      this.setAdd(1)
    }
  }
}) 