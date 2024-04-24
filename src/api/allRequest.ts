import { IShop } from '@/types/Job';
import instanceAxios from './instanceAxios';

export const fetchCreatePost = async (data: FormData) => {
  return await instanceAxios.post(`/api/products`, data);
};
export const fetchCreateShop = async (data: FormData | IShop) => {
  return await instanceAxios.post(`/api/shop`, data);
};
export const fetchPostDetail = async (id: string | number) => {
  return await instanceAxios.get(`/api/products/${id}`);
};
