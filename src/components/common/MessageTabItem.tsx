import { Avatar, Badge, Flex } from 'antd';
import React from 'react';

export default function MessageTabItem() {
  return (
    <div>
      <Flex
        className="p-[10px] hover:bg-[#fff0d9]"
        justify="space-between"
        align="center"
        gap={10}
      >
        <Flex gap={20} className="w-full" align="center" justify="start">
          <Badge count={10}>
            <div>
              <Avatar size={50} />
            </div>
          </Badge>

          <Flex vertical className="w-4/5">
            <p className="truncate text-[14px] font-semibold">
              Dé lei dånh giå cho
            </p>
            <p className="text-[#9b9b9b] truncate text-[13px] font-semibold">
              Ô tô điện Vìnast
            </p>
            <Flex className="text-[12px] w-full text-[#b4b4b4]" gap={5}>
              <p className=" font-medium truncate max-w-[200px]">
                Xe này còn
                khôngqweeeeeeeasddddddddddddddddddddddddddddddddddddddddddddddddd
              </p>
              <p>12 giờ truóc</p>
            </Flex>
          </Flex>
        </Flex>
        <div>
          <Avatar size={50} shape="square" />
        </div>
      </Flex>
    </div>
  );
}
