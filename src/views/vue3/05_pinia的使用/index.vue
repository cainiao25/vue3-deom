<script setup lang='ts'>
// 首先需要引入一下我们刚刚创建的store
import { useInfoStore } from '../../../stores/index'
// 因为是个方法，所以我们得调用一下
const userInfo = useInfoStore()

//  解构出pinia里的数据
// 但是有个问题哈，就是解构后的数据，是不具备响应式的，
// 啥意思呢，就是我们修改了 state 的值，页面不会跟着变化
// 结构前的是可以实时渲染的，但是解构后的话是不可以的， 因为解构后的不是响应式数据。
// 官方提供的方法就是使用 storeToRefs 需要导入一下
// 然后把我们解构的对象包裹一下就可以了，这个方法和 toRefs 是类型的，
// const { name, age } = storeToRefs(userInfo)
// 还可以直接操作解构的数据，但是要加.value
// let change = () => {
//     age.value++
//   }

// const { name ,age } =userInfo

// 第一种方法更新 (直接修改)
const changeAge = () => {
  userInfo.age++
}

// 方式二：$patch 函数修改
// 就是 patch 函数，它可以帮助我们批量修改。
const changeMsg = () => {
  userInfo.$patch({
    age: 20,
    name: '小红'
  })
}
// 方式三：$patch 函数修改 
// 和第二种一样都是使用 patch 函数来实现修改，但是有区别，
// 方式二实在 patch 函数中传入修改的对象值，但是这种方式传入的是一个函数，
// 作用是啥子呢？就是可以进行逻辑操作，比如说判断之类的。、
const changeFn = () => {
  userInfo.$patch((state) => {
    state.name = '方法三'
    state.age = 11
  })
}
// 方法四 action 方式 
const changeAction = () => {
  userInfo.setAge()
}
// action 方式传参
const changeAdd = (x: number) => {
  userInfo.setAdd(x)
}

// ---------------------------------------------------------------------
// actions异步
const changeDelay = () => {
  userInfo.setUser()
}

// ----------------------------------------------------------------------
// actions 同步、异步连用
// 这个 actions 里面的方法函数是可以相互调用的
// 就是你 actions 里面有好几个方法，这几个方法是可以调过来调过去的 

// ------------------------------------------------------------------------
// getter 函数
//  和计算属性一样，都存在缓存：
const changeSetmsg = () => {
  userInfo.setUser()
}

// ---------------------------------------------------------------------------------
// pinia常见的api
// $reset的使用 重置state的数据
const changReset = () =>{
  userInfo.$reset()
}

// ---------------------------------------------------------------------------------
// $subscribe：监听 state 数据变化
// $subscribe 使用来监听的，监听 state 数据的变化，
// 只要 state 里面的数据发生了变化，就会自动走这个函数。


// 监听 state 的变化，返回一个工厂函数
userInfo.$subscribe((args,state) => {
  console.log(args,state,'$subscribe：监听 state 数据变化')
})

// ---------------------------------------------------------------------------------
// $onAction：一调用 actions 就触发
userInfo.$onAction((args) => {
    console.log(args,'$onAction：一调用 actions 就触发')
  })

  // 补充一点:，$onAction 刚才的案例我们只传了一个参数，就是一个工厂函数，
  // 其实他还有第二个参数—— true，传 true 的意义是啥呢？就是当这个组件销毁了，这个 $onAction 还可以继续保活。

  // 演示代码
  // userInfo.$onAction((args) => {
  //   args.after(() => {
  //     console.log('after 回调')
  //   })
  //   console.log(args)
  // }, true)

</script>

<template>
  <div>
    <h3>pinia的使用</h3>
    <p>pinia中的信息：{{ userInfo.name }} 年龄：{{ userInfo.age }}</p>
    <br>
    <hr>
    <p>第一种方法更新 (直接修改)</p>
    <el-button @click="changeAge">年龄+1</el-button>
    <hr>
    <p>方式二：$patch 函数修改</p>
    <el-button @click="changeMsg">修改信息</el-button>
    <hr>
    <p>方式三：$patch 函数修改</p>
    <el-button @click="changeFn">修改信息</el-button>
    <hr>
    <p>方法四 action 方式</p>
    <el-button @click="changeAction">action 方式</el-button>
    <el-button @click="changeAdd(2)">action 传参</el-button>
  </div>
  <br>
  <div>
    <h3>actions异步</h3>
    <el-button @click="changeDelay">延迟修改</el-button>
  </div>
  <br>
  <div>
    <h3>actions 同步、异步连用</h3>
  </div>
  <hr>
  <br>
  <div>
    <h3>getter 函数</h3>
    <p>getter: {{ userInfo.newName }}</p>
    <el-button @click="changeSetmsg">修改用户内容</el-button>
  </div>
  <br>
  <div>
    <h3>Pinia的API ，这里演示几个常见的</h3>
    <p>第一个：$reset ：重置到初始值</p>
    <el-button @click="changReset">$reset 充值state的数据</el-button>
    <br>
    <p>第二个：$subscribe：监听 state 数据变化</p>
    <p>监听 state 的变化，返回一个工厂函数 </p>
    <br>
    <p>第三个：$onAction：一调用 actions 就触发</p>
    <p>就是 action 一调用就会被触发 </p>
  </div>
</template>

<style lang='less' scoped></style>