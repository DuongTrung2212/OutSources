import { IJob } from '@/types/Job';
import { Flex, Space } from 'antd';
import React, { useState } from 'react';

interface Props {
  data: IJob[];
  label: string;
  required?: boolean;
  className?: string;
  onChange?: (e: string | number | undefined) => void;
  defaultValue?: string | number | undefined;
}
export default function HorizontalSelect(props: Props) {
  const [value, setValue] = useState<string | number | undefined>(
    props.defaultValue
  );
  return (
    <div className={props.className}>
      <Space
        className={`w-full text-[#9b9b9b] py-[5px] transition-all !text-[12px] font-medium`}
      >
        {props.label}{' '}
        {props.required && <span className="text-red-500">*</span>}
      </Space>
      <Flex className="text-[14px] cursor-pointer" wrap="wrap" gap={10}>
        {props.data.map((item, index) => (
          <p
            key={index}
            onClick={() => {
              props.onChange?.(item.value);
              setValue(item.value);
            }}
            className={`px-[20px] py-[5px] rounded-full bg-[#f4f4f4] ${
              value === item.name && 'bg-[#ffe9c2] text-[#da7502]'
            }`}
          >
            {item.name}
          </p>
        ))}
        {/* <p
          // onClick={() => setGenderId(2)}
          className={`px-[20px] py-[5px] rounded-full bg-[#f4f4f4] ${
            value === 2 && 'bg-[#ffe9c2] text-[#da7502]'
          }`}
        >
          Nữ
        </p> */}
      </Flex>
    </div>
  );
}
