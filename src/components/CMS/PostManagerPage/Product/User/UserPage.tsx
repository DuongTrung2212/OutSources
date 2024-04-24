import instanceAxios from '@/api/instanceAxios';
import { useAppDispatch } from '@/app/hooks';
import CMSCategory from '@/components/common/CMSCategory';
import {
  CloseOutlined,
  ColumnHeightOutlined,
  FormOutlined,
} from '@ant-design/icons';
import { Image, Switch } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import React, { useCallback, useEffect, useState } from 'react';
import { useEffectOnce } from 'usehooks-ts';

export default function UserPage() {
  const [userList, setUserList] = useState<IUser[]>([]);
  const [valueFilter, setValueFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [dataTotal, setDataTotal] = useState(0);
  const dispatch = useAppDispatch();

  const onSearch = (e: string) => {
    setValueFilter(e);
  };
  const onChangPage = (e: number) => {
    setCurrentPage(e);
  };

  const fetchUserList = useCallback(
    async (searchData?: string) => {
      await instanceAxios
        .get(`/users/`, {
          params: {
            ...(valueFilter && { search: valueFilter }),
            page_size: currentPage,
          },
        })
        .then((res) => {
          setDataTotal(res.data.data.count || [...res.data.data].length);
          setUserList(res.data.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [currentPage, valueFilter]
  );
  useEffect(() => {
    fetchUserList();
  }, [fetchUserList]);
  // useEffect(() => {
  //   fetchUserList(valueFilter);
  // }, [fetchUserList, valueFilter]);
  const columns: ColumnsType<IUser> = [
    {
      render: (value, record, index) => <ColumnHeightOutlined />,
    },
    {
      title: 'ID',
      dataIndex: 'id',
      render: (value, record, index) => record.id,
    },
    {
      title: 'Ảnh',
      dataIndex: 'avatar',
      render: (value, record, index) => (
        <Image
          className="rounded"
          alt=""
          src={record.avatar || ''}
          width={100}
          height={60}
        />
      ),
    },
    {
      title: 'Tên đăng nhập',
      dataIndex: 'username',
      // render: (value, record, index) => (
      //   <div className="flex flex-col font-medium">
      //     <p>Banner - Banner dưới tiêu đề</p>
      //     <p className="text-[#9ea9b4]">Vị trí - Banner dưới tiêu đề</p>
      //   </div>
      // ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Họ',
      dataIndex: 'last_name',
    },
    {
      title: 'Tên',
      dataIndex: 'first_name',
    },
    {
      title: 'Chức vụ',
      dataIndex: 'address',
      render: (value, record, index) =>
        !record.is_staff && !record.is_staff ? 'ADMIN' : 'MEMBER',
    },
    // {
    //   render: (value, record, index) => (
    //     <div className="flex gap-x-5 text-[20px] text-[#aea9c6]">
    //       <FormOutlined />
    //       <CloseOutlined />
    //     </div>
    //   ),
    // },
  ];

  // const dataList: ITableDataType[] = [];
  // for (let i = 0; i < 46; i++) {
  //   dataList.push({
  //     key: i,
  //     name: `Edward King ${i}`,
  //     email: `London, Park Lane no. ${i}`,
  //     address: `London, Park Lane no. ${i}`,
  //   });
  // }
  return (
    <CMSCategory
      label="Người dùng"
      onChangPage={onChangPage}
      dataTotal={dataTotal}
      createAble={false}
      onSearch={onSearch}
      data={userList}
      columns={columns}
    />
  );
}
