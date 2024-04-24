import instanceAxios from '@/api/instanceAxios';
import { useAppDispatch } from '@/app/hooks';
import CMSCategory from '@/components/common/CMSCategory';
import { IJob } from '@/types/Job';
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

export default function PosterInformationTaxiPage() {
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
      .patch(`/taxi/poster-information/${currentID}/`, e)
      .then((res) => {
        form.resetFields();
        setOpenModalCreate(false);
        message.success('Đã cập nhật');
        mutate('fetchPosterInformationTaxiList');
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
      .delete(`/taxi/poster-information/${id}/`)
      .then((res) => {
        message.success('Xóa thành công');
        mutate('fetchPosterInformationTaxiList');
      })
      .catch((err) => {
        message.error('Thao tác thất bại');
      });
  };

  const fetchPosterInformationTaxiList = useCallback(async () => {
    await instanceAxios
      .get(`/taxi/poster-information/`, {
        params: {
          ...(valueFilter && { search: valueFilter }),
          page_size: currentPage,
        },
      })
      .then((res) => {
        setDataTotal(res.data.length);
        setDataList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage, valueFilter]);
  useSWR('fetchPosterInformationTaxiList', fetchPosterInformationTaxiList);

  useEffect(() => {
    fetchPosterInformationTaxiList();
  }, [fetchPosterInformationTaxiList]);
  // useEffect(() => {
  //   fetchUserList(valueFilter);
  // }, [fetchUserList, valueFilter]);
  const columns: ColumnsType<IJob> = [
    {
      title: '#',
      render: (value, record, index) => <ColumnHeightOutlined />,
    },
    {
      title: 'ID',
      dataIndex: 'id',
      render: (value, record, index) => record.id,
    },
    {
      title: 'Tên ngành nghề',
      dataIndex: 'Name',
    },
    {
      title: 'Hành động',
      width: 150,
      className: 'flex item-center justify-center',
      render: (value, record, index) => (
        <div className="flex gap-x-5 text-[20px] text-[#aea9c6]">
          <FormOutlined
            onClick={() => {
              setcurrentValue(record.name || '');
              setCurrentID(record.id || 0);
              setOpenModalCreate(true);
            }}
          />
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
        data={dataList.map((item, index) => ({ key: index, ...item }))}
        createAble={true}
        create={{
          url: '/taxi/poster-information/',
          inputName: ['Name'],
          // body: { asdas: 'asdd' },
          onSucces(res) {
            mutate('fetchPosterInformationTaxiList');
            message.success('Đã tạo sản phẩm');
          },
          onFailed(err) {
            message.error(err.response.data.detail);
          },
        }}
        columns={columns}
      />
      <Modal
        styles={{
          mask: {
            backdropFilter: 'blur(5px)',
          },
        }}
        centered
        title={<p className="text-center">Label</p>}
        open={openModalCreate}
        onCancel={() => setOpenModalCreate(false)}
        onOk={() => form.submit()}
      >
        <Form form={form} onFinish={onFinish} name="basic" layout="vertical">
          <Form.Item
            label={'Tên nghành nghề'}
            name={'Name'}
            rules={[{ required: true }]}
          >
            <Input defaultValue={currentValue} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
