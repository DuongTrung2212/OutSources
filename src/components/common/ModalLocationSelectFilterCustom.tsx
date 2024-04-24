import { Collapse, Flex, Modal, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { Span } from 'next/dist/trace';
import {
  CaretDownOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  GlobalOutlined,
  ProfileOutlined,
} from '@ant-design/icons';
import { fetchAreaList } from '@/api/addressRequest';
import { ILocationResponse } from '@/types/Job';

interface Props {
  maxLength?: number;
  required?: boolean;
  label: string;
  className?: string;
  defaultValue?: string | number | undefined;
  onChange?: (
    location: string | number | undefined,
    address: string | number | undefined
  ) => void;
  onChangeLabel?: (e: string | number | undefined) => void;
}

export default function ModalLocationSelectFilterCustom(props: Props) {
  const [showModal, setShowModal] = useState(false);
  const [areaList, setAreaList] = useState<ILocationResponse[]>([]);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [value, setValue] = useState<string | number>(props.defaultValue || '');
  const [label, setLabel] = useState<string | number>(props.defaultValue || '');

  const handleChange = (e: string | number, address: string | number) => {
    setValue(e);
    props.onChange?.(e || undefined, address || undefined);
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

  return (
    <div className="cursor-pointer">
      <Flex
        onClick={() => setShowModal(true)}
        align="center"
        className="border rounded-lg p-[10px]"
        gap={5}
      >
        <p className="text-[14px]">{label ? label : `Toàn quốc`}</p>
        <CaretDownOutlined />
      </Flex>
      <Modal
        width={700}
        title={
          <div className="relative">
            <p className=" text-[20px] font-bold py-[10px] text-center">
              Chọn khu vực
            </p>
          </div>
        }
        // className="!absolute !top-[50px] !left-[370px]"
        classNames={
          {
            // mask: '!bg-transparent',
            // content: '!p-0 overflow-hidden',
          }
        }
        onCancel={() => setShowModal(false)}
        centered
        open={showModal}
        footer={[]}
      >
        <div className="px-[30px] ">
          <Space className="font-semibold text-[16px]">
            <GlobalOutlined />
            Lọc khu vực
          </Space>
          <div className="flex justify-center gap-x-5 my-[20px]">
            {[...Array(3)].map((_, index) => (
              <p
                key={index}
                className="w-fit px-[20px] py-[5px] rounded-full bg-[#f4f4f4]"
              >
                Đài Bắc
              </p>
            ))}
          </div>
          <div className="rounded-lg cursor-pointer border overflow-hidden">
            {areaList.map((item, index) => (
              <Collapse
                key={index}
                className="w-full !rounded-none !border-0"
                expandIconPosition="end"
                collapsible="icon"
                defaultActiveKey={['1']}
                items={[
                  {
                    key: '1',
                    label: (
                      <Space direction="vertical">
                        <p className="text-[16px]">{item.Name}</p>
                        <p>Taipei City</p>
                      </Space>
                    ),
                    children: item.Address_Location.map(
                      (addressItem, index) => (
                        <Flex
                          key={index}
                          onClick={() => {
                            setShowModal(false);
                            handleChange(item.id, addressItem.id);
                            setValue(addressItem.id);
                            setLabel(addressItem.Name);
                            props.onChangeLabel?.(addressItem.Name || '');
                          }}
                          justify="space-between"
                        >
                          <p>{addressItem.Name}</p>
                          <p
                            className={`w-[20px] h-[20px] rounded-full bg-white  ${
                              index % 2 == 0
                                ? 'border-[#c8c8c8]'
                                : 'border-yellow-500'
                            } border-[6px]`}
                          ></p>
                        </Flex>
                      )
                    ),
                    className: '!rounded-none',
                  },
                ]}
              />
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}
