import axios from 'axios';
// import qs from 'qs';
// import { checkStatus, checkCode, baseURL } from './config';

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
  get(url, params){
    return axios({
      url,
      params,
      method: 'get',
      headers: { 'content-type': 'application/json' }
    });
  },
  post(url, params) {
    return axios({
      url,
      params,
      method: 'post',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
  }
};

export default http;

