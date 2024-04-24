import instanceAxios from './instanceAxios';

export const fetchTaxiPost = async (data?: FormData) => {
  return await instanceAxios.post(`/taxi/items/`, data);
};
export const fetchUpdateTaxiPost = async (
  data: FormData,
  id: string | number
) => {
  return await instanceAxios.patch(`/taxi/items/${id}/`, data);
};
export const fetchTaxiPostedNewsList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/taxi/posted-news/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchTaxiPosterInformationList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/taxi/poster-information/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
