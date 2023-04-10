import { ref } from "vue"
import type { Ref } from "vue"
import axios from 'axios'

export default function <T> (url:string) {
  // 加载状态
  const loading = ref(true)
  // 请求成功的数据
 // const data = ref<T | null>(null) // 坑，因为不知道传进来的数，需要需要用泛型<>,并且null类型不能给T参数，所以需要给他选择 | null
  const data = ref() as Ref<T> //为什么上面的不行，还需要加可选链
  // 错误信息
  const errorMsg = ref('')
  // 发送请求
  axios.get(url).then(Response =>{
    // 改变加载状态
    loading.value = false
    data.value = Response.data
  }).catch(error => {
    // 改变加载状态
    loading.value = false
    errorMsg.value = error.message || '未知错误'
  })
  return {
    loading,
    data,
    errorMsg,
  }
}