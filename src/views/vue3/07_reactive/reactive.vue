<script setup lang="ts">
// 需求：显示用户的相关信息，点击按钮，可以更新用户的相关信息数据

// 作用：定义多个数据的响应式
// const proxy = reactive（obj）：接收一个普通对象然后返回普通对象的响应式代理对象
// 响应式转换是“深层次的”；会影响对象内部所有嵌套的属性
// 内部基于ES6的Proxy实现，通过代理对象操作源对象内部数据都是响应式的
import { ref,reactive } from 'vue';
  const obj = {
    name: '小明',
    age:20,
    gender:'男',
    wife:{
      name:'小惠',
      age: 18,
      cars:[ '1','2','3']
    }
  }
  
  const user = reactive<any>(obj)
  console.log(user);
  const updateUser = () => {
    // user.name = '小红'
    // user.age++
    // user.wife.name = '小黄'
    obj.gender = '女' //这种方式，界面没有更新渲染
    user.gender = '女' //这种方式，界面可以更新渲染，并且这个数据最终也添加到了obj对象上了
    // user对象或者obj对象中移除一个已经存在的属性，哪一种方式会影响界面的更新
    //delete obj.age  //界面没有更新渲染，obj中确实没有了这个age这个属性
    delete user.age //界面更新了渲染，obj中确实没有了这个age这个属性
    // 总结：如果操作代理对象，目标对象中的数据也会随之变化，同时如果想要在操作数据的时候，界面也要跟着重新更新渲染，那么也是操作代理对象
  }
  
</script>

<template>
  <div>
    <h1>reactive的使用</h1>
    <p>名字：{{ user.name }}</p>
    <p>年龄：{{ user.age }}</p>
    <p>性别：{{ user.gender }}</p>
    <p>媳妇：{{ user.wife.name }}</p>]
    <hr>
    <el-button type="primary" @click="updateUser">切换信息</el-button>
  </div>
</template>

<style scoped lang="less">

</style>