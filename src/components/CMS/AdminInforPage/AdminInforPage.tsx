import labelManager from '@/services/labelManager';
import {
  CaretDownOutlined,
  LoadingOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import {
  Col,
  Dropdown,
  Image,
  Input,
  Row,
  Select,
  Space,
  Switch,
  Upload,
  message,
} from 'antd';
import {
  RcFile,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from 'antd/es/upload';
import React, { useState } from 'react';

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};
const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

export default function AdminInforPage() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );
  const roleList = [
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
  const propertieAdminList = [
    {
      label: 'Avatar',
      children: (
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? (
            <Image
              preview={false}
              src={imageUrl}
              alt="avatar"
              style={{ width: '100%' }}
            />
          ) : (
            uploadButton
          )}
        </Upload>
      ),
    },
    {
      label: 'Họ tên',
      children: <Input defaultValue={'SimpRaidenEi'} />,
    },
    {
      label: 'Vai trò',
      children: (
        <Dropdown
          trigger={['click']}
          placement="bottomLeft"
          menu={{
            items: roleList.map((item, index) => ({
              key: index,
              label: item,
              className: '!font-medium !text-[#3f4346]',
            })),
            style: { padding: 10, maxHeight: 400, overflowY: 'auto' },
          }}
        >
          <Space className="px-[20px]  rounded font-semibold py-[10px] text-[#2d314d] bg-[#f8f9fa]">
            Super Admin
            <CaretDownOutlined />
          </Space>
        </Dropdown>
      ),
    },
    {
      label: 'Số điện thoại',
      children: <Input defaultValue={'SimpRaidenEi'} />,
    },
    {
      label: 'Email',
      children: <Input defaultValue={'12`3123@mail.com'} />,
    },
    {
      label: 'Mật khẩu',
      children: <Input />,
    },
  ];
  return (
    <div className="w-full">
      <div>{labelManager('Quản trị viên: SimpRaidenEi')}</div>
      <div className="w-full flex flex-col bg-white p-[20px] gap-y-8">
        {propertieAdminList.map((item, index) => (
          <Row key={index}>
            <Col span={5} className="px-[10px]">
              <p className="text-[18px] text-[#2f4367] truncate">
                {item.label}
              </p>
            </Col>
            <Col>{item.children}</Col>
          </Row>
        ))}
      </div>
    </div>
  );
}
