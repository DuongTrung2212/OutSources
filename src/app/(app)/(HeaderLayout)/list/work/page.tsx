'use client';
import {
  fetchCreateGoodHouseCategory,
  fetchGoodHouseCategory,
  fetchGoodHousePostList,
} from '@/api/goodHouseRequest';
import instanceAxios from '@/api/instanceAxios';
import CardItem from '@/components/common/CardItem';
import CardItemHorizontalSavePost from '@/components/common/CardItemHorizontalSavePost';
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
import {
  Carousel,
  Dropdown,
  Flex,
  Image,
  Modal,
  Pagination,
  Space,
} from 'antd';
import React, { useCallback, useEffect, useState } from 'react';

export default function WorkListPage() {
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
  const contentStyle: React.CSSProperties = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
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
          label={'Xe ghép'}
          menuList={categoryList}
        />
        <ModalLocationSliderFilterCustom label={'Giá'} />
      </Flex>
      <Flex className="w-full px-[100px]" vertical>
        <div className="w-full p-[10px]   bg-white  m-auto shadow-xl rounded-lg">
          <Carousel className="rounded-lg overflow-hidden" autoplay>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </div>
        <Flex className="w-full" gap={50}>
          <Flex vertical gap={10} className=" w-2/3">
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
                <p>Chuyên trang taxi</p>
              </Space>
              <Space>
                <p className="text-[12px]">Xem cửa hàng</p>
                <DownOutlined />
              </Space>
            </Flex>
            <Flex
              className="w-full bg-white rounded-md pr-[10px]"
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
                    {
                      orderList.find((item) => item.value === currentOrder)
                        ?.label
                    }
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
          <Flex className="w-1/3">
            <div className="w-full h-[50px] bg-slate-600"></div>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
