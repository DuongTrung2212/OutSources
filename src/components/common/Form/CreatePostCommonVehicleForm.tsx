import { Flex, Form } from 'antd';
import { useContext, useState } from 'react';
import InputCustom from '../InputCustom';
import ModalLocationSelectCustom from '../ModalLocationSelectCustom';
import TextAreaCustom from '../TextAreaCustom';

import { CurrentFormContext } from '@/app/(app)/CurentFormContext';
import selectData from '@/services/selectData';
import { IVehicle } from '@/types/Job';
import HorizontalSelect from '../HorizontalSelect';

interface Props {
  edit?: boolean;
  data?: IVehicle;
}
export default function CreatePostCommonVehicleForm(props: Props) {
  const currentForm = useContext(CurrentFormContext);
  const [checked, setChecked] = useState<boolean>();
  const titleClassName = 'pt-[20px] text-[20px] font-semibold';
  return (
    <Flex vertical gap={20}>
      <p className={titleClassName}>Thông tin chi tiết</p>
      <Flex gap={10}>
        <InputCustom
          defaultValue={currentForm.currentData?.infor?.company}
          // onChange={(e) => setCompany(e || '')}
          label={'Hãng'}
        />
        <InputCustom
          defaultValue={currentForm.currentData?.infor?.year_produce}
          type="number"
          // onChange={(e) => setYearManufacture(e || '')}
          label={'Năm sản xuất'}
        />
      </Flex>
      <HorizontalSelect
        // onChange={(e) => setGearBox(e || '')}
        data={selectData.carGearData}
        label={'Hộp sô'}
      />
      <HorizontalSelect
        // onChange={(e) => setFuel(e || '')}
        data={selectData.carFuelData}
        label={'Nhiên liệu'}
      />
      <Flex gap={10}>
        <InputCustom
          defaultValue={currentForm.currentData?.infor?.guarantee}
          // onChange={(e) => setGuarantee(e || '')}
          label={'Bảo hành'}
        />
        <InputCustom
          defaultValue={currentForm.currentData?.infor?.seatNumber}
          type="number"
          // onChange={(e) => setSeatNumber(e || '')}
          label={'Số chỗ'}
        />
      </Flex>
      <HorizontalSelect
        data={selectData.usageStatusData}
        label={'Tình trạng sử dụng'}
      />
      <Flex gap={10}>
        <InputCustom
          defaultValue={currentForm.currentData?.infor?.walked}
          // onChange={(e) => setWalked(e || '')}
          label={'Số km đã đi'}
        />
        <InputCustom
          defaultValue={currentForm.currentData?.infor?.price}
          type="number"
          // onChange={(e) => setPrice(e || '')}
          label={'Giá'}
        />
      </Flex>

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
