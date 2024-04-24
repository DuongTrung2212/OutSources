import { message } from 'antd';
import instanceAxios from './instanceAxios';
import { IJobPostCreate } from '@/types/Job';

export const fetchCreateWorkPost = async (data?: IJobPostCreate | FormData) => {
  return await instanceAxios.post(`/job/items/`, data);
};
export const fetchUpdateWorkPost = async (
  data: FormData,
  id: string | number
) => {
  return await instanceAxios.patch(`/job/items/${id}/`, data);
};

export const fetchCareerList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/job/career/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};

export const fetchExperienceList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/job/experience/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};

export const fetchPayFormsList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/job/pay-forms/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};

export const fetchWorkTypeList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/job/type-of-work/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};

// export const fetchJobList = async (
//   searchData?: string,
//   currentPage?: number
// ) => {
//   return await instanceAxios.get(`users/`, {
//     params: {
//       ...(searchData && { search: searchData }),
//       page_size: currentPage,
//     },
//   });
// };
