import instanceAxios from '@/api/instanceAxios';
import { fetchUserDataList } from '@/api/userRequest';
import labelManager from '@/services/labelManager';
import {
  CaretDownOutlined,
  CloseOutlined,
  ColumnHeightOutlined,
  FormOutlined,
} from '@ant-design/icons';
import {
  ConfigProvider,
  Dropdown,
  Flex,
  Form,
  Image,
  Input,
  Modal,
  Space,
  Switch,
  Table,
} from 'antd';
import { AnyObject } from 'antd/es/_util/type';
import { useForm } from 'antd/es/form/Form';
import { ColumnsType } from 'antd/es/table';
import { AxiosResponse } from 'axios';
import React, { ReactNode, useEffect, useState } from 'react';
import { useSWRConfig } from 'swr';
import SelectCustom from './SelectCustom';
import { IJob } from '@/types/Job';

interface Props {
  // table: ReactNode;
  label?: string;
  createAble: boolean;
  data: AnyObject[];
  columns: ColumnsType<any>;
  // refeshWhenNotValue: string;
  onFilter?: (e?: string) => void;
  onSearch?: (e: string) => void;
  onChangPage?: (e: number) => void;
  dataTotal: number;
  keyForm?: IJob[];
  create?: {
    url?: string;
    body?: Object;
    inputName?: string[];
    onSucces?: (res: AxiosResponse) => void;
    onFailed?: (err: any) => void;
    onFinally?: () => void;
    childrenModal?: ReactNode;
    onOKModal?: () => void;
  };
}

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
export default function CMSCategory(props: Props) {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [valueFilter, setValueFilter] = useState('');
  const [form] = useForm();
  const { mutate } = useSWRConfig();
  const onFinish = async (e: any) => {
    await instanceAxios
      .post(props.create?.url || '', {
        ...e,
        ...(props.create?.body && props.create?.body),
      })
      .then((res) => {
        form.resetFields();
        setOpenModalCreate(false);
        props.create?.onSucces?.(res);
      })
      .catch((err) => props.create?.onFailed?.(err))
      .catch(() => props.create?.onFinally?.());
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {labelManager(props.label || '')}
        {props.createAble && (
          <button
            onClick={() => setOpenModalCreate(true)}
            className="px-[20px] py-[5px] text-[16px] text-white bg-[#14ae5c] rounded-full"
          >
            Tạo mới
          </button>
        )}
      </div>
      <div className="flex items-center justify-between">
        <p className="px-[20px] rounded-full py-[10px] bg-[#cad3dc]">
          {`Tổng tình trạng (${props.dataTotal})`}
        </p>
        <div className="w-2/5 flex items-center gap-x-5">
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
            <Space className="px-[20px] whitespace-nowrap rounded font-semibold py-[10px] text-[#2d314d] bg-[#f8f9fa]">
              Super Admin
              <CaretDownOutlined />
            </Space>
          </Dropdown>
          <Input
            onChange={(e) => {
              setValueFilter(e.target.value);
              props.onSearch?.(e.target.value);
            }}
            placeholder="Tìm kiếm theo tên"
            addonAfter={
              <button onClick={() => setValueFilter(valueFilter)}>
                Search
              </button>
            }
          />
        </div>
      </div>
      <div className="p-[20px] bg-white shadow mt-[20px]">
        {/* {props.table} */}
        <Table
          columns={props.columns}
          dataSource={props.data}
          pagination={{
            position: ['bottomCenter'],
            onChange: (e) => props.onChangPage?.(e),
          }}
        />
      </div>

      <Modal
        styles={{
          mask: {
            backdropFilter: 'blur(5px)',
          },
        }}
        centered
        title={<p className="text-center">Tạo mới</p>}
        open={openModalCreate}
        onCancel={() => setOpenModalCreate(false)}
        onOk={() => {
          props.create?.onOKModal?.();
          form.submit();
          setOpenModalCreate(false);
        }}
      >
        {props.create?.childrenModal || (
          <Form form={form} onFinish={onFinish} name="basic" layout="vertical">
            <Flex vertical gap={10}>
              {props.keyForm && (
                <Form.Item
                  label={'Form'}
                  name={'keyForm'}
                  rules={[{ required: true }]}
                >
                  <SelectCustom label={'Chọn form'} data={props.keyForm} />
                </Form.Item>
              )}

              <Form.Item
                label={'Tên'}
                name={props.create?.inputName?.[0]}
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Flex>
          </Form>
        )}
      </Modal>
    </div>
  );
}
