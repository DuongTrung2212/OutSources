import React, { useContext, useEffect, useState } from 'react';
import SelectCustom from '../SelectCustom';
import {
  Checkbox,
  Flex,
  Form,
  Image,
  Modal,
  Space,
  UploadFile,
  UploadProps,
  notification,
} from 'antd';
import InputCustom from '../InputCustom';
import TextAreaCustom from '../TextAreaCustom';
import ModalLocationSelectCustom from '../ModalLocationSelectCustom';

import HorizontalSelect from '../HorizontalSelect';
import ModalCategorySelectCustom from '../ModalCategorySelectCustom';
import Dragger from 'antd/es/upload/Dragger';
import { IJob, IJobPostCreate, IVehicle } from '@/types/Job';
import getBase64, { FileType } from '@/services/getBase64';
import { fetchCreateWorkPost } from '@/api/jobRequest';
import Link from 'next/link';
import { InboxOutlined, VideoCameraOutlined } from '@ant-design/icons';
import {
  fetchCreateGoodHousePost,
  fetchInteriorConditionList,
  fetchSellerInformationList,
} from '@/api/goodHouseRequest';
import PreviewProduct from '../PreviewProduct';
import {
  fetchCreateVehiclePost,
  fetchUpdateVehiclePost,
  fetchVehicleCapacitiesList,
  fetchVehicleCompaniesList,
  fetchVehicleFuelsList,
  fetchVehicleGearboxesList,
  fetchVehicleGuaranteeList,
  fetchVehicleSeatNumbersList,
  fetchVehicleSellerInformationList,
  fetchVehicleUsageStatusList,
  fetchVehicleYearsOfManufactureList,
} from '@/api/vehicleRequest';
import { CurrentFormContext } from '@/app/(app)/CurentFormContext';
import getParentUrl from '@/services/getUrl';
import { RcFile } from 'antd/es/upload';
import {
  convertImageToUploadFile,
  convertVideoToUploadFile,
} from '@/services/fetchImage';
import selectData from '@/services/selectData';

interface Props {
  edit?: boolean;
  data?: IVehicle;
}
export default function CreatePostMotobikeForm(props: Props) {
  const currentForm = useContext(CurrentFormContext);
  const [checked, setChecked] = useState<boolean>();
  const titleClassName = 'pt-[20px] text-[20px] font-semibold';
  return (
    <Flex vertical gap={20}>
      <p className={titleClassName}>Thông tin chi tiết</p>
      <Flex gap={10}>
        <SelectCustom
          data={selectData.motoCompanyData}
          defaultValue={currentForm.currentData?.infor?.company}
          // onChange={(e) => setCompany(e || '')}
          label={'Hãng'}
        />
        <SelectCustom
          data={selectData.yearData}
          defaultValue={currentForm.currentData?.infor?.year_produce}
          // onChange={(e) => setYearManufacture(e || '')}
          label={'Năm sản xuất'}
        />
      </Flex>
      <Flex gap={10}>
        <SelectCustom
          data={selectData.guaranteeData}
          defaultValue={currentForm.currentData?.infor?.guarantee}
          // onChange={(e) => setGuarantee(e || '')}
          label={'Bảo hành'}
        />
        <SelectCustom
          data={[]}
          defaultValue={currentForm.currentData?.infor?.capacity}
          // onChange={(e) => setCapacity(e || '')}
          label={'Dung tích xe'}
        />
      </Flex>

      <HorizontalSelect
        // onChange={(e) => setUsageStatus(e || '')}
        data={selectData.usageStatusData}
        defaultValue={currentForm.currentData?.infor?.usage_status}
        label={'Tình trạng'}
      />
      <InputCustom
        defaultValue={currentForm.currentData?.infor?.walked}
        // onChange={(e) => setWalked(e || '')}
        label={'Số km đã đi'}
      />
      <Space>
        <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
        <p>Tôi muốn cho tặng miễn phí</p>
      </Space>
      {!checked && (
        <InputCustom
          defaultValue={currentForm.currentData?.infor?.price}
          type="number"
          // onChange={(e) => setPrice(e || '')}
          label={'Giá'}
        />
      )}

      <p className={titleClassName}>Tiêu đề và mô tả chi tiết</p>
      <Form.Item
        name={'title'}
        rules={[{ required: true, message: 'Trường này bắt buộc!' }]}
      >
        <InputCustom
          defaultValue={currentForm.currentData?.infor?.title}
          // onChange={(e) => setTitle(e || '')}
          label={'Tiêu đề tin đăng'}
        />
      </Form.Item>
      <Form.Item
        name={'description'}
        rules={[{ required: true, message: 'Trường này bắt buộc!' }]}
      >
        <TextAreaCustom
          defaultValue={currentForm.currentData?.description}
          // onChange={(e) => setDetailedDescription(e as string)}
          label="Mô tả chi tiết"
        />
      </Form.Item>
      <p className={titleClassName}>Thông tin người bán</p>
      <Form.Item
        name={'sellerInformation'}
        rules={[{ required: true, message: 'Trường này bắt buộc!' }]}
      >
        <HorizontalSelect
          defaultValue={currentForm.currentData?.infor?.seller_information}
          label="Bạn là"
          // onChange={(e) => setSellerInformation(e as number)}
          data={selectData.sellerInformationData}
        />
      </Form.Item>
      <ModalLocationSelectCustom
        // defaultValue={defaultLabel}
        // onChangeLabel={(e) => setDefaultLabel(e || '')}
        // onChange={(location, address) => {
        //   setLocationId((location as number) || 0);
        //   setAddressId((address as number) || 0);
        // }}
        label={'Địa chỉ'}
      />
    </Flex>
  );
}
