import React, { useState } from 'react';
import { Dropdown, Progress, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';
import PostAvatar from './components/PostAvatar';
import {
  CaretDownOutlined,
  CloseOutlined,
  FormOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Tin đăng',
    dataIndex: 'name',
    render: (value, record, index) => <PostAvatar />,
  },
  {
    title: 'Người bán',
    dataIndex: 'age',
  },
  {
    title: 'Thời gian',
    dataIndex: 'address',
  },
  {
    title: 'Thời hạn',
    dataIndex: 'address',
    render: (value, record, index) => (
      <Progress
        strokeColor={'#f7b733'}
        percent={50 + Math.floor(Math.random() * 51)}
        showInfo={false}
      />
    ),
  },
  {
    title: 'Trạng thái',
    dataIndex: 'address',
    render: (value, record, index) => (
      <Dropdown
        trigger={['click']}
        menu={{
          items: [
            {
              key: '1',
              label: 'Không hoạt động',
            },
            {
              key: '2',
              label: 'Từ chối',
            },
            {
              key: '3',
              label: 'Khóa',
            },
          ],
        }}
      >
        <Space className="px-[5px] rounded text-white font-normal bg-[#f0ad4e]">
          Chờ duyệt
          <CaretDownOutlined />
        </Space>
      </Dropdown>
    ),
  },
  {
    dataIndex: 'address',
    render: (value, record, index) => (
      <div className="flex gap-x-5 text-[20px] text-[#aea9c6]">
        <QuestionCircleOutlined />
        <FormOutlined />
        <CloseOutlined />
      </div>
    ),
  },
];

const filterList = [
  'Không lọc',
  'Chờ duyệt',
  'Hoạt động',
  'Đang khóa',
  'Đã hêt hạn',
  'Đang ẩn',
  'Đã bán',
  'Chờ thanh toán',
  'Từ chối',
  'Không có ảnh',
  'Đã xóa',
];
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

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
export default function ListPage() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return (
    <div className="w-full">
      <p className="text-[30px] py-[20px] font-bold text-[#2c304d]">
        Quản lý tin đăng
      </p>
      <input
        className="w-full outline-none border p-[10px]"
        placeholder="Nhập tiêu đề tin đăng, thành phố hoặc thông tin khách hàng..."
      />
      <div className="flex text-[16px] text-[#5d4c5c] gap-x-1 py-[30px]">
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
          <Space className="px-[20px] text-white rounded font-semibold py-[10px] bg-[#5d5385]">
            Danh mục
            <CaretDownOutlined />
          </Space>
        </Dropdown>
        <Dropdown
          trigger={['click']}
          placement="bottomLeft"
          menu={{
            items: filterList.map((item, index) => ({
              key: index,
              label: item,
              className: '!font-medium !text-[#3f4346]',
            })),
            style: { padding: 10 },
          }}
        >
          <Space className="px-[20px] text-white rounded font-semibold py-[10px] bg-[#5d5385]">
            Bộ lọc
            <CaretDownOutlined />
          </Space>
        </Dropdown>
        <button className="px-[20px] rounded font-semibold py-[10px] bg-[#e4e8f0]">
          Tin đăng hôm nay
        </button>
      </div>
      <div className="p-[10px] bg-white">
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  );
}
