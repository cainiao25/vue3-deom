<script setup lang='ts'>
import { reactive, toRefs, ref } from 'vue'
// 引入$bus对象
import $bus from "../../../../bus/index"

// 点击按钮回调
const handler = () => {
  $bus.emit('car',{car:'你好组件1，我是来自子组件2'})
}
</script>

<template>
  <div class="child2">
    <h1>我是子组件2</h1>
    <el-button @click="handler">点击给兄弟组件1发送信息</el-button>
  </div>

</template>

<style scoped lang='less'>
.child2{
  width:300px ;
  height: 300px;
  background-color: aqua;
}
</style>