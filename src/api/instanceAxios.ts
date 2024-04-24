import { message, notification } from 'antd';
import axios, { AxiosResponse } from 'axios';
import { getCookie, deleteCookie } from 'cookies-next';

const cookie = getCookie('access');
const instanceAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ORIGIN,
  // withCredentials: true,
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  // },
  //   timeout: 1000,
});
// const handleSuccess = (res: AxiosResponse) => {
//   return res.data;
// };

// const handleError = async (error: any) => {};

// instanceAxios.interceptors.response.use(handleSuccess, handleError);
if (cookie)
  instanceAxios.defaults.headers.common.Authorization = `Bearer ${cookie}`;
// instanceAxios.interceptors.response.use(
//   function (response) {
//     // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
//     // Làm gì đó với dữ liệu response
//     return response;
//   },
//   function (error) {
//     if (error.response.status >= 500) {
//       notification.error({
//         message: 'Lỗi server',
//         description: 'Có 1 số vấn đề ở server',
//       });
//     }
//     // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
//     // Làm gì đó với lỗi response
//     return Promise.reject(error);
//   }
// );
export default instanceAxios;
