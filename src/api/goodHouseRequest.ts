import { IGoodHousePostCreate, IJob } from '@/types/Job';
import instanceAxios from './instanceAxios';

export const fetchInteriorConditionList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/good-house/interior-condition/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchSellerInformationList = async (
  searchData?: object,
  currentPage?: number
) => {
  return await instanceAxios.get(`/good-house/seller-information/`, {
    params: {
      ...(searchData && searchData),
      page_size: currentPage,
    },
  });
};

export const fetchGoodHouseCategory = async (
  searchData?: object,
  currentPage?: number
) => {
  return await instanceAxios.get(`/good-house/category/`, {
    params: {
      ...(searchData && searchData),
      page_size: currentPage,
    },
  });
};
export const fetchGoodHousePostList = async (
  searchData?: object,
  currentPage?: number
) => {
  return await instanceAxios.get(`/good-house/items/`, {
    params: {
      ...(searchData && searchData),
      page_size: currentPage,
    },
  });
};

export const fetchCreateGoodHousePost = async (
  data?: IGoodHousePostCreate | FormData
) => {
  return await instanceAxios.post(`/good-house/items/`, data);
};

export const fetchUpdateGoodHousePost = async (
  data: FormData,
  id: string | number
) => {
  return await instanceAxios.patch(`/good-house/items/${id}/`, data);
};

export const fetchCreateGoodHouseCategory = async (data?: IJob) => {
  return await instanceAxios.post(`/good-house/category/`, data);
};
