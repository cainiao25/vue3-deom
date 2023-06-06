<script setup lang='ts'>
import { reactive, toRefs, ref } from 'vue'
const props = defineProps(['info','money']) // 数据与对象写法都可以 const props = defineProps({'info','money'})


// 需要使用到defineProps方法接收父组件传递过来的数据
// defineProps是vue3提供方法，不需要引入直接使用
const updateProps = () => {
  // props.money += 10
  // props是只读的
  console.log(props.info);
  
}


</script>

<template>
  <div class="chiled-box">
    <h1>我是子组件</h1>
    <h1>来自父组件的信息1 :{{ props.money }}</h1>
    <!-- props可以省略前面的名字 -->
    <h1>info :{{ info }}</h1>
    <el-button @click="updateProps">修改props数据</el-button>
  </div>
</template>

<style scoped lang='less'>
.chiled-box{
  background-color: rgb(50, 214, 83);
  width: 300px;
  height: 300px;
}

</style>