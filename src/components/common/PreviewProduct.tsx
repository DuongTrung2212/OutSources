import { fetchCreateWorkPost } from '@/api/jobRequest';
import { HeartFilled, ShareAltOutlined } from '@ant-design/icons';
import { Flex, Image, Space, notification } from 'antd';
import React, { useContext } from 'react';

interface Props {
  onCancel?: () => void;
}

export default function PreviewProduct(props: Props) {
  // const data = useContext(PreviewDataContext);
  // const onSubmit = async () => {
  //   console.log(data.previewData);
  //   await fetchCreateWorkPost(data.previewData)
  //     .then((res) =>
  //       notification.success({
  //         message: 'Đã tạo',
  //         description: 'Đã tạo bài đăng',
  //       })
  //     )
  //     .catch((err) =>
  //       notification.error({
  //         message: 'Lỗi',
  //         description: 'Tạo bài đăng thất bại',
  //       })
  //     );
  // };
  return (
    <div className="w-full">
      <div className="w-full bg-white p-[10px] rounded-lg">
        <Image
          width={'100%'}
          height={300}
          className="object-cover "
          preview={false}
          src={''}
          alt=""
        />
        <div className="w-full overflow-x-auto">
          <div className="flex gap-x-2">
            {[...Array(50)].map((_, index) => (
              <Image
                key={index}
                width={100}
                height={100}
                className="object-cover "
                preview={false}
                src={''}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
      <div className="p-[10px] rounded-lg bg-white">
        <p className="font-semibold">Tuyển NV Nam, Nữ PV Nhà hàng tại quận 5</p>
        <div className="flex justify-between">
          <b className="text-[#d0021b]">$26.000</b>
          <div className="flex gap-x-5">
            <Space>
              <ShareAltOutlined />
              Chia sẻ
            </Space>
            <Space>
              <HeartFilled />
              lưu tin
            </Space>
          </div>
        </div>
        <div className="py-[10px]">
          <Space className="text-[#777777] ">
            <ShareAltOutlined />
            <p className="truncate w-[500px]">
              23 duröng Sö 14, Phuong 5, Quén Gö Väp, Tp Hö Chi Mi
            </p>
          </Space>
          <Space className="text-[#777777] ">
            <ShareAltOutlined />
            <p className="truncate w-[500px]">
              23 duröng Sö 14, Phuong 5, Quén Gö Väp, Tp Hö Chi Mi
            </p>
          </Space>
          <Space className="text-[#777777] ">
            <ShareAltOutlined />
            <p className="truncate w-[500px]">
              23 duröng Sö 14, Phuong 5, Quén Gö Väp, Tp Hö Chi Mi
            </p>
          </Space>
        </div>
      </div>
      <div className="p-[10px] rounded-lg bg-white">
        <p className="font-semibold">Đặc điểm công việc</p>
        <div className="grid grid-cols-2 gap-y-2 py-[10px]">
          {[...Array(7)].map((_, index) => (
            <Space className="w-1/2" key={index}>
              <ShareAltOutlined />
              <p className="truncate w-[300px]">
                23 duröng Sö 14, Phuong 5, Quén Gö Väp, Tp Hö Chi Mi
              </p>
            </Space>
          ))}
        </div>
      </div>
      <Flex gap={20}>
        <button
          onClick={() => {
            props.onCancel?.();
          }}
          className="flex-1 py-[10px] rounded-lg border text-[#da7502] border-[#da7502]  hover:bg-[#ffe9c2]"
        >
          Chỉnh sửa
        </button>
        <button
          // onClick={onSubmit}
          className="flex-1 py-[10px] rounded-lg border text-white bg-[#da7502] border-[#da7502] hover:text-white hover:bg-[#da6702]"
        >
          Đăng tin
        </button>
      </Flex>
    </div>
  );
}
