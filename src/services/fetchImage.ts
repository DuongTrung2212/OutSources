import { IImage } from '@/types/Job';
import { RcFile, UploadFile } from 'antd/es/upload';

export const fetchImageBlob = async (imageUrl: string): Promise<Blob> => {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    return blob;
  } catch (error) {
    console.error('Lỗi khi tải dữ liệu hình ảnh:', error);
    throw error;
  }
};
export const convertImageToUploadFile = async (
  item: IImage
): Promise<UploadFile> => {
  try {
    const blob = await fetchImageBlob(item.Image);
    // Tạo đối tượng File từ dữ liệu nhận được
    const file = new File([blob], `image${item.id}.jpg`, { type: 'image/jpg' });
    // Trả về đối tượng UploadFile đã tạo
    return {
      uid: `-${item.id}`,
      name: `image${item.id}.jpg`,
      status: 'done',
      url: item.Image,
      originFileObj: file as RcFile,
    };
  } catch (error) {
    console.error(
      'Lỗi khi chuyển đổi hình ảnh thành đối tượng UploadFile:',
      error
    );
    throw error;
  }
};
export const convertVideoToUploadFile = async (
  item: string
): Promise<UploadFile> => {
  try {
    const blob = await fetchImageBlob(item);
    // Tạo đối tượng File từ dữ liệu nhận được
    const file = new File([blob], `video.mp4`, { type: 'video/mp4' });
    // Trả về đối tượng UploadFile đã tạo
    return {
      uid: `video`,
      name: `video.mp4`,
      status: 'done',
      url: item,
      originFileObj: file as RcFile,
    };
  } catch (error) {
    console.error(
      'Lỗi khi chuyển đổi hình ảnh thành đối tượng UploadFile:',
      error
    );
    throw error;
  }
};
