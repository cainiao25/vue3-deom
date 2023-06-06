<script setup lang='ts'>
import { reactive, toRefs, ref } from 'vue'
import Child from './Child.vue'
import Child2 from './Child2.vue'
// v-model指令：收集表单数据，数据双向绑定
// v-model指令也可以实现组件之间的通信，实现父子组件数据同步的业务
// 父组件给子组件数据props
// 子组件给父组件数据 自定义事件
// 引入子组件
const info = ref('')
const number = ref(10)


// 父组件的数据
const pageNumber = ref (11)
const pageNumber2 = ref (22)

// 自定义事件的回调
const handler = (num:number) => {
  // console.log(number);
  number.value = num
}
</script>

<template>
  <div class="wrop">
    <h1>v-model</h1>
    <h2>number:{{ number }}</h2>
    <input type="text" v-model="info">
    <hr>
    <!-- props:父给儿子的数据 -->
    <!-- <Child :modelValue="number" @update:modelValue="handler"></Child> -->

    <!-- v-model组件身上使用 -->
    <!-- 第一：相当于给子组件传递props[modelValue] = 10 -->
    第二：相当于给子组件绑定自定义事件update:modelValue
    <Child v-model="number"></Child>


    <!-- 这种写法就是给子组件传递了两个props，一个是pageNumber 一个是pageNumber2 -->
    <Child2 v-model:pageNumber="pageNumber" v-model:pageNumber2="pageNumber2"></Child2>
    
  </div>

</template>

<style scoped lang='less'>
.wrop {
  width: 100vw;
  height: 100vh;
  background-color: aqua;
}
</style>