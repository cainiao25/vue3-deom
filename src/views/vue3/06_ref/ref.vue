<script setup lang="ts">
// ref用来处理基本类型数据，reactive用来处理对象（递归深度响应式）
// 如果用ref对象/数组，内部会自动将对象/数组转换为reactive的代理对象
// ref内部：通过给value属性添加getter/setter来实现对数据的劫持
// reactive内部：通过使用proxy来实现对对象内部所有数据的劫持，并通过Reflect操作对象内部数据
// ref的数据操作：在js中要.value，在模板中不需要（内部解析模板时会自动添加.value）
import { ref,onMounted,reactive } from 'vue';
import * as $axios from '../../../api/baseUrls_3/index'
const favorcities:any =ref({})
const data:any = []
$axios.$home(data).then((res:any) => {
    favorcities.value = res
    console.log(res,'接口数据');
    console.log(favorcities.value.data.data.items,'favorcities333');
  })
  
  console.log(favorcities.value,'favorcities444');
  
  const item = ref([11,22,33])
  let count = ref(0)

  // ref中如果放入的是一个对象，那么是经过了reactive的处理，形成了一个propxy的类型对象
  const user = ref({
    name:'A先生',
    age: 20
  })
  const clickCount = () => {
    count.value++,
    // ref放置对象读取需要加.value
    user.value.name = 'B先生',
    user.value.age ++
    console.log(user,'ref的对象');
    
  }
  
  // 2
  // 默认是空的，页面加载完毕，说明组件已经存在，获取文本框元素
  const inputRef = ref<HTMLElement | null>(null)

  // 页面加载后的生命周期组合API
  onMounted(() => {
    inputRef.value && inputRef.value.focus() // 自动获取输入框的焦点 
  })
</script>

<template>
  <p>{{ item }}</p>
  <div>
    <ul>
      <li v-for="item in favorcities">
        {{ item.address }}
      </li>
    </ul>
  </div>
  <div>
    <h2>setup和ref的基本使用</h2>
    <p>姓名：{{ user.name }}</p>
    <p>年龄：{{ user.age }}</p>
    <h3>{{ count }}</h3>
    <el-button type="primary" @click="clickCount">加一</el-button>
    <h2>ref的另一个作用：可以获取页面中的元素</h2>
    <el-input type="text" ref="inputRef"/>
  </div>
  
</template>

<style scoped>

</style>
