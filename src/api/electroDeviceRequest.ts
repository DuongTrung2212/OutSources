import instanceAxios from './instanceAxios';

export const fetchCreateElectroDevicePost = async (data?: FormData) => {
  return await instanceAxios.post(`/ElectronicDevice/items/`, data);
};
export const fetchUpdateElectroDevicePost = async (
  data: FormData,
  id: string | number
) => {
  return await instanceAxios.patch(`/ElectronicDevice/items/${id}/`, data);
};
export const fetchElectronicDeviceCapacitiesList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/ElectronicDevice/capacities/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchElectronicDeviceColorList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/ElectronicDevice/color/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchElectronicDeviceCompaniesList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/ElectronicDevice/companies/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchElectronicDeviceGuaranteeList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/ElectronicDevice/guarantee/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchElectronicDeviceHardDriveList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/ElectronicDevice/hard_drive/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchElectronicDeviceMicroprocessorList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/ElectronicDevice/microprocessor/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchElectronicDeviceMonitorCardList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/ElectronicDevice/monitor_card/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchElectronicDeviceRamList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/ElectronicDevice/ram/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchElectronicDeviceScreenSizeList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/ElectronicDevice/screen_size/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchElectronicDeviceSellerInformationList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/ElectronicDevice/seller-information/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchElectronicDeviceUsageStatusList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/ElectronicDevice/usage-status/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
