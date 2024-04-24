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

export default function MachinePage() {
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
        vertical
        gap={10}
        className="ml-[200px] max-lg:px-[20px] max-lg:m-0 w-1/2 max-xl:w-3/4 max-md:w-full"
      >
        <p className="font-bold py-[20px]">Mua bán thiết bị máy móc siêu rẻ</p>

        <Flex
          className="w-full bg-white rounded-md pr-[10px] font-medium"
          justify="space-between"
        >
          <Flex align="center" className="w-full text-[14px] text-nowrap">
            <p
              onClick={() => setCurrentTab(1)}
              className={`p-[10px] w-1/5 ${
                currentTab === 1 && `border-b-2 border-[#ffbd0b]`
              }`}
            >
              Tất cả
            </p>
            <p
              onClick={() => setCurrentTab(2)}
              className={`p-[10px] w-1/5 ${
                currentTab === 2 && `border-b-2 border-[#ffbd0b]`
              }`}
            >
              Cá nhân
            </p>
            <p
              onClick={() => setCurrentTab(3)}
              className={`p-[10px] w-1/5 ${
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
              items: [
                {
                  key: '1',
                  label: (
                    <p onClick={() => setCurrentOrder('NEWEST')}>
                      Tin mới trước
                    </p>
                  ),
                },
                {
                  key: '2',
                  label: (
                    <p onClick={() => setCurrentOrder('CHEAPEST')}>
                      Giá thấp trước
                    </p>
                  ),
                },
              ],
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
              imageHeight={220}
              imageWidth={225}
              key={index}
            />
          ))}
        </Flex>
        <Pagination className="!m-auto" total={50} />
      </Flex>
    </div>
  );
}
