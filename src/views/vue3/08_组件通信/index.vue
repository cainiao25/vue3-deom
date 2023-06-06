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
    <el-button @click="toPath('/home/vue-study/ref/component_communication/props') " type="primary" round>props</el-button>

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