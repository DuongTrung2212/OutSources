import instanceAxios from '@/api/instanceAxios';
import { useAppDispatch } from '@/app/hooks';
import CMSCategory from '@/components/common/CMSCategory';
import { IJob, IShopViet } from '@/types/Job';
import {
  CloseOutlined,
  ColumnHeightOutlined,
  FormOutlined,
} from '@ant-design/icons';
import { Form, Image, Input, Modal, Popconfirm, Switch, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import Table, { ColumnsType } from 'antd/es/table';
import React, { useCallback, useEffect, useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { useEffectOnce } from 'usehooks-ts';

export default function PostVietShopPage() {
  const [dataList, setDataList] = useState<IJob[]>([]);
  const [valueFilter, setValueFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [dataTotal, setDataTotal] = useState(0);
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [currentID, setCurrentID] = useState(0);
  const [currentValue, setcurrentValue] = useState('');
  const { mutate } = useSWRConfig();
  const [form] = useForm();

  const onFinish = async (e: any) => {
    await instanceAxios
      .patch(`/shop-viet/items/${currentID}/`, e)
      .then((res) => {
        form.resetFields();
        setOpenModalCreate(false);
        message.success('Đã cập nhật');
        mutate('fetchPostVietShopList');
      })
      .catch((err) => {
        message.error('Thao tác thất bại');
      });
  };

  const onSearch = (e: string) => {
    setValueFilter(e);
  };
  const onChangPage = (e: number) => {
    setCurrentPage(e);
  };

  const fetchDelete = async (id: number) => {
    await instanceAxios
      .delete(`/shop-viet/items/${id}/`)
      .then((res) => {
        message.success('Xóa thành công');
        mutate('fetchPostVietShopList');
      })
      .catch((err) => {
        message.error('Thao tác thất bại');
      });
  };

  const fetchPostVietShopList = useCallback(async () => {
    await instanceAxios
      .get(`/shop-viet/items/`, {
        params: {
          ...(valueFilter && { search: valueFilter }),
          page_size: currentPage,
        },
      })
      .then((res) => {
        if (res.data && res.data.data && res.data.data.results) {
          setDataTotal(res.data.data.count || res.data.data.results.length);
          setDataList(res.data.data.results || []);
        } else {
          console.error('Không có dữ liệu hoặc cấu trúc dữ liệu không đúng.');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage, valueFilter]);
  useSWR('fetchPostVietShopList', fetchPostVietShopList);

  useEffect(() => {
    fetchPostVietShopList();
  }, [fetchPostVietShopList, valueFilter]);
  const columns: ColumnsType<IShopViet> = [
    {
      title: 'STT',
      render: (value, record, index) => index + 1,
    },
    {
      title: 'ID',
      dataIndex: 'id',
      render: (value, record, index) => record.id,
    },
    {
      title: 'Ảnh',
      dataIndex: 'Name',
      render: (value, record, index) => (
        <Image
          className="rounded"
          alt=""
          src={record.images_A3[0].Image || ''}
          width={100}
          height={60}
        />
      ),
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'Name',
      render: (value, record, index) => record.Title,
    },
    {
      title: 'User',
      dataIndex: 'Name',
      render: (value, record, index) => record.User.username,
    },

    {
      title: 'Hành động',
      width: 150,
      // className: 'flex item-center justify-center',
      render: (value, record, index) => (
        <div className="flex gap-x-5 text-[20px] text-[#aea9c6]">
          <Switch />
          <Popconfirm
            title={'Xác nhận xóa'}
            onConfirm={() => fetchDelete(record.id || 0)}
          >
            <CloseOutlined />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div>
      <CMSCategory
        label="Các loại công việc của hệ thống"
        onChangPage={onChangPage}
        dataTotal={dataTotal}
        onSearch={onSearch}
        data={dataList}
        createAble={true}
        create={{
          url: '/shop-viet/items/',
          inputName: ['Name'],
          // body: { asdas: 'asdd' },
          onSucces(res) {
            mutate('fetchPostVietShopList');
            message.success(res.data.message);
          },
          onFailed(err) {
            message.error(err.response.data.detail);
          },
        }}
        columns={columns}
        // refeshWhenNotValue={'fetchPostVietShopList'}
      />
      <Modal
        styles={{
          mask: {
            backdropFilter: 'blur(5px)',
          },
        }}
        centered
        title={<p className="text-center">Chỉnh sửa</p>}
        open={openModalCreate}
        onCancel={() => setOpenModalCreate(false)}
        onOk={() => form.submit()}
      >
        <Form form={form} onFinish={onFinish} name="basic" layout="vertical">
          <Form.Item label={'Tên'} name={'Name'} rules={[{ required: true }]}>
            <Input defaultValue={currentValue} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
