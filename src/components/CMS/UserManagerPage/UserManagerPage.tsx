import labelManager from '@/services/labelManager';
import { Avatar, Space, Tabs, TabsProps } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import AccountInfoTag from './components/AccountInfoTag';

const tabList = [
  {
    key: 0,
    label: 'Thông tin tài khoản',
    children: <AccountInfoTag />,
  },
  {
    key: 1,
    label: 'Tin đăng',
    children: 'Content of Tab Pane 2',
  },
  {
    key: 2,
    label: 'Lịch sử giao dịch',
    children: 'Content of Tab Pane 3',
  },
];
const onChange = (key: string) => {
  console.log(key);
};
export default function UserManagerPage() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className="w-full">
      <div>{labelManager('Khánh Sky')}</div>
      <div className="w-full flex gap-x-10">
        <div className="w-1/5 flex flex-col items-center rounded shadow bg-white p-[10px]">
          <Avatar size={100} src={''} />
          <p className="text-[20px] p-[10px]">Khánh Sky</p>
          <p>Aomori, Toàn quốc</p>
          <Space className="py-[20px]">
            849,000¥ <Link href="">Nạp tiền</Link>
          </Space>
          <p>IP: 182.234.162.219</p>
          <p>Ngày đăng kí: 16/09/2023</p>
          <p>Hoạt động cuối: 7 phút trước</p>
        </div>
        <div className="w-[75%] p-[10px] bg-white">
          <div className="flex w-full">
            {tabList?.map((item, index) => (
              <div
                onClick={() => setCurrentTab(item.key)}
                className={`w-1/2 group text-center ${
                  currentTab === index
                    ? "border-b-4 border-[#5d5386] before:content[''] before:a before:w-full before:h-[3px]"
                    : 'border-b-2'
                }  p-[10px]`}
                key={index}
              >
                {item.label}
              </div>
            ))}
          </div>
          <div className="w-full p-[20px]">{tabList[currentTab].children}</div>
          {/* <Tabs
            // centered
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
          /> */}
        </div>
      </div>
    </div>
  );
}
