
// import qs from 'qs';
// import { checkStatus, checkCode, baseURL } from './config';
import axios from './axios.config';
// 配置默认值
axios.defaults.baseURL = '';
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

/*
  url:[string]
  params:[object]
*/
const http = {
  get({ url, params }){
    return axios({
      url,
      params,
      method: 'get',
      timeout: 10000,
      withCredentials: true,
      headers: { 'content-type': 'application/json' }
    });
  },
  post(url, params) {
    return axios({
      url,
      params,
      method: 'post',
      timeout: 10000,
      withCredentials: true,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
  },
  request({ url, params, mehtod }){
    switch (mehtod){
      case 'get':
        return this.get({ url, params });
      case 'post':
        return this.post({ url, params });
      default: return this.get({ url, params });
    }
  }
};

export default http;

