<script setup lang='ts'>
import { reactive, toRefs, ref } from 'vue'
import $bus from '../../../../bus/index'
// 组合式API函数
import { onMounted } from "vue"
// 组件挂载完毕的时候，当前组件绑定一个事件，接收将来兄弟组件传递的数据
onMounted(() => {
  // 第一个参数：即为事件类型， 第二个参数：即为事件回调
  $bus.on('car',(car) => {
    console.log(car);
    
  })
})


</script>

<template>
  <div class="child">
    <h1>我是子组件1</h1>
  </div>

</template>

<style scoped lang='less'>
.child{
  width: 300px;
  height: 300px;
  background-color: rgb(244, 142, 8);
}
</style>