import AddButtonManager from '@/components/common/AddButtonManager';
import labelManager from '@/services/labelManager';
import {
  CloseOutlined,
  ColumnHeightOutlined,
  FormOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {
  Button,
  ColorPicker,
  Form,
  Image,
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
    title: 'Hình ảnh',
    dataIndex: 'name',
    render: (value, record, index) => (
      <Image className="rounded" alt="" src="" width={100} height={60} />
    ),
  },
  {
    title: 'Nội dung',
    dataIndex: 'email',
    render: (value, record, index) => (
      <div className="flex flex-col font-medium">
        <p>Banner - Banner dưới tiêu đề</p>
        <p className="text-[#9ea9b4]">Vị trí - Banner dưới tiêu đề</p>
      </div>
    ),
  },
  {
    title: 'Chuyển tiếp',
    dataIndex: 'address',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'address',
    render: (value, record, index) => <Switch />,
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

type FieldType = {
  icon?: string;
  text_color?: string;
  remember?: string;
  link?: string;
  login_required?: boolean;
  menu_name?: string;
};

export default function SliderPage() {
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
      <div>{labelManager('Banner/Quảng cáo')}</div>
      <div className="flex gap-x-3">
        <AddButtonManager
          onClick={() => setOpenModalCreate(true)}
          className=" bg-[#4ad49f]"
        >
          Thêm mới
        </AddButtonManager>
        <AddButtonManager className="bg-[#5d5386]">Cài đặt</AddButtonManager>
      </div>
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
