import { CheckCircleFilled } from '@ant-design/icons';
import { Button, Col, Flex, Row, Space } from 'antd';
import React from 'react';

export default function ActiveCreateMarketPage() {
  return (
    <div className="w-full p-[10px] rounded-lg overflow-hidden bg-white">
      <Flex
        vertical
        className="w-full bg-[#12a154] p-[10px] rounded-lg text-white"
      >
        <Row>
          <Col span={1}>
            <CheckCircleFilled className="text-[30px]" />
          </Col>
          <Flex vertical>
            <p className="font-bold text-[20px]">
              Bạn đã hoàn tất tạo Cửa hàng / Chuyên trang
            </p>
          </Flex>
        </Row>
        <Row>
          <Col span={1}></Col>
          <i>Chợ tốt Đài Loan đang tiến hành duyệt yêu cầu cửa bạn</i>
        </Row>
        <Flex className="w-full justify-end mt-[20px]">
          <button className="!text-white !text-[16px] flex items-center border-2 rounded-lg px-[15px] justify-center !py-[5px] !bg-transparent !font-semibold">
            Chỉnh sửa
          </button>
        </Flex>
      </Flex>
    </div>
  );
}
