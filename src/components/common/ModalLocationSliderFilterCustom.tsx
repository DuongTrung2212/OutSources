import { Collapse, Flex, Modal, Slider, Space } from 'antd';
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
  label: string;
  className?: string;
  defaultValue?: number[];
  min?: number;
  max?: number;
  onChange?: (e: number[]) => void;
  onChangeLabel?: (e: string | number | undefined) => void;
}

export default function ModalLocationSliderFilterCustom(props: Props) {
  const [showModal, setShowModal] = useState(false);
  const [areaList, setAreaList] = useState<ILocationResponse[]>([]);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [value, setValue] = useState<number[]>(props.defaultValue || []);

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
        <p className="text-[14px]">
          {value[1]
            ? `${props.label} từ ${
                value[0] || props.defaultValue?.[0] || 0
              } đến ${value[1] || props.defaultValue?.[1] || 0}`
            : props.label}
        </p>
        <CaretDownOutlined />
      </Flex>
      <Modal
        width={700}
        title={
          <div className="relative">
            <p className=" text-[20px] font-bold py-[10px] text-center">
              {props.label}
            </p>
          </div>
        }
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
          <p className="text-[14px]">
            {props.label} từ <b>{value[0] || props.defaultValue?.[0] || 0} </b>{' '}
            đến <b>{value[1] || props.defaultValue?.[1] || 0} </b>
          </p>
          <Slider
            range
            min={props.min || 0}
            max={props.max || 100}
            value={value}
            onChange={(e) => {
              setValue(e);
            }}
            // defaultValue={[20, 50]}
          />
          <button
            onClick={() => props.onChange?.(value)}
            className="w-full text-white bg-[#ffab4c] py-[20px] text-center rounded-lg"
          >
            Áp dụng
          </button>
        </div>
      </Modal>
    </div>
  );
}
