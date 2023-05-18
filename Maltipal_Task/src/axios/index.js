import axios from 'axios';
export const AxiosGetRequest = async () => {
  const res = await axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts',
  });
  return res;
};
export const AxiosPostRequest = async data => {
  const res = await axios({
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: data,
  });
  return res;
};
export const AxiosPutRequest = async (id, data) => {
  const res = await axios({
    method: 'put',
    url: 'https://jsonplaceholder.typicode.com/posts' + id,
    data: data,
  });
  return res;
};
