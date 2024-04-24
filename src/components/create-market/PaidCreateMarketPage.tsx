import { Button, Flex, Image } from 'antd';
import React, { useContext, useState } from 'react';
import InputCustom from '../common/InputCustom';
import { CloseOutlined } from '@ant-design/icons';
import { CurrentShopDataContext } from '@/app/(app)/CurentFormContext';
import { fetchCreateShop } from '@/api/allRequest';
interface Props {
  onFinish?: (e?: any) => void;
}
export default function PaidCreateMarketPage(props: Props) {
  const currentShopData = useContext(CurrentShopDataContext);
  const [email, setEmail] = useState(currentShopData.currentData?.email);

  const labelClassName = 'font-semibold pt-[20px] text-[18px]';

  const fetchCreate = () => {
    currentShopData.setCurrentData?.({
      ...currentShopData.currentData,
      email,
    });
    fetchCreateShop(
      {
        ...currentShopData.currentData,
        email,
      } || {}
    )
      .then((res) => {
        props.onFinish?.();
      })
      .catch((err) => {});
  };

  return (
    <div className="w-full rounded-lg overflow-hidden bg-white">
      <Flex vertical gap={10} className="w-2/3 m-auto">
        <p className={labelClassName}>Dịch vụ</p>
        <Flex
          gap={20}
          className="w-full relative border rounded-lg overflow-hidden p-[10px]"
        >
          <div className="h-[100px] py-[5px] px-[20px] border border-[#cc7f0b] rounded-lg">
            <Image
              className=" object-cover"
              alt=""
              width={100}
              height={`100%`}
              src="https://st.nettruyenbb.com/data/comics/160/cuong-loan-lenh-nuong-nia-liston.jpg"
            />
          </div>
          <Flex
            className="w-full py-[10px] font-medium"
            vertical
            justify="space-between"
          >
            <p>Tạo: cửa hàng xe cộ</p>
            <Flex justify="space-between">
              <p>Thời gian</p>
              <p className="text-[#f64302]">$0</p>
            </Flex>
          </Flex>
          <CloseOutlined className="absolute right-[10px] top-[10px]" />
        </Flex>
        <Flex
          vertical
          className="w-full relative pb-[20px] before:content-[''] before:absolute before:w-1/2 before:h-[1px] before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-[#959595]"
        >
          <Flex className="w-full p-[10px]" justify="space-between">
            <p>Tạm tính</p>
            <p className="text-[#f64302]">$0</p>
          </Flex>
          <Flex className="w-full p-[10px]" justify="space-between">
            <p>Giảm giá</p>
            <p className="text-[#f64302]">$0</p>
          </Flex>
          <Flex className="w-full  p-[10px] " justify="space-between">
            <p>Thành tiền</p>
            <p className="text-[#f64302]">$0</p>
          </Flex>
        </Flex>
        <Flex vertical>
          <p className={`${labelClassName} py-[20px]`}>
            Kích hoạt Cửa hàng / Chuyên trang
          </p>
          <InputCustom
            onChange={(e) => setEmail(e as string)}
            label="Email của bạn"
            required
          />
        </Flex>
        <i className="text-[12px] text-[#3136a2]">
          Vui lòng xác nhận email để kích hoạt Cửa hàng / chuyên trang
        </i>
        <Button
          onClick={() => {
            fetchCreate();
          }}
          className="!bg-[#589f39] my-[20px] !py-[20px] !flex justify-center items-center !font-bold !text-white"
        >
          KÍCH HOẠT
        </Button>
      </Flex>
    </div>
  );
}
