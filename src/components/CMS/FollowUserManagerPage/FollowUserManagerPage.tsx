import labelManager from '@/services/labelManager';
import {
  CaretDownOutlined,
  CloseOutlined,
  FormOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { Dropdown, Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import PostAvatar from '../PostManagerPage/components/PostAvatar';

interface DataType {
  key: React.Key;
  name: string;
  email: string;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Họ tên',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Vị trí',
    dataIndex: 'address',
  },
  {
    title: 'Ngày đăng ký',
    dataIndex: 'address',
    render: (value, record, index) => 'as',
  },
  {
    dataIndex: 'address',
    render: (value, record, index) => (
      <div className="flex gap-x-5 text-[20px] text-[#aea9c6]">
        <CloseOutlined />
      </div>
    ),
  },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    email: `London, Park Lane no. ${i}`,
    address: `London, Park Lane no. ${i}`,
  });
}
export default function FollowUserManagerPage() {
  const categoryList = [
    'Tất cả',
    'Bất động sản',
    '-Căn hộ/Chung cư',
    'Nhà ở',
    'Đất',
    'Văn phòng, mặt bằng kinh doanh',
    'Phòng trọ',
    'Xe cộ',
    '-Ô tô',
    '-Xe máy',
  ];
  return (
    <div className="w-full">
      <div>{labelManager('Người theo dõi')}</div>
      <Dropdown
        trigger={['click']}
        placement="bottomLeft"
        menu={{
          items: categoryList.map((item, index) => ({
            key: index,
            label: item,
            className: '!font-medium !text-[#3f4346]',
          })),
          style: { padding: 10, maxHeight: 400, overflowY: 'auto' },
        }}
      >
        <Space className="px-[20px] text-white rounded font-semibold py-[10px] bg-[#f0ad4e]">
          Xuất file
          <CaretDownOutlined />
        </Space>
      </Dropdown>
      <div className="p-[20px] mt-[20px] bg-white rounded shadow">
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            position: ['bottomCenter'],
          }}
        />
      </div>
    </div>
  );
}
