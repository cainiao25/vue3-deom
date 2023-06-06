<script setup lang='ts'>
import { reactive, toRefs, ref } from 'vue'
import Child from './Child.vue'
const money = ref('我是父组件的信息')
</script>

<template>
  <div class="box">
    <h1>props:我是父组件</h1>
    <Child info="1" :money="money"></Child>
  </div>

</template>

<style scoped lang='less'>
.box{
  background-color: #e71c1c;
  width: 600px;
  height: 600px;
}
</style>