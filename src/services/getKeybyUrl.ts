const getKeybyUrl = (key: string) => {
  switch (key) {
    case 'fridge':
      return '';
    case 'good-house':
      return 'GOODHOUSE';
    case 'service':
      return '';
    case 'vehicle':
      return '';
    case 'electro-device':
      return '';
    case 'HOUSEWARE':
      return '';
    case 'TAXI':
      return '';
    case 'work':
      return 'WORK';
    case 'machine':
      return 'MACHINE';

    default:
      return '';
  }
};
export default getKeybyUrl;
