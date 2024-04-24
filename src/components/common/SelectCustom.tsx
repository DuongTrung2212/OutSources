import { IJob } from '@/types/Job';
import { CaretDownOutlined } from '@ant-design/icons';
import { Flex, Form, Select, Space } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

interface Props {
  maxLength?: number;
  required?: boolean;
  label: string;
  className?: string;
  data: IJob[];
  onChange?: (e: string | number | undefined) => void;
  defaultValue?: string | number;
}

export default function SelectCustom(props: Props) {
  const [showModal, setShowModal] = useState(false);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState<string | number | undefined>(
    props.defaultValue
  );
  const divRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    setFocus(false);
  };
  const handleChange = (e: string | number) => {
    setValue(e);
    props.onChange?.(e || undefined);
  };
  useOnClickOutside(divRef, handleClickOutside);

  return (
    <div ref={divRef} className={`w-full transition-all ${props.className}`}>
      <div
        onClick={() => {
          setFocus(true);
          setShowModal(!showModal);
        }}
        className={`w-full relative flex justify-between px-[10px] rounded-lg border ${
          value ? 'py-[5px]' : 'py-[15px] '
        }`}
      >
        <div className="w-full flex flex-col gap-y-0">
          <Space
            className={`w-full text-[#9b9b9b] text-[14px] ${
              value && '!text-[12px] font-medium'
            }`}
          >
            {props.label} <span className="text-red-500">*</span>
          </Space>

          {value && (
            <p className="text-[14px]">
              {props.data?.find((item) => item.value === value)?.name}
            </p>
          )}
        </div>

        <CaretDownOutlined />
      </div>

      {showModal && (
        <Flex
          vertical
          className={`w-full flex justify-between  rounded-lg border`}
        >
          {props.data.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setShowModal(false);
                handleChange(item.value || '');
              }}
              className={`transform-gpu transition-transform duration-500 w-full relative flex justify-between hover:bg-gray-100 rounded-lg text-[#9b9b9b] text-[14px] px-[20px] py-[15px]`}
            >
              {item.name}
            </div>
          ))}
        </Flex>
      )}
    </div>
  );
}
