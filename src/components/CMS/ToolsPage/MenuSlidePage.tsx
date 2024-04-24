import AddButtonManager from '@/components/common/AddButtonManager';
import labelManager from '@/services/labelManager';
import {
  CloseOutlined,
  ColumnHeightOutlined,
  DollarTwoTone,
  EditOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {
  Button,
  ColorPicker,
  Form,
  Input,
  Modal,
  Select,
  Switch,
  Table,
  Upload,
} from 'antd';
import { Option } from 'antd/es/mentions';
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';

interface DataType {
  key: React.Key;
  name: string;
  email: string;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    render: (value, record, index) => <ColumnHeightOutlined />,
  },
  {
    title: 'Icon menu',
    dataIndex: 'name',
    render: (value, record, index) => (
      <div className="flex flex-col text-[40px] font-medium">
        <DollarTwoTone />
      </div>
    ),
  },
  {
    title: 'Tên menu',
    dataIndex: 'email',
  },
  {
    title: 'Trạng thái',
    render: (value, record, index) => <Switch size="default" defaultChecked />,
  },
  {
    title: 'Clicks',
    dataIndex: 'address',
    render: (value, record, index) => index + Math.floor(Math.random() * 100),
  },
  {
    render: (value, record, index) => (
      <div className="flex gap-x-5 text-[20px] text-[#aea9c6]">
        <EditOutlined />
        <CloseOutlined />
      </div>
    ),
  },
];

const data: DataType[] = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    email: `London, Park Lane no. ${i}`,
    address: `London, Park Lane no. ${i}`,
  });
}

type FieldType = {
  icon?: string;
  text_color?: string;
  remember?: string;
  link?: string;
  login_required?: boolean;
  menu_name?: string;
};

export default function MenuSlidePage() {
  const [openModalCreate, setOpenModalCreate] = useState(false);

  const suffixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select defaultValue={'86'} style={{ width: 130 }}>
        <Option value="86">Liên kết trang</Option>
        <Option value="87">Option2</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div className="w-full">
      <div>{labelManager('Menu Slide')}</div>
      <AddButtonManager onClick={() => setOpenModalCreate(true)}>
        Thêm mới
      </AddButtonManager>
      <div className="p-[20px] bg-white shadow mt-[20px]">
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            position: ['bottomCenter'],
          }}
        />
      </div>
      <Modal
        width={'50%'}
        title={'Chỉnh sửa'}
        onCancel={() => setOpenModalCreate(false)}
        open={openModalCreate}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          labelAlign="left"
          style={{ maxWidth: 600 }}
          colon={false}
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Icon menu"
            name="icon"
            // rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item<FieldType>
            label="Màu văn bản"
            name="text_color"
            // rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <ColorPicker />
          </Form.Item>
          <Form.Item<FieldType>
            label="Tên menu"
            name="menu_name"
            // rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Yêu cầu đăng nhập"
            name="login_required"
            // rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Liên kết"
            name="link"
            // rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input addonAfter={suffixSelector} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
