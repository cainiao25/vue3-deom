<script setup lang='ts'>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import huadon from '../components/huadon.vue'
import verify from "../components/ts-verify.vue";
const router = useRouter()
const username = ""
const password = ""
// 提交表单
const handleSubmit = () => {

}
const toPath = (x: string) => {
  router.push({ path: x })
} 

</script>
      <!-- 1.vue如何使用token -->
      <!-- 在登陆请求成功后设置token（一般由后端生成token） -->
      <!-- 1，登录成功的时候调用接口，获取token
      2，然后把token存储到pinia的做持久化。

      this.$https.post('api/user/login', postData).then((res) => {
        if(res.code == 0){ //登陆成功
          let accessToken = res.result.token;//从后台返回的token
          localStorage.setItem('accessToken', accessToken); // 用localStorage缓存token值
        }
      }) -->
      <!-- 2.封装http的地方设置全局token（一次性设置，每次http请求就会自动携带token） -->
      
<template>
  <div class="login-container">
    <form class="login-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">用户名：</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div class="form-group">
        <label for="password">密码：</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <!-- 滑动解锁 -->
      <huadon></huadon>
      <button @click="toPath('/home')" type="submit" class="btn-login mt-20">登录</button>
      <!-- verify验证 -->
      <verify ref="verify" />
    </form>
  </div>
</template>

<style lang='less' scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}

h2 {
  font-size: 36px;
  margin-bottom: 30px;
  animation: fadeInDown 1s ease-in-out;
}

.login-form {
  max-width: 400px;
  width: 100%;
  padding: 40px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #fff;
  animation: slideInUp 1s ease-in-out;
}

.form-group {
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    font-size: 18px;
  }

  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
}

.btn-login {
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #1c8adb;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #155d83;
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}</style>