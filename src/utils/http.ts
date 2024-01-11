import axios, { type AxiosRequestConfig } from "axios";

axios.defaults.baseURL = `http://localhost:3000/`;
// 请求拦截器
axios.interceptors.request.use((config: AxiosRequestConfig | any) => config);

// 响应拦截器
axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

interface IHttp {
  get<T>(url: string, params?: unknown): Promise<T>;
}

const http: IHttp = {
  get(url: string, params: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, { params })
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
