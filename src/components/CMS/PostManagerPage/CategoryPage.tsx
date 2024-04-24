import labelManager from '@/services/labelManager';
import { Col, ConfigProvider, Row, Switch } from 'antd';
import React from 'react';

export default function CategoryPage() {
  const propertieCategoryList = [
    {
      label: 'Trạng thái',
      children: <Switch size="default" defaultChecked />,
    },
    {
      label: 'Hình ảnh',
      children: <Switch size="default" defaultChecked />,
    },
    {
      label: 'Kiểm duyệt tin đăng tự động',
      children: <Switch size="default" defaultChecked />,
    },
    {
      label: 'Hiện thị giá tiền',
      children: <Switch size="default" defaultChecked />,
    },
    {
      label: 'Biến thể giá',
      children: <Switch size="default" defaultChecked />,
    },
    {
      label: 'Đấu giá',
      children: <Switch size="default" defaultChecked />,
    },
    {
      label: 'Giao dịch trung gian',
      children: <Switch size="default" defaultChecked />,
    },
    {
      label: 'Danh mục có trả phí',
      children: <Switch size="default" defaultChecked />,
    },
  ];
  return (
    <div className="w-full">
      <div>{labelManager('Thêm danh mục mới')}</div>
      <div className="flex flex-col gap-y-8 rounded bg-white p-[20px] shadow">
        {propertieCategoryList.map((item, index) => (
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
