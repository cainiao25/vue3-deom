<script setup lang='ts'>
import { reactive, toRefs, ref } from 'vue'
// 接收props
const props = defineProps(['modelValue'])
const $emit = defineEmits(['update:modelValue'])
/**
 * 子组件内部按钮的点击回调
 */
const handler = () => {
  /**
   * 触发自定义事件
   */
  $emit('update:modelValue',props.modelValue+=10)
}
</script>

<template>
  <div class="child">
    <h1>child</h1>
    <h3>number:{{ modelValue }}</h3>
    <el-button @click="handler">父子组件数据同步</el-button>
  </div>

</template>

<style scoped lang='less'>
.child {
  width: 300px;
  height: 300px;
  background-color: antiquewhite;
}
</style>