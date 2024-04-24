import instanceAxios from './instanceAxios';

export const fetchCreateFridgePost = async (data?: FormData) => {
  return await instanceAxios.post(
    `/refrigerator-airconditioner-washingmachine/items/`,
    data
  );
};
export const fetchUpdateFridgePost = async (
  data: FormData,
  id: string | number
) => {
  return await instanceAxios.patch(
    `/refrigerator-airconditioner-washingmachine/items/${id}/`,
    data
  );
};

export const fetchRefrigeratorGuaranteeList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(
    `/refrigerator-airconditioner-washingmachine/guarantee/`,
    {
      params: {
        ...(searchData && { search: searchData }),
        page_size: currentPage,
      },
    }
  );
};

export const fetchRefrigeratorSellerInformationList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(
    `/refrigerator-airconditioner-washingmachine/seller-information/`,
    {
      params: {
        ...(searchData && { search: searchData }),
        page_size: currentPage,
      },
    }
  );
};
export const fetchRefrigeratorUsageStatusList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(
    `/refrigerator-airconditioner-washingmachine/usage-status/`,
    {
      params: {
        ...(searchData && { search: searchData }),
        page_size: currentPage,
      },
    }
  );
};
export const fetchRefrigeratorVolumeList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(
    `/refrigerator-airconditioner-washingmachine/volume/`,
    {
      params: {
        ...(searchData && { search: searchData }),
        page_size: currentPage,
      },
    }
  );
};
export const fetchRefrigeratorWashingVolumeList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(
    `/refrigerator-airconditioner-washingmachine/washing-volume/`,
    {
      params: {
        ...(searchData && { search: searchData }),
        page_size: currentPage,
      },
    }
  );
};

export const fetchRefrigeratorWattageList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(
    `/refrigerator-airconditioner-washingmachine/wattage/`,
    {
      params: {
        ...(searchData && { search: searchData }),
        page_size: currentPage,
      },
    }
  );
};
