import { Col, Input, Row, Segmented, Select } from 'antd';
import React from 'react';

export default function AccountInfoTag() {
  const accountProperties = [
    {
      label: 'Cửa hàng',
      children: 'Điện thoại Japan',
    },
    {
      label: 'Trạng thái',
      children: (
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
          ]}
        />
      ),
    },
    {
      label: 'Loại tài khoản',
      children: (
        <Segmented
          options={[
            { label: 'Cá nhân', value: 'Cá nhân' },
            { label: 'Công ty', value: 'Công ty' },
          ]}
        />
      ),
    },
    {
      label: 'Tên',
      children: <Input />,
    },
    {
      label: 'Họ',
      children: <Input />,
    },
    {
      label: 'Email',
      children: <Input />,
    },
    {
      label: 'Mật khẩu',
      children: <Input />,
    },
  ];
  return (
    <div className="flex flex-col gap-y-5">
      {accountProperties.map((item, index) => (
        <Row key={index}>
          <Col span={4}>{item.label}</Col>
          <Col>{item.children}</Col>
        </Row>
      ))}
    </div>
  );
}
