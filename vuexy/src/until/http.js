import axios from 'axios'
let newAxios=axios.create()
// 添加请求拦截器
newAxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers["Authorization"]=window.localStorage.texts//把本地存储登录的账号texts放到请求头
    // console.log(config,"请求");
    
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
newAxios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
export default newAxios