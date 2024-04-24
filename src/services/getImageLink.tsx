import { IProduct } from '@/types/Job';

const getImageLink = (data: IProduct) => {
  return `${
    data.images_A1?.[0]?.Image ||
    data.images_A2?.[0]?.Image ||
    data.images_A2_data?.[0]?.Image ||
    data.images_A3?.[0]?.Image ||
    data.images_A3_data?.[0]?.Image ||
    data.images_A4?.[0]?.Image ||
    data.images_A5?.[0]?.Image ||
    data.images_B1?.[0]?.Image ||
    data.images_B2?.[0]?.Image ||
    data.images_B3?.[0]?.Image ||
    data.images_B4?.[0]?.Image ||
    data.images_B5?.[0]?.Image ||
    ''
  }`;
};
export default getImageLink;
