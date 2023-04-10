<script setup lang='ts'>
import { reactive, toRefs, ref } from 'vue'
import * as $axios from '../../api/baseUrls_1/index'
const rate = ref(2);
const getHome = () =>{
  /**
  * 文章标题
  */
  const data = {
    }
  $axios.$home(data).then((res) => {
    console.log(res,'接口数据');
  })
}
getHome()
</script>

<template>
  
  <div>
    <van-rate v-model="rate" />
  </div>

</template>

<style scoped lang='less'>
</style>