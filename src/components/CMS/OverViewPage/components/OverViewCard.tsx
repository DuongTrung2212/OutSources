import { Avatar } from 'antd';
import React from 'react';

interface Props {
  type: 'USER' | 'POST';
  label?: string;
  value: string;
  name?: string;
}

export default function OverViewCard(props: Props) {
  return (
    <div className="w-full h-full bg-white text-black p-[10px] shadow rounded">
      <p className="text-[25px] font-semibold ">Đang chờ kiểm duyệt (1)</p>
      <div className="flex gap-x-3 mt-[10px]">
        <Avatar
          shape={props.type === 'USER' ? 'circle' : 'square'}
          size={50}
          src={''}
        />
        <div className="w-[70%]">
          {props.type === 'USER' && (
            <p className="font-semibold text-[#8e90a9]">Khánh Sky</p>
          )}
          <p className="font-semibold text-[#8e90a9]">
            {`Cho thué xe tu låi hoäc c0 tåi tü' 4- 45 ch6. Nhän hqp dbng tham quan,
          d`}
          </p>
          {props.type === 'POST' && (
            <p className="w-fit bg-[#f9e342] mt-[10px]  text-[12px] rounded px-[5px] py-[2px]">
              Chờ duyệt
            </p>
          )}
        </div>
      </div>
      <button className="block m-auto mt-[20px] bg-[#f2f3f8] px-[10px] py-[5px] rounded-full">
        Xem tất cả
      </button>
    </div>
  );
}
