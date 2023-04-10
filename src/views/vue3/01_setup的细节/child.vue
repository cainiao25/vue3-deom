<script setup lang="ts">
import { toRefs } from 'vue'

const props = defineProps({
  //子组件接收父组件传递过来的值
  msg: String,
})
// setup的细节问题 由此可以推断出：setup在执行的时候，当前的组件还没有创建出来，
// 也就意味者：组件实例化对象this根本就不能用
// this是undefined，说明，就不能通过this再去调用data/computed/methods中的相关内容了

// 数据初始化的生命
// 按渲染排序是：

// 一，setup
// 二，beforeCreate
// 三，data
// 四，created

// setup的参数


  console.log('setup执行了');
//使用父组件传递过来的值
// const {msg} =toRefs(props)

//使用父组件传递过来的值

</script>

<template>
  <h1>child子级组件</h1>
  <p>msg:{{ msg }}</p>
</template>

<style scoped></style>