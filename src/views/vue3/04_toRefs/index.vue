<template>
<h1>toRefs的使用</h1>
<!-- <h3>name:{{ state.name }}</h3>
<h3>age:{{ state.age }}</h3> -->



<h3>name: {{ name }}</h3>
<h3>age: {{ age }}</h3>
</template>


<script setup lang="ts">
import { toRefs,reactive,ref } from 'vue';
const state = reactive({
  name: '鸣人',
  age:18,
})
// 如果是return{...state}就像下面这样结构出来。
// toRefs可以把reactive包裹的数据变成普通对象的包裹的ref对象，
// 意思就是toRefs可以把一个响应式对象转换成普通对象，该普通对象的每个property都是一个ref
const state2 = toRefs(state)
// const { name,age } = toRefs(state)
const { name,age } = toRefs(state2)
// 定时器，更新数据，（如果数据变化了，界面也会随之变化，肯定是响应式的数据）
setInterval(() => {
  // state.name += '=='
  state2.name.value += '=='
  console.log('打印了');
  
},2000)

// 举例 toRefs的作用 如果在外部定义了一个hook，需要把name和age，return出去
const useFeatureX = () => {
  const state = reactive({
    name: '火影',
    age: 20
  })
  return {
    ...toRefs(state) // 返回一个对象，对象里的每一个属性的都会变成ref类型的对象 使用了setup关键字，解构出name和age就行。
  }
}
</script>


<style scoped lang="less">

</style>