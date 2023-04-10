<template>
  <h1>自定义hook函数操作</h1>
  <h2>x：{{ x }}, y:{{ y }}</h2>
  <h2 v-if="loading">正在加载中</h2>
  <h2 v-else-if="errorMsg">错误信息：{{ errorMsg }}</h2>
  <!-- <ul v-else>
    <li>id: {{ data.id }}</li>
    <li>address: {{ data.address }}</li>
    <li>distance:{{ data.distance }}</li>
  </ul> -->
  <hr>
  <!-- 数组数据 -->
  <ul v-for="item in data" :key="item.id">
    <li>id: {{ item.id }}</li>
    <li>title: {{ item.title }}</li>
    <li>price: {{ item.price }}</li>
  </ul>
</template>


<script setup lang="ts">
import useMounsePosition from './hooks/useMounsePosition'
import { ref, onMounted, onBeforeMount,watch } from 'vue';
import useRequest from './hooks/useRequest'

// 定义接口，约束对象的类型
interface IAddressData {
  id:number,
  address: string,
  distance: number,
} 

interface IProductsData {
  id:number,
  title: string,
  price: number,
}
const { x, y } = useMounsePosition()
// 因为使用了泛型，

// const { loading, data, errorMsg } = useRequest<IAddressData>('/data/address.json') // 获取对象数据

const { loading, data, errorMsg } = useRequest<IProductsData[]>('/data/products.json') //获取数组数据
  watch(data, () => {
    // 如果纯在就显示出来
    // if (data.value) {
    //   console.log(data.value.length);
    // }
  })
</script>


<style scoped></style>