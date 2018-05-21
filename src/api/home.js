import http from './http';

export const getHomeList = (params) => {
  const url = '/home';
  console.log('homeParams', params);
  return http.get({ url, params });
};
