import axios from 'axios';

// http request 请求拦截器，有token值则配置上token值
axios.interceptors.request.use(
  config =>
    // if (token) { // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    //   config.headers.Authorization = token;
    // }
    config
  ,
  err => Promise.reject(err)
);

axios.interceptors.response.use(
  response => response,
  (error) => {
    console.log(window.location);
    if (error.response && error.response.status === 401){
      // 这里写清除token的代码
      const { origin, pathname, search } = window.location;
      const pathname1 = pathname.replace(/(^\s+)|(\s+$)/g, '').slice(1);
      window.location.replace(`${origin}/login${search}&pathname=${pathname1}`);
    }
    if (error.response && error.response.status >= 200 && error.response.status < 400){
      return Promise.resolve(error.response.data);
    }
    return Promise.reject(error.response.data);
  }
);

export default axios;
