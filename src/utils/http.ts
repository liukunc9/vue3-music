import axios from "axios";

// 创建一个axios实例
const axiosInstance = axios.create({
  // 请求超时配置
  timeout: 1000,
  // 部署在svercel的后端接口地址
  baseURL: `http://localhost:3000/`,
});
// 请求拦截器
axiosInstance.interceptors.request.use((config) => {
  // 劫持请求，获取token，为请求添加token
  let token = localStorage.getItem("userToken");
  // 判断是否存在token，如果存在的话，则每个http header都加上token
  if (token) {
    config.headers.set("Access-Token", token);
  }
  return config;
});

// 响应拦截器
axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

interface IHttp {
  get<T>(url: string, params?: any): Promise<T>;
  post<D, R>(url: string, data?: D): Promise<R>;
}

const http: IHttp = {
  get<T>(url: string, params?: any): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      axiosInstance
        .get(url, { params })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  post<D, R>(url: string, data?: D): Promise<R> {
    return new Promise<R>((resolve, reject) => {
      axiosInstance
        .post(url, data, {})
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export default http;
