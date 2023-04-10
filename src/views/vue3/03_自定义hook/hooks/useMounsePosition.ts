import { ref, onMounted, onBeforeMount } from 'vue';
export  default function useMounsePosition() {
  const x = ref(-1)
  const y = ref(-1)
  // 点击事件的回调函数
  const clickHandler = (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  }
  // 页面已经加载完毕，再进行点击的操作，所以需要在onMounted函数中
  onMounted(() => {
    window.addEventListener('click', clickHandler)
  })
  // 页面卸载之前的生命周期组合API
  onBeforeMount(() => {
    window.removeEventListener('click', clickHandler)
  })
  return {
    x,y
  }
}