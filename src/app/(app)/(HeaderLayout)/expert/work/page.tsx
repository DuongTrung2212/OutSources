'use client';
import TopWork from '@/components/common/TopWork';
import { CaretDownOutlined } from '@ant-design/icons';
import { Flex, Grid, Input, Space } from 'antd';
import React from 'react';

export default function SuperWorkPage() {
  return (
    <div className="w-4/5 m-auto rounded-lg bg-white p-[10px]">
      <Flex vertical className="p-[10px]">
        <p className="font-bold text-[18px] mb-3">
          Danh sách chuyên trang việc làm
        </p>
        <Flex gap={20}>
          <div className="w-[200px]">
            <Input placeholder="Tìm kiếm" width={100} />
          </div>
          <Flex align="center" className="border rounded-lg px-[10px] ">
            <p className="text-[14px]">Toàn quốc</p>
            <CaretDownOutlined />
          </Flex>
          <Flex align="center" className="border rounded-lg px-[10px] ">
            <p className="text-[14px]">Sắp xếp theo</p>
            <CaretDownOutlined />
          </Flex>
        </Flex>
      </Flex>
      <div className="grid grid-cols-2 gap-5 ">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex-[0.5_0.5_0%]">
            <TopWork />
          </div>
        ))}
      </div>
    </div>
  );
}
