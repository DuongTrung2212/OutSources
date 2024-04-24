'use client';
import CardItemHorizontalSavePost from '@/components/common/CardItemHorizontalSavePost';
import { CaretRightOutlined } from '@ant-design/icons';
import { Flex, Space } from 'antd';
import React from 'react';

export default function SavePostPage() {
  return (
    <div className="w-3/5 m-auto">
      <p className="font-bold py-[20px] text-[20px]">Tin đăng đã lưu</p>
      <Flex vertical gap={10}>
        {[...Array(10)].map((item, index) => (
          <CardItemHorizontalSavePost key={index} />
        ))}
      </Flex>
      <button className="bg-white w-full my-[20px] py-[10px] text-[#38699f] rounded-lg font-semibold">
        <Space>
          <p>Xem thêm</p>
          <CaretRightOutlined />
        </Space>
      </button>
    </div>
  );
}
