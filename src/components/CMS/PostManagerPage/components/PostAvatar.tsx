import { LinkOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import React from 'react';

export default function PostAvatar() {
  return (
    <div className="w-full">
      <div className="flex gap-x-2">
        <Avatar size={50} shape="square" src={''} />
        <div className="flex flex-col">
          <p>Cho thuê xe tự lái hoặc có tài</p>
          <div className="flex gap-x-3">
            <Space>
              <UnorderedListOutlined />
              <p>Dịch vụ</p>
            </Space>
            <Space>
              <LinkOutlined />
              <p>Aomori</p>
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
}
