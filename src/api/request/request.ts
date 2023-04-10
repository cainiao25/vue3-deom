import axios from 'axios'
import { ref } from "vue"
import type { Ref } from "vue"
import { ElLoading, ElMessage } from 'element-plus'
// import { getToken } from '@/utils/auth'

    /**
     * 创建axios实例，
     */
    const service = axios.create({
      // 公共接口
      // baseURL: 'http://jsonplaceholder.typicode.com',
      timeout: 30000, // 请求超时时间(毫秒)
      // withCredentials: true,// 异步请求携带cookie
      // headers: {
      // 设置后端需要的传参类型
      // 'Content-Type': 'application/json',
      // 'token': x-auth-token',//一开始就要token
      // 'X-Requested-With': 'XMLHttpRequest',
      // },
    })

    /**
     * 旋转动画
     */
    let loadObj:any

    /**
     * request请求拦截器
     */
    service.interceptors.request.use(
      (config) => {
        // // 如果你要去localStor获取token
        // // let token = localStorage.getItem("x-auth-token");
        // let token: string = ''//此处换成自己获取回来的token，通常存在在cookie或者store里面
        // if (token) {
        //   // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
        //   config.headers['X-Token'] = token
        //   //添加请求头
        //   config.headers.Authorization = + token
        // }

        /**
         * 封装的loading
         */ 
        if (!loadObj) {
          loadObj = ElLoading.service({
            lock: true,
            text: 'Loading',
            background: 'rgba(0, 0, 0, 0.7)',
          })
        }
        // 封装的loading end

        //如有需要：注意使用token的时候需要引入cookie方法或者用本地localStorage等方法，推荐js-cookie
        //const token = getCookie('名称');//这里取token之前，你肯定需要先拿到token,存一下
        //if(token){
        //config.params = {'token':token} //如果要求携带在参数中
        //config.headers.token= token; //如果要求携带在请求头中
        //}
        return config
      },
      (error) => {
        // Do something with request error
        console.log("出错啦", error) // for debug
        setTimeout(() => {
          loadObj.close();
        }, 300);
        return Promise.reject(error)
      }
    )


    // response响应拦截器
    service.interceptors.response.use(
      (response: any) => {
        setTimeout(() => {
          loadObj.close();
        }, 300);
        const res = response.data;

        // return res;
        if (res.Status == 0) {
          return res;
        } else {
          ElMessage(res.Message);
          return res;
        }
      },
      (error) => {
        // 返回报错信息
        if (error && error.response) {
          switch (error.response.status) {
            case 400:
              error.message = `错误请求`;
              break;
            case 401:
              error.message = `未授权，请重新登录`;
              break;
            case 403:
              error.message = `拒绝访问`;
              break;
            case 404:
              error.message = `请求错误,未找到该资源`;
              break;
            case 405:
              error.message = `请求方法未允许`;
              break;
            case 408:
              error.message = `请求超时`;
              break;
            case 500:
              error.message = `服务器端出错`;
              break;
            case 501:
              error.message = `网络未实现`;
              break;
            case 502:
              error.message = `网络错误`;
              break;
            case 503:
              error.message = `服务不可用`;
              break;
            case 504:
              error.message = `网络超时`;
              break;
            case 505:
              error.message = `http版本不支持该请求`;
              break;
            default:
              error.message = `未知错误${error.response.status}`;
          }
        } else {
          error.message = "连接到服务器失败";
        }
        setTimeout(() => {
          loadObj.close();
        }, 300);
        ElMessage(error.message);
        
        
        // console.log('err' + error) // for debug
        // if (error.response.status == 403) {
        //   ElMessage.error('错了')
        // } else {
        //   ElMessage.error('服务器请求错误，请稍后再试')
        // }
        return Promise.reject(error.message)
      }
    )

    // 请求处理  没懂这里是要干嘛
  //   service(options)
  //     .then((res) => {
  //       resolve(res)
  //     })
  //     .catch((error) => {
  //       reject(error)
  //     })
  // })



export default service
