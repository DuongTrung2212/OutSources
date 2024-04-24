import instanceAxios from '@/api/instanceAxios';
import { useAppDispatch } from '@/app/hooks';
import { login, logout } from '@/app/reducers/userReducer';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Services({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const route = useRouter();
  const [loadingPage, setLoadingPage] = useState(true);
  const cookie = getCookie('access');
  useEffect(() => {
    const fetchUserInfomation = async () => {
      await instanceAxios
        .get('/api/user/get_me')
        .then((res) => {
          dispatch(login(res.data.data));
        })
        .catch((err) => {
          dispatch(logout());
          deleteCookie('access');
          console.log(err);
        });
    };
    if (cookie) fetchUserInfomation();
    setLoadingPage(false);
  }, [dispatch, route, cookie]);

  return !loadingPage && children;
}
