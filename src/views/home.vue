<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
const toPath = (x:string) => {
  router.push({path:x})
} 
</script>

<template>
  <div class="m20">
    <el-button @click="toPath('/login') " type="primary" round>退出登录</el-button>
  </div>
  <div class="flex nav">
    <el-button @click="toPath('/home/vue-study/ref') " type="primary" round>vue3学习</el-button>
    <el-button @click="toPath('/home/maoyan') " type="primary" round>猫眼电影</el-button> 
  </div>
  <div class="m20">
    <router-view/>
  </div>
</template>

<style scoped lang="less">
body{
  padding: 0;
  margin: 0;
}
  .nav{
    margin: 20px;
  }
</style>