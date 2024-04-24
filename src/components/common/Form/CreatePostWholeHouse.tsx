import { Flex, Form } from 'antd';
import { useContext, useState } from 'react';
import InputCustom from '../InputCustom';
import ModalLocationSelectCustom from '../ModalLocationSelectCustom';
import SelectCustom from '../SelectCustom';
import TextAreaCustom from '../TextAreaCustom';

import { CurrentFormContext } from '@/app/(app)/CurentFormContext';
import selectData from '@/services/selectData';
import { IGoodHousePost } from '@/types/Job';
import HorizontalSelect from '../HorizontalSelect';

interface Props {
  edit?: boolean;
  data?: IGoodHousePost;
  // defaultValue: string;
}

export default function CreatePostWholeHouse(props: Props) {
  const currentForm = useContext(CurrentFormContext);
  const [checked, setChecked] = useState<boolean>();
  const titleClassName = 'pt-[20px] text-[20px] font-semibold';
  return (
    <Flex vertical gap={20}>
      <p className={titleClassName}>Địa chỉ</p>
      <ModalLocationSelectCustom
        // onChange={(location, address) => {
        //   setLocationId((location as number) || 0);
        //   setAddressId((address as number) || 0);
        // }}
        label={'Địa chỉ'}
      />
      <p className={titleClassName}>Thông tin chi tiết</p>
      <Flex gap={10}>
        <InputCustom
          defaultValue={currentForm.currentData?.infor?.depositAmount}
          // onChange={(e) => setDepositAmount(e || '')}
          label={'Số tiền cọc'}
        />
        <InputCustom
          defaultValue={currentForm.currentData?.infor?.numberBedrooms}
          type="number"
          // onChange={(e) => setNumberBedrooms(e as number)}
          label={'Số phòng ngủ'}
        />
      </Flex>
      <Flex gap={10}>
        <InputCustom
          defaultValue={currentForm.currentData?.infor?.numberBathrooms}
          // onChange={(e) => setNumberBathrooms(e as number)}
          label={'Số phòng vệ sinh'}
        />
        <SelectCustom
          defaultValue={currentForm.currentData?.infor?.usage_status}
          // onChange={(e) => setInteriorCondition(e || '')}
          label={'Tình trạng nội thất'}
          data={selectData.goodHouseUsageStatus}
        />
      </Flex>
      <p className={titleClassName}>Diện tích & Giá</p>
      <Flex gap={10}>
        <InputCustom
          defaultValue={currentForm.currentData?.infor?.acreage}
          // onChange={(e) => setAcreage(e || '')}
          label={'Diện tích'}
        />
        <InputCustom
          defaultValue={currentForm.currentData?.infor?.price}
          type="number"
          // onChange={(e) => setPriceValue(e || '')}
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
      <p className={titleClassName}>Thông tin người đăng</p>
      <HorizontalSelect
        defaultValue={currentForm.currentData?.infor?.seller_information}
        label="Thông tin người bán"
        // onChange={(e) => setSellerInformation(e as number)}
        data={selectData.sellerInformationData}
      />
    </Flex>
  );
}
