/*
 * @Description-en:
 * @Description-zh:
 * @Author: CodeGetters
 * @version:
 * @Date: 2023-08-06 14:50:30
 * @LastEditors: CodeGetters
 * @LastEditTime: 2023-08-09 15:09:40
 */
import axios, { AxiosInstance } from "axios";
import { start, done } from "@/utils/nprogress";

const service: AxiosInstance = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    start();
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    done();
    return Promise.reject(error);
  },
);

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    done();
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    done();
    return Promise.reject(error);
  },
);

export default service;
