<script setup lang='ts'>
import { reactive, toRefs, ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const toPath = (x:string) => {
  router.push({path:x})
} 
</script>

<template>
  <div class="flex nav">
    <el-button @click="toPath('/home/vue-study/ref') " type="primary" round>ref</el-button>
    <el-button @click="toPath('/home/vue-study/reactive') " type="primary" round>reactive</el-button>
    <el-button @click="toPath('/home/vue-study/setup') " type="primary" round>setup</el-button>
    <el-button @click="toPath('/home/vue-study/calculate') " type="primary" round>计算属性和监视</el-button>
    <el-button @click="toPath('/home/vue-study/definitionHook') " type="primary" round>自定义hoo</el-button>
    <el-button @click="toPath('/home/vue-study/toRefs') " type="primary" round>toRefs</el-button>
    <el-button @click="toPath('/home/vue-study/pinia') " type="primary" round>pinia的使用</el-button>
    <el-button @click="toPath('/home/vue-study/component_communication') " type="primary" round>组件通信</el-button>
  </div>
  <div class="m20">
    <router-view/>
  </div>

</template>

<style scoped lang='less'>
body{
  padding: 0;
  margin: 0;
}
  .nav{
    margin: 20px;
  }
</style>