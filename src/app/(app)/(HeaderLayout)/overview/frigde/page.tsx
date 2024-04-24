'use client';
import {
  fetchCreateGoodHouseCategory,
  fetchGoodHouseCategory,
  fetchGoodHousePostList,
} from '@/api/goodHouseRequest';
import instanceAxios from '@/api/instanceAxios';
import CardItem from '@/components/common/CardItem';
import ModalCategorySelectFilterCustom from '@/components/common/ModalCategorySelectFilterCustom';
import ModalLocationSelectFilterCustom from '@/components/common/ModalLocationSelectFilterCustom';
import ModalLocationSliderFilterCustom from '@/components/common/ModalLocationSliderFilterCustom';
import { IGoodHousePost, IJob, ILocationResponse, IProduct } from '@/types/Job';
import {
  CaretDownOutlined,
  CaretLeftOutlined,
  DownOutlined,
  HolderOutlined,
} from '@ant-design/icons';
import { Dropdown, Flex, Image, Modal, Pagination, Space } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';

export default function FrigdePage() {
  const [showModal, setShowModal] = useState(false);
  const [areaList, setAreaList] = useState<ILocationResponse[]>([]);
  const [categoryList, setCategoryList] = useState<IJob[]>([]);
  const [productList, setProductList] = useState<IGoodHousePost[]>([]);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [goodHouseTypeFilter, setGoodHouseTypeFilter] = useState('');
  const [currentTab, setCurrentTab] = useState(1);
  const [addressFilter, setAddressFilter] = useState('');
  const [currentOrder, setCurrentOrder] = useState('NEWEST');

  const fetchGoodHouseList = useCallback(() => {
    fetchGoodHousePostList({
      ...(goodHouseTypeFilter && { goodHouseTypeFilter: goodHouseTypeFilter }),
      addressFilter,
      currentTab,
    })
      .then((res) => {
        setProductList(res.data.data.results || []);
      })
      .catch((err) => {});
  }, [addressFilter, currentTab, goodHouseTypeFilter]);

  useEffect(() => {
    // const fetchProductList = async () => {
    //   await instanceAxios.get(`1`);
    // };
    fetchGoodHouseCategory()
      .then((res) => {
        setCategoryList(res.data.data || []);
      })
      .catch((err) => {});
  }, []);
  useEffect(() => {
    fetchGoodHouseList();
  }, [fetchGoodHouseList]);

  const orderList = [
    {
      label: 'Tin mới trước',
      value: 'NEWEST',
    },
    {
      label: 'Giá thấp trước',
      value: 'CHEAPEST',
    },
  ];

  return (
    <div className="w-full">
      <Flex
        className="bg-white py-[10px] pl-[200px] text-nowrap max-lg:pl-[20px] overflow-x-auto"
        gap={20}
      >
        <ModalLocationSelectFilterCustom
          onChange={(e) => setAddressFilter(e as string)}
          label={''}
        />
        <ModalCategorySelectFilterCustom
          onChange={(e) => setGoodHouseTypeFilter(e as string)}
          label={'Loại nhà'}
          menuList={categoryList}
        />
        <ModalLocationSliderFilterCustom label={'Giá'} />
        <ModalLocationSliderFilterCustom label={'Diện tích'} />
      </Flex>
      <Flex
        vertical
        gap={10}
        className="ml-[200px] max-lg:px-[20px] max-lg:m-0 w-1/2 max-xl:w-3/4 max-md:w-full"
      >
        <p className="font-bold py-[20px]">
          Thuê nhà vị trí thuận lợi, giá hợp lý
        </p>
        <Flex gap={20} className="bg-white p-[10px]">
          {[...Array(3)].map((item, index) => (
            <Flex key={index} vertical align="center" justify="center">
              <Image
                src=""
                alt=""
                preview={false}
                width={70}
                height={70}
                className="p-[10px] bg-[#f5f5f5] rounded-full"
              />
              <p className="text-[12px] text-center text-wrap w-24">
                Phòng trọ/ ký túc xá
              </p>
            </Flex>
          ))}
        </Flex>
        <Flex
          justify="space-between"
          className="rounded-lg bg-white p-[10px] font-bold"
        >
          <Space>
            <HolderOutlined />
            <p>Siêu thị điện tử</p>
          </Space>
          <Space>
            <p className="text-[12px]">Xem cửa hàng</p>
            <DownOutlined />
          </Space>
        </Flex>
        <Flex
          className="w-full bg-white rounded-md pr-[10px]"
          align="center"
          justify="space-between"
        >
          <Flex align="center" className="w-full text-[14px] text-nowrap">
            <p
              onClick={() => setCurrentTab(1)}
              className={`p-[10px] w-fit ${
                currentTab === 1 && `border-b-2 border-[#ffbd0b]`
              }`}
            >
              Tất cả
            </p>
            <p
              onClick={() => setCurrentTab(2)}
              className={`p-[10px] w-fit ${
                currentTab === 2 && `border-b-2 border-[#ffbd0b]`
              }`}
            >
              Cá nhân
            </p>
            <p
              onClick={() => setCurrentTab(3)}
              className={`p-[10px] w-fit ${
                currentTab === 3 && `border-b-2 border-[#ffbd0b]`
              }`}
            >
              Bán chuyên
            </p>
          </Flex>
          <Dropdown
            trigger={['click']}
            placement="bottom"
            arrow
            menu={{
              items: orderList.map((item, index) => ({
                key: index,
                label: (
                  <p onClick={() => setCurrentOrder(item.value)}>
                    {item.label}
                  </p>
                ),
              })),
            }}
          >
            <Space className="" wrap={false}>
              <p className="text-nowrap">
                {orderList.find((item) => item.value === currentOrder)?.label}
              </p>
              <CaretDownOutlined />
            </Space>
          </Dropdown>
        </Flex>
        <Flex wrap="wrap" gap={10}>
          {productList.map((item, index) => (
            <CardItem
              data={item as unknown as IProduct}
              className={`w-[220px]`}
              key={index}
            />
          ))}
        </Flex>
        <Pagination className="!m-auto" total={50} />
      </Flex>
    </div>
  );
}
