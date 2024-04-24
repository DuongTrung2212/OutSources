import instanceAxios from './instanceAxios';

export const fetchServicePost = async (data?: FormData) => {
  return await instanceAxios.post(`/service/items/`, data);
};
export const fetchUpdateServicePost = async (
  data: FormData,
  id: string | number
) => {
  return await instanceAxios.patch(`/service/items/${id}/`, data);
};
export const fetchServiceGuaranteeList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/service/guarantee/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchServiceSellerInformationList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/service/seller-information/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchServiceUsageStatusList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/service/usage-status/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
