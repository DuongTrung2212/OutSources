import labelManager from '@/services/labelManager';
import { CloseOutlined, FormOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';

interface DataType {
  key: React.Key;
  name: string;
  email: string;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Tên banner',
    dataIndex: 'name',
    render: (value, record, index) => (
      <div className="flex flex-col font-medium">
        <p>Banner - Banner dưới tiêu đề</p>
        <p className="text-[#9ea9b4]">Vị trí - Banner dưới tiêu đề</p>
      </div>
    ),
  },
  {
    title: 'Ngày bắt đầu',
    dataIndex: 'email',
  },
  {
    title: 'Ngày kết thúc',
    dataIndex: 'address',
  },
  {
    title: 'Clicks',
    dataIndex: 'address',
    render: (value, record, index) => 'as',
  },
  {
    render: (value, record, index) => (
      <div className="flex gap-x-5 text-[20px] text-[#aea9c6]">
        <FormOutlined />
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
export default function BannerManagerPage() {
  return (
    <div>
      <div>{labelManager('Banner/Quảng cáo')}</div>
      <button className="rounded py-[10px] px-[20px] text-white bg-[#4ad49f]">
        Thêm mới
      </button>
      <div className="p-[20px] bg-white shadow mt-[20px]">
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
