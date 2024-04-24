import { Avatar, Flex } from 'antd';
import React from 'react';

export default function NotificationItem() {
  return (
    <div>
      <Flex
        className="p-[10px] hover:bg-[#fff0d9]"
        justify="space-between"
        align="center"
        gap={10}
      >
        <div>
          <Avatar size={60} />
        </div>
        <Flex vertical className="w-full">
          <p className="line-clamp-3 text-[14px]">
            Dé lei dånh giå cho <b className="font-semibold">Khånh sky</b> , dé
            göp phän xäy dvng cong döng mua bån chät luqng vå nhön nhip hon.
          </p>
          <p className="text-[12px] font-medium text-[#b4b4b4]">12 giờ truóc</p>
        </Flex>
        <div>
          <Avatar size={60} shape="square" />
        </div>
      </Flex>
    </div>
  );
}
