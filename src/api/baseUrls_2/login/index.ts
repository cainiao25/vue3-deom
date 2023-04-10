import http from '../../request/configHttp'
import { baseUrls } from '../../baseUrlConfig';
// import  {login}  from './model/index'

// 不同的baseurls
const url = baseUrls.base2

export const $login = (data:any) => {
  return http.post(`${url}/admin/login`,data)
}