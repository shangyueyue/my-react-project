import axios from 'axios';

// 请求时的拦截
axios.interceptors.request.use(
  config =>
  // 判断是否存在token，如果存在的话，则每个http header都加上token
    config
  , error =>
  // 当请求异常时做一些处理
    Promise.reject(error)
);

// 响应时拦截
axios.interceptors.response.use(
  response =>
  // 返回响应时做一些处理
    response
  , (error) => {
  // 当响应异常时做一些处理
    if (error.response) {
      // switch (error.response.status) {
      //   case 401:
      //   // 返回 401 清除token信息并跳转到登录页面
      //     cookieStorageService.remove('userInfo');
      //     router.replace({
      //       path: 'Login'
      //     });
      // }
    }
    return Promise.resolve(error.response);
  }
);

