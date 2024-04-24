import instanceAxios from './instanceAxios';

export const fetchCreateHomeAppliancePost = async (data?: FormData) => {
  return await instanceAxios.post(`/home-appliance/items/`, data);
};

export const fetchUpdateHomeAppliancePost = async (
  data: FormData,
  id: string | number
) => {
  return await instanceAxios.patch(`/home-appliance/items/${id}/`, data);
};

export const fetchHomeApplianceGuaranteeList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/home-appliance/guarantee/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchHomeApplianceSellerInformationList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/home-appliance/seller-information/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchHomeApplianceUsageStatusList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/home-appliance/usage-status/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
