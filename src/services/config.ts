import axios from "axios";

import { AxiosError } from "axios";

const baseURL = "http://127.0.0.1:3000";
const instance = axios.create({
  timeout: 5000,
  baseURL,
});

// 配置拦截器
instance.interceptors.request.use(
  config => {
    return config;
  },
  (error: AxiosError<{ message: string }>) => {
    // 对错误做点什么

    return Promise.reject(error);
  },
);

// 配置响应拦截器
instance.interceptors.response.use(
  response => {
    // 对响应做点什么...
    return response.data;
  },
  // AxiosError<类型参数> 类型参数用于指定 data的类型
  async (err: AxiosError<{ message: string }>) => {
    // 如果因为网络原因，response没有，给提示消息
    if (!err.response) {
      return Promise.reject(err.response);
    }
    const { response } = err;
    // console.log(config)
    // 网络没问题，后台返回了有数据
    if (response.status !== 401) {
      // 不是token失效的问题

      return Promise.reject(err);
    }
  },
);

export default instance;

export type ResDataType = {
  [key: string]: any;
};
