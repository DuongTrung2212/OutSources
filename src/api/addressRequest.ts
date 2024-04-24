import instanceAxios from './instanceAxios';

export const fetchAreaList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/location/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
