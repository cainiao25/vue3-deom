import $axios from '../request/request';
import http from '../request/configHttp'
import { baseUrls } from '../baseUrlConfig';
    // 使用ts的axios  end------------------------------
// 调用测试
// export function getTest() {
//   return request({
//     url: '/xxxxx/',//此处为自己请求地址
//     method: 'get'
//   })
// }

// 不同的baseurls
const url = baseUrls.base3

export const $home = (data:any) => {
  return http.get(url,data)
}