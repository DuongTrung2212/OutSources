import { fetchAreaList } from '@/api/addressRequest';
import instanceAxios from '@/api/instanceAxios';
import { useAppDispatch } from '@/app/hooks';
import CMSCategory from '@/components/common/CMSCategory';
import InputCustom from '@/components/common/InputCustom';
import SelectCustom from '@/components/common/SelectCustom';
import { IJob } from '@/types/Job';
import {
  CloseOutlined,
  ColumnHeightOutlined,
  FormOutlined,
} from '@ant-design/icons';
import {
  Flex,
  Form,
  Image,
  Input,
  Modal,
  Popconfirm,
  Switch,
  message,
} from 'antd';
import { useForm } from 'antd/es/form/Form';
import Table, { ColumnsType } from 'antd/es/table';
import React, { useCallback, useEffect, useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { useEffectOnce } from 'usehooks-ts';

export default function GeographicalAreaAddressPage() {
  const [dataList, setDataList] = useState<IJob[]>([]);
  const [valueFilter, setValueFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [dataTotal, setDataTotal] = useState(0);
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [currentID, setCurrentID] = useState(0);
  const [areaID, setAreaID] = useState<string | number>(0);
  const [addresValue, setAddresValue] = useState<string | number>(0);
  const [addresENValue, setAddresENValue] = useState<string | number>(0);
  const [addresList, setAddresList] = useState<IJob[]>([]);
  const [currentValue, setcurrentValue] = useState('');
  const { mutate } = useSWRConfig();
  const [form] = useForm();

  const onFinish = async (e: any) => {
    await instanceAxios
      .patch(`/location/address/${currentID}/`, e)
      .then((res) => {
        form.resetFields();
        setOpenModalCreate(false);
        message.success('Đã cập nhật');
        mutate('fetchGeographicalAreaAddressList');
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
      .delete(`/location/address/${id}/`)
      .then((res) => {
        message.success('Xóa thành công');
        mutate('fetchGeographicalAreaAddressList');
      })
      .catch((err) => {
        message.error('Thao tác thất bại');
      });
  };

  const fetchGeographicalAreaAddressList = useCallback(async () => {
    await instanceAxios
      .get(`/location/address/`, {
        params: {
          ...(valueFilter && { search: valueFilter }),
          page_size: currentPage,
        },
      })
      .then((res) => {
        setDataTotal(res.data.data.count || [...res.data.data].length);
        setDataList(res.data.data || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage, valueFilter]);
  useSWR('fetchGeographicalAreaAddressList', fetchGeographicalAreaAddressList);

  useEffect(() => {
    const fethAreaListData = async () => {
      await fetchAreaList()
        .then((res) => {
          setAddresList(res.data.data || []);
        })
        .catch((err) => {});
    };
    fethAreaListData();
    fetchGeographicalAreaAddressList();
  }, [fetchGeographicalAreaAddressList]);
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
      title: 'Tên người bán',
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
        data={dataList}
        createAble={true}
        create={{
          url: '/location/address/',
          inputName: ['Name'],
          // body: { asdas: 'asdd' },
          onOKModal() {
            instanceAxios
              .post('/location/address/', {
                Location: areaID,
                Name: addresValue,
                Name_en: addresENValue,
              })
              .then((res) => {
                form.resetFields();
                mutate('fetchGeographicalAreaAddressList');
                message.success(res.data.message);
              })
              .catch((err) => {
                message.error('Đã có lỗi xảy ra');
              });
          },
          onSucces(res) {
            mutate('fetchGeographicalAreaAddressList');
            message.success(res.data.message);
          },
          onFailed(err) {
            message.error(err.response.data.detail);
          },
          childrenModal: (
            <Flex vertical gap={10}>
              <SelectCustom
                onChange={(e) => setAreaID(e || '')}
                data={addresList}
                label={'Chọn khu vực'}
              />
              <InputCustom
                onChange={(e) => setAddresValue(e || '')}
                label={'Địa chỉ'}
              />
              <InputCustom
                onChange={(e) => setAddresENValue(e || '')}
                label={'Địa chỉ theo EN'}
              />
            </Flex>
          ),
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
