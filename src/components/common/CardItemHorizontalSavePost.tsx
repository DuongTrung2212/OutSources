import {
  EditOutlined,
  EyeOutlined,
  HeartFilled,
  MoreOutlined,
  ShareAltOutlined,
  WindowsOutlined,
} from '@ant-design/icons';
import { Avatar, Badge, Dropdown, Flex, Image, Space } from 'antd';
import React from 'react';

export default function CardItemHorizontalSavePost() {
  return (
    <div className="w-full">
      <Badge.Ribbon
        // className="invisible"
        color="red"
        placement="start"
        text={<i className="font-semibold">Xe ghép</i>}
      >
        <Flex
          align="center"
          gap={20}
          className=" relative bg-white rounded-lg p-[10px]"
        >
          <div className="relative rounded-lg overflow-hidden">
            <Image
              width={130}
              height={130}
              preview={false}
              className=""
              alt=""
              src=""
            />
            <p className="absolute w-full left-0 bottom-0 py-[5px] text-[10px] text-white text-center bg-[rgba(0,0,0,0.7)]">
              Đẫ ẩn
            </p>
          </div>
          <Flex vertical gap={5}>
            <p className="font-medium">
              SH 125 CBS 2020 xe CVC Chät Siéu Li-rdT NEW
            </p>
            <b className="text-red-500 text-[14px]">$3000/tháng</b>
            <Space>
              <Avatar src={''} size={20} />
              <p className="text-[#9b9b9b] font-medium">SimpRaidenEi</p>
            </Space>
            <Space>
              <WindowsOutlined />
              <p className="text-[#9b9b9b] font-normal">Thành phố đài nam</p>
            </Space>
            <Flex gap={10}>
              <p className="bg-[#f4f4f4] text-[12px] px-[10px] py-[5px] rounded-lg">
                2 giờ trước
              </p>
              <p className="bg-[#f4f4f4] text-[12px] px-[10px] py-[5px] rounded-lg">
                Ngày làm: 10/10 /23
              </p>
            </Flex>
          </Flex>
          <Flex className="absolute bottom-5 right-5" gap={20}>
            <button className=" text-[12px] font-semibold  px-[20px] py-[2px] border border-green-500 text-green-500 rounded-full">
              Chat
            </button>
            <HeartFilled style={{ color: 'red' }} />
          </Flex>

          <Dropdown
            placement="bottomRight"
            menu={{
              items: [
                {
                  key: '1',
                  icon: <ShareAltOutlined />,
                  label: 'Chia sẻ',
                },
                {
                  key: '2',
                  icon: <EyeOutlined />,
                  label: 'Đã bán / Ẩn tin',
                },
                {
                  key: '3',
                  icon: <EditOutlined />,
                  label: 'Sửa tin',
                },
              ],
            }}
          >
            <MoreOutlined className="absolute right-5 top-5" />
          </Dropdown>
        </Flex>
      </Badge.Ribbon>
    </div>
  );
}
