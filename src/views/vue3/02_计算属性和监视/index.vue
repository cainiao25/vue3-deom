<template>
  <h1>计算属性和监视</h1>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏：<input type="text" v-model="user.firstName" placeholder="请输入姓氏"/><br/>
    名字：<input type="text" v-model="user.lastName" placeholder="请输入名字"/><br/>
  </fieldset>
  <fieldset>
    <legend>计算属性和监视的演示</legend>
    姓名：<input type="text" v-model="fullName1" placeholder="显示姓名"><br/>
    姓名：<input type="text" v-model="fullName2" placeholder="显示姓名"><br/>
    姓名：<input type="text" v-model="fullName3" placeholder="显示姓名"><br/>
  </fieldset>
</template>



<script setup lang="ts">
import { reactive,computed,watch,ref,watchEffect } from 'vue';
// 定义一个响应式对象
const user = reactive ({
  firstName:'小明',
  lastName: '小红',
  
})
// 通过计算属性的方式，实现第一个姓名的显示

// 返回的是一个Ref类型的对象

// 计算属性的函数中如果只传入一个回调函数，表示的是get
  const fullName1 = computed(() => {
    return user.firstName + '-' + user.lastName
  })
  console.log(fullName1);

// 如果需要get和set操作需要传入的是一个对象
  const fullName2 = computed( {
    // get(){}和get:() => {} 的区别
    // get()  {
    //   return user.firstName + '-' + user.lastName
    // },
    get:() => {
      return user.firstName + '-' + user.lastName
    },
    set(val:string){
      console.log('===',val);
      const names = val.split('-')
      user.firstName = names[0]
      user.lastName = names[1]
    },
  })
  console.log(fullName2);

  const fullName3 = ref('')
  // 监视--监视指定的数据
  watch(user,({firstName,lastName}) =>{
    fullName3.value =firstName + '-' + lastName
  },{immediate:true,deep:true}) //immediate属性执行一次watch ，deep是深度监视
  

  // 监视，不需要配置imediate，本身默认就会进行监视（默认执行一次）
  // watchEffect(() => {
  //   fullName3.value = user.firstName + '-' + user.lastName
  // })

  // watch -- 可以监视多个数据的
  // watch([user.firstName,user.lastName,fullName3],() => {
  //   // 这里的代码就没有被执行，fullName3是响应式的数据，但是user.firstName，user.lastName不是响应式的数据
  //   console.log('===');
    
  // })
  // 当我们使用watch监视非响应式的数据的时候，代码需要改一下
  // 需要使用回调的形式。
  watch([ () => user.firstName,() => user.lastName,() => fullName3],() => {
    
    console.log('===');
    
  })
</script>



<style>

</style>