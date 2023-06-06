<script setup lang='ts'>
import { reactive, toRefs, ref } from 'vue'
const props = defineProps(['pageNumber','pageNumber2'])
const $emit = defineEmits(['update:pageNumber','update:pageNumber2'])


/**
 * 第一个按钮的回调
 */
const handler = () => {
  $emit('update:pageNumber',props.pageNumber+=1)
}
</script>

<template>
  <div class="child2">
    <h1>child2</h1>
    <h1>同时绑定多个v-model</h1>
    <!-- <el-button @click="$emit('pageNumber',pageNumber+1)">pageNumber:{{ pageNumber }}</el-button> -->
    <el-button @click="handler">pageNumber:{{ pageNumber }}</el-button>
    <el-button>pageNumber2:{{ pageNumber2 }}</el-button>
  </div>

</template>

<style scoped lang='less'>
.child2{
  width: 300px;
  height: 300px;
  background-color: rgb(117, 241, 16);
}
</style>