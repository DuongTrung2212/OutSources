import { CaretRightOutlined } from '@ant-design/icons';
import React from 'react';

interface Props {
  title: string;
  subTitle: string;
  shadow: boolean;
  onClick: () => void;
}

export default function TitleBar(props: Props) {
  return (
    <div
      className={`font-bold bg-white rounded-lg ${
        props.shadow && 'shadow-[0_2px_8px_rgba(0,0,0,.15)]'
      } cursor-pointer flex justify-between py-[10px] p-[10px] text-[20px]`}
    >
      <p className="text-[14px]">{props.title}</p>
      <div onClick={props.onClick} className="flex items-center gap-x-3">
        <b className="text-[14px] font-medium text-[#38699f]">
          {props.subTitle}{' '}
        </b>
        <CaretRightOutlined />
      </div>
    </div>
  );
}
