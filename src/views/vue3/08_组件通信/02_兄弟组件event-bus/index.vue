<script setup lang='ts'>
import { reactive, toRefs, ref } from 'vue'
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'

</script>

<template>
  <div class="wrop">
    <h1>全局事件总线$bus</h1>
    <br>
    <hr/>
    <div class="box">
      <Child1></Child1>
      <Child2></Child2>
    </div>
  </div>

</template>

<style scoped lang='less'>
.wrop{
  width: 100vw;
  height: 600px;
  background-color: #f03636;
  .box{
    display: flex;
    // justify-content: space-between;
    justify-content: space-between;
  }
}
</style>