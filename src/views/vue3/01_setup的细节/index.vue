<script setup lang="ts">
import { ref } from 'vue';
import Child from './child.vue'
const msg = ref('hello')
</script>

<template>
  <h1>index父级组件 -- {{ msg }}</h1>
  <el-button type="primary" @click="msg += '====='">加==(父传子)</el-button>
  <hr>
  <Child :msg="msg"/>
</template>

<style scoped>

</style>