const getListCategoryLinkAPI = (key: string) => {
  switch (key) {
    case 'WORK':
      return 'job/career/';
    case 'GOODHOUSE':
      return 'good-house/category/';
    case 'REFRIGERATOR':
      return 'refrigerator-airconditioner-washingmachine/category/';
    case 'VEHICLE':
      return 'vehicle/category/';
    case 'WORK':
      return 'job/career/';
    case 'WORK':
      return 'job/career/';
    case 'WORK':
      return 'job/career/';
    case 'WORK':
      return 'job/career/';
    case 'WORK':
      return 'job/career/';
    default:
      return '';
  }
};
export default getListCategoryLinkAPI;
