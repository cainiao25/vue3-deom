import service from './request'

import type { AxiosRequestConfig, AxiosResponse } from "axios";
    // 使用ts的axios---------------------------------
    interface Data {
      [index: string]: unknown;
      // name:'',
      // age:''
    }
    interface Http {
      get(
        url: string,
        data: Data,
        config?: AxiosRequestConfig
      ): Promise<AxiosResponse>;
      post(
        url: string,
        data: Data,
        config?: AxiosRequestConfig
      ): Promise<AxiosResponse>;
      put(
        url: string,
        data: Data,
        config?: AxiosRequestConfig
      ): Promise<AxiosResponse>;
      patch(
        url: string,
        data: Data,
        config?: AxiosRequestConfig
      ): Promise<AxiosResponse>;
      delete(
        url: string,
        data: Data,
        config?: AxiosRequestConfig
      ): Promise<AxiosResponse>;
    }

    const http: Http = {
      get(url, data, config) {
        return service.get(url, {
          params: data,
          ...config,
        });
      },
      post(url, data, config) {
        return service.post(url, data, config);
      },
      put(url, data, config) {
        return service.put(url, data, config);
      },
      patch(url, data, config) {
        return service.patch(url, data, config);
      },
      delete(url, data, config) {
        return service.delete(url, {
          data,
          ...config,
        });
      },
    };

export  default  http;