import { Flex, Modal, Space } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { Span } from 'next/dist/trace';
import {
  CaretDownOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  ProfileOutlined,
} from '@ant-design/icons';
import categoryList from '@/services/categoryList';
import { IJob } from '@/types/Job';
import instanceAxios from '@/api/instanceAxios';
import { CurrentFormContext } from '@/app/(app)/CurentFormContext';
interface Props {
  maxLength?: number;
  required?: boolean;
  label: string;
  menuList: IJob[];
  className?: string;
  onChange?: (e: string | number | undefined) => void;
  onChangeKey?: (e: string) => void;
}
export default function ModalCategorySelectFilterCustom(props: Props) {
  const [showModal, setShowModal] = useState(false);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [label, setLabel] = useState<string | number>(props.label || '');

  return (
    <div className={`cursor-pointer ${props.className}`}>
      <Flex
        onClick={() => setShowModal(true)}
        align="center"
        className="border rounded-lg p-[10px]"
        gap={5}
      >
        <p className="text-[14px]">{label}</p>
        <CaretDownOutlined />
      </Flex>
      <Modal
        width={700}
        title={
          <div className="relative">
            <p className="bg-[#f4f4f4] font-bold py-[10px] text-center">
              Chọn danh mục
            </p>
          </div>
        }
        // className="!absolute !top-[50px] !left-[370px]"
        classNames={{
          // mask: '!bg-transparent',
          content: '!p-0 overflow-hidden',
          header: 'rounded',
        }}
        onCancel={() => setShowModal(false)}
        open={showModal}
        footer={[]}
      >
        <div className="rounded-lg border mx-[30px] overflow-hidden">
          {props.menuList.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setLabel(item.name || '');
                props.onChange?.(item.id || '');
                setShowModal(false);
              }}
              className="flex justify-between p-[10px] border-b hover:bg-[#f5f5f5]"
            >
              <Space className="">
                {/* {!isSubMenu && <ProfileOutlined />} */}
                {item.name}
              </Space>
              <CaretRightOutlined />
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}
