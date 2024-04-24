import {
  Checkbox,
  Collapse,
  DatePicker,
  Flex,
  Image,
  Modal,
  Space,
  UploadFile,
  UploadProps,
  notification,
} from 'antd';
import { useContext, useEffect, useState } from 'react';
import InputCustom from '../InputCustom';
import ModalLocationSelectCustom from '../ModalLocationSelectCustom';
import SelectCustom from '../SelectCustom';
import TextAreaCustom from '../TextAreaCustom';

import { CurrentFormContext } from '@/app/(app)/CurentFormContext';
import getBase64, { FileType } from '@/services/getBase64';
import { IJob, ILocationResponse, IVehicle } from '@/types/Job';
import {
  CalendarOutlined,
  CaretLeftOutlined,
  GlobalOutlined,
  InboxOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import Dragger from 'antd/es/upload/Dragger';
import Link from 'next/link';
import HorizontalSelect from '../HorizontalSelect';
import ModalCategorySelectCustom from '../ModalCategorySelectCustom';
import PreviewProduct from '../PreviewProduct';

import { fetchAreaList } from '@/api/addressRequest';
import {
  fetchTaxiPost,
  fetchTaxiPostedNewsList,
  fetchTaxiPosterInformationList,
  fetchUpdateTaxiPost,
} from '@/api/taxiRequest';
import getParentUrl from '@/services/getUrl';
import { RcFile } from 'antd/es/upload';
import {
  convertImageToUploadFile,
  convertVideoToUploadFile,
} from '@/services/fetchImage';

interface Props {
  edit?: boolean;
  data?: IVehicle;
}
export default function CreatePostTaxiForm(props: Props) {
  const currentForm = useContext(CurrentFormContext);

  const [mapValue, setMapValue] = useState('');
  const [locationId, setLocationId] = useState<number | string>(
    props.data?.Location?.id || ''
  );
  const [addressId, setAddressId] = useState<number | string>(
    props.data?.Address?.id || ''
  );
  const [categoryId, setCategoryId] = useState<number | string>(
    currentForm.currentCategoryId || ''
  );

  const [title, setTitle] = useState<number | string>(props.data?.Title || '');
  const [sellerInformation, setSellerInformation] = useState<number | string>(
    props.data?.Seller_information?.id || ''
  );
  const [postedNewsList, setPostedNewsList] = useState<IJob[]>([]);
  const [posterInformationList, setPosterInformationList] = useState<IJob[]>(
    []
  );
  const [detailedDescription, setDetailedDescription] = useState<string>(
    props.data?.Detailed_description || ''
  );
  const [price, setPrice] = useState<number | string>('');

  const [contactPhoneNumber, setContactPhoneNumber] = useState<number | string>(
    props.data?.Contact_phone_number || ''
  );

  const [defaultLabel, setDefaultLabel] = useState<number | string>(
    currentForm.currentLabelAdress || ''
  );
  const [url, setUrl] = useState(getParentUrl.Taxi);
  const [preview, setPreview] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [videoFileList, setVideoFileList] = useState<UploadFile[]>([]);
  useEffect(() => {
    const fetchImageFiles = async () => {
      const imageFiles = await Promise.all(
        (props.data?.images_A3 || []).map(
          async (item) => await convertImageToUploadFile(item)
        )
      );
      setFileList(imageFiles || []);
    };
    const fetchVideoFiles = async () => {
      if (props.data?.Video) {
        const VideoFiles = await convertVideoToUploadFile(
          props.data?.Video || ''
        );
        setVideoFileList([VideoFiles]);
      }
    };
    fetchVideoFiles();
    fetchImageFiles();
  }, [props.data?.Video, props.data?.images_A3]);

  const [showModal, setShowModal] = useState(false);
  const [areaList, setAreaList] = useState<ILocationResponse[]>([]);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [value, setValue] = useState<string | number>('');
  const [timeStart, setTimeStart] = useState<string | number>('');

  const [postedNews, setPostedNews] = useState<string | number>('');
  const [posterInformation, setPosterInformation] = useState<string | number>(
    ''
  );
  const [valueGo, setValueGo] = useState<string | number>('');
  const [valueTo, setValueTo] = useState<string | number>('');
  const [labelGo, setLabelGo] = useState<string | number>('');
  const [labelTo, setLabelTo] = useState<string | number>('');
  const [isTo, setIsTo] = useState(false);

  const handleChangeLocation = (
    e: string | number,
    address: string | number
  ) => {
    setValue(e);
  };
  useEffect(() => {
    const fethAreaListData = async () => {
      await fetchAreaList()
        .then((res) => {
          setAreaList(res.data.data || []);
        })
        .catch((err) => {});
    };
    fethAreaListData();
  }, []);

  useEffect(() => {
    fetchTaxiPostedNewsList().then((res) =>
      setPostedNewsList(res.data.data || [])
    );
    fetchTaxiPosterInformationList().then((res) =>
      setPosterInformationList(res.data || [])
    );
  }, []);
  const handleCancel = () => setPreviewOpen(false);

  const handlePreview: (file: UploadFile) => Promise<void> = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name ||
        (file.url ? file.url.substring(file.url.lastIndexOf('/') + 1) : '')
    );
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    const newList: UploadFile<any>[] = newFileList.map((item) => ({
      ...item,
      status: 'done',
    }));
    setFileList(newList);
  };
  const handleChangeVideo: UploadProps['onChange'] = ({
    fileList: newFileList,
  }) => {
    const newList: UploadFile<any>[] = newFileList.map((item) => ({
      ...item,
      status: 'done',
    }));
    setVideoFileList(newList);
  };

  const onSubmit = async () => {
    const formData = new FormData();
    addressId && formData.append('Address', addressId as string);
    locationId && formData.append('Location', locationId as string);
    categoryId && formData.append('Category', categoryId as string);
    postedNews && formData.append('Posted_news', postedNews as string);
    timeStart && formData.append('Time_to_start_moving', timeStart as string);

    posterInformation &&
      formData.append('Poster_information', posterInformation as string);
    valueGo && formData.append('Place_of_origin', valueGo as string);
    valueTo && formData.append('Destination', valueTo as string);

    price && formData.append('Price', price as string);
    title && formData.append('Title', title as string);
    detailedDescription &&
      formData.append('Detailed_description', detailedDescription as string);
    contactPhoneNumber &&
      formData.append('Contact_phone_number', contactPhoneNumber as string);
    url && formData.append('Url', url as string);
    for (let index = 0; index < fileList.length; index++) {
      formData.append('images_A3_data', fileList[index]?.originFileObj as Blob);
    }
    formData.append('Video', videoFileList[0]?.originFileObj as Blob);
    if (!props.edit)
      await fetchTaxiPost(formData)
        .then((res) =>
          notification.success({
            message: 'Đã tạo',
            description: 'Đã tạo bài đăng',
          })
        )
        .catch((err) =>
          notification.error({
            message: 'Lỗi',
            description: 'Tạo bài đăng thất bại',
          })
        );
    else
      await fetchUpdateTaxiPost(formData, props.data?.id || '')
        .then((res) =>
          notification.success({
            message: 'Đã tạo',
            description: 'Đã tạo bài đăng',
          })
        )
        .catch((err) =>
          notification.error({
            message: 'Lỗi',
            description: 'Tạo bài đăng thất bại',
          })
        );
  };
  const titleClassName = 'pt-[20px] text-[20px] font-semibold';
  return (
    <Flex vertical gap={20}>
      <p className={titleClassName}>Thông tin chi tiết</p>
      <InputCustom
        defaultValue={price}
        type="number"
        onChange={(e) => setPrice(e || '')}
        label={'Giá'}
      />
      <HorizontalSelect
        onChange={(e) => setPostedNews(e || '')}
        defaultValue={postedNews}
        data={postedNewsList}
        required
        label={'Tin đăng'}
      />
      <Flex className="border rounded-lg py-[5px]">
        <Flex
          align="center"
          justify="center"
          className="flex-[2_2_0%] px-[20px]  "
          gap={20}
        >
          <Flex
            onClick={() => {
              setIsTo(false), setShowModal(true);
            }}
            align="center"
            gap={10}
          >
            <p>🔘</p>
            <Flex vertical>
              <p className="text-[10px] font-semibold text-gray-500">
                Nơi xuất phát
              </p>
              <p className="font-bold text-[14px]">{labelGo}</p>
            </Flex>
          </Flex>
          <p>➡️</p>
          <Flex
            onClick={() => {
              setIsTo(true), setShowModal(true);
            }}
            align="center"
            gap={10}
          >
            <p>🔘</p>
            <Flex vertical>
              <p className="text-[10px] font-semibold text-gray-500">Nơi đến</p>
              <p className="font-bold text-[14px]">{labelTo}</p>
            </Flex>
          </Flex>
        </Flex>
        <Flex className="flex-1" gap={10}>
          <CalendarOutlined />
          <DatePicker
            suffixIcon={false}
            onChange={(e) => {
              setTimeStart(e?.toString() || '');
            }}
            placeholder="Chọn ngày đi"
          />
          {/* <p className="text-[10px] font-semibold text-gray-500">
                Chọn ngày đi
              </p> */}
        </Flex>
      </Flex>
      <p className={titleClassName}>Tiêu đề và mô tả chi tiết</p>
      <InputCustom
        defaultValue={title}
        onChange={(e) => setTitle(e || '')}
        label={'Tiêu đề tin đăng'}
      />
      <TextAreaCustom
        defaultValue={detailedDescription}
        onChange={(e) => setDetailedDescription(e as string)}
        label="Mô tả chi tiết"
      />
      <p className={titleClassName}>Thông tin người đăng</p>
      <HorizontalSelect
        defaultValue={posterInformation}
        label="Bạn là"
        onChange={(e) => setPosterInformation(e as number)}
        data={posterInformationList}
      />
    </Flex>
  );
}
