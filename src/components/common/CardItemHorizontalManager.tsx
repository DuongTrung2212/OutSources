import { textDefault } from '@/services/dataDefault';
import getImageLink from '@/services/getImageLink';
import { IProduct } from '@/types/Job';
import {
  EditOutlined,
  EyeOutlined,
  MoreOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { Dropdown, Flex, Image } from 'antd';
import Link from 'next/link';
import React from 'react';
interface Props {
  data?: IProduct;
}
export default function CardItemHorizontalManager(props: Props) {
  return (
    <div className="w-full">
      <Flex
        align="center"
        gap={20}
        className=" relative bg-white rounded-lg p-[10px]"
      >
        <div className="relative rounded-lg overflow-hidden">
          <Image
            width={100}
            height={70}
            preview={false}
            className=""
            alt=""
            src={getImageLink(props.data || {})}
          />
          <p className="absolute w-full left-0 bottom-0 py-[5px] text-[10px] text-white text-center bg-[rgba(0,0,0,0.7)]">
            Đẫ ẩn
          </p>
        </div>
        <Flex vertical gap={5}>
          <p>{props.data?.Title || textDefault}</p>
          <b className="text-red-500 text-[14px]">${props.data?.Price || 0}</b>
          <p className="text-[#9b9b9b] text-[12px]">
            Hiện thị: <b className="text-[#9b9b9b]">03/06/23 - 07/10/23</b>
          </p>
        </Flex>
        <button className="absolute bottom-5 text-[12px] font-semibold right-5 px-[20px] py-[5px] border border-green-500 text-green-500 rounded-lg">
          Đợi duyệt
        </button>
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
                label: (
                  <Link href={`/product/${props.data?.Url}/${props.data?.id}`}>
                    Sửa tin
                  </Link>
                ),
              },
            ],
          }}
        >
          <MoreOutlined className="absolute right-5 top-5" />
        </Dropdown>
      </Flex>
    </div>
  );
}
