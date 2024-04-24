import instanceAxios from './instanceAxios';

export const fetchCreateVehiclePost = async (data?: FormData) => {
  return await instanceAxios.post(`/vehicle/items/`, data);
};
export const fetchUpdateVehiclePost = async (
  data: FormData,
  id: string | number
) => {
  return await instanceAxios.patch(`/vehicle/items/${id}/`, data);
};
export const fetchVehicleUsageStatusList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/vehicle/usage-status/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchVehicleSellerInformationList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/vehicle/seller-information/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchVehicleGuaranteeList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/vehicle/guarantee/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchVehicleCapacitiesList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/vehicle/capacities/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchVehicleCompaniesList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/vehicle/companies/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchVehicleYearsOfManufactureList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/vehicle/years-of-manufacture/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchVehicleFuelsList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/vehicle/fuels/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchVehicleGearboxesList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/vehicle/gearboxes/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchVehicleSeatNumbersList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/vehicle/seat-numbers/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
