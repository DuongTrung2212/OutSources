import { CameraFilled, CameraOutlined } from '@ant-design/icons';
import { Button, Checkbox, Flex, Image, Input, Space } from 'antd';
import React, { useContext, useState } from 'react';
import InputCustom from '../common/InputCustom';
import ModalLocationSelectCustom from '../common/ModalLocationSelectCustom';
import TextAreaCustom from '../common/TextAreaCustom';
import { CurrentShopDataContext } from '@/app/(app)/CurentFormContext';
import { number } from 'prop-types';
interface Props {
  onFinish?: (e?: any) => void;
}
export default function SetCreateMarketPage(props: Props) {
  const currentShopData = useContext(CurrentShopDataContext);
  const [name, setName] = useState<string | number | undefined>(
    currentShopData.currentData?.name
  );
  const [address, setAddress] = useState<string | number | undefined>(
    currentShopData.currentData?.address
  );
  const [checked, setChecked] = useState(false);
  const [description, setDescription] = useState<string | number | undefined>(
    currentShopData.currentData?.description
  );
  const [phone, setPhone] = useState<string | number | undefined>();

  const labelClassName = 'font-bold py-[20px] text-[20px]';
  return (
    <Flex vertical gap={30} className="w-full">
      <div className="w-full pb-[100px] rounded-lg overflow-hidden bg-white">
        <div className="w-full relative h-[350px]">
          <Image
            className="object-cover"
            width={`100%`}
            preview={false}
            height={`100%`}
            alt=""
            src="https://st.nettruyenbb.com/data/comics/160/cuong-loan-lenh-nuong-nia-liston.jpg"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#0000006b]">
            <CameraFilled className="!text-white text-[50px]" />
          </div>
          <div className="absolute bottom-0 left-[5%] w-[100px] h-[100px] translate-y-1/2 border-2 border-[#ffffff] rounded-full overflow-hidden">
            <div className="w-full h-full relative">
              <Image
                className="object-cover"
                width={`100%`}
                preview={false}
                height={`100%`}
                alt=""
                src="https://st.nettruyenbb.com/data/comics/160/cuong-loan-lenh-nuong-nia-liston.jpg"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#0000006b]">
                <CameraFilled className="!text-white text-[50px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Flex
        vertical
        gap={10}
        className="w-full rounded-lg overflow-hidden bg-white"
      >
        <Flex vertical className="w-2/3 m-auto">
          <Flex vertical>
            <p className={labelClassName}>Cửa hàng / Chuyên trang</p>
            <InputCustom
              type="text"
              onChange={(e) => setName(e)}
              label="Tên cửa hàng"
            />
          </Flex>
          <Flex vertical>
            <p className={labelClassName}>Địa chỉ/Khu vực</p>
            <ModalLocationSelectCustom
              onChange={(e) => setAddress(e)}
              label="Địa chỉ cửa hàng"
            />
          </Flex>
          <Flex vertical>
            <p className={labelClassName}>Cửa hàng / Chuyên trang</p>
            <Space>
              <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <p>Tôi muốn thêm vào cửa hàng chợ tốt Map</p>
            </Space>
          </Flex>
          <Flex vertical>
            <p className={labelClassName}>Liện hệ</p>
            <InputCustom
              onChange={(e) => setPhone(e)}
              type="number"
              label="Số điện thoại liên hệ"
              required
            />
          </Flex>
          <Flex vertical>
            <p className={labelClassName}>Giới thiệu</p>
            <TextAreaCustom
              onChange={(e) => setDescription(e)}
              // textAreaClassName={`!min-h-[100px]`}
              label="Giới thiệu cửa hàng"
              required
            />
          </Flex>
          <Button
            onClick={() => {
              props.onFinish?.();
              currentShopData.setCurrentData?.({
                ...currentShopData.currentData,
                address: address as string,
                contact: { number: phone || 0 },
                activate: checked,
                name: name as string,
              });
            }}
            className="!bg-[#ff8800] my-[20px] !py-[20px] !flex justify-center items-center !font-bold !text-white"
          >
            TẠO VÀ THANH TOÁN
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
