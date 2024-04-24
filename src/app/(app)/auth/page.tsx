'use client';
import instanceAxios from '@/api/instanceAxios';
import { useAppDispatch } from '@/app/hooks';
import { login } from '@/app/reducers/userReducer';
import LoginForm from '@/components/common/LoginForm';
import RegisterForm from '@/components/common/RegisterForm';
import { auth } from '@/services/base';
// import { auth } from '@/services/base';
import { FacebookFilled, GoogleSquareFilled } from '@ant-design/icons';
import {
  SignIn,
  SignInButton,
  SignOutButton,
  SignedIn,
  useAuth,
  useSignIn,
  useUser,
} from '@clerk/nextjs';

import { Button, Form, Image, Input, message, notification } from 'antd';
import { setCookie } from 'cookies-next';
import {
  signInWithPopup,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
  FacebookAuthProvider,
} from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useEffectOnce } from 'usehooks-ts';

export default function AuthPage() {
  const [currentForm, setCurrentForm] = useState<
    'LOGIN' | 'REGISTER' | 'CONFIRMOTP' | 'FORGET' | 'RESETPASSWORD'
  >('LOGIN');
  const [authLoading, setAuthLoading] = useState(false);
  const [email, setEmail] = useState('');
  const route = useRouter();
  const dispatch = useAppDispatch();
  const { getToken, isSignedIn } = useAuth();
  const { signIn, isLoaded } = useSignIn();
  useEffect(() => {
    const fetchApi = async () => {
      await instanceAxios
        .post(`/api/token/google-oauth/`, {
          access_token: getToken(),
        })
        .then((res) => console.log(res))
        .catch((err) => {
          const token = getToken();
          console.log('assassdsdas', token);
        });
    };
    if (signIn?.status === 'complete') {
      fetchApi();
    }
  }, [getToken, isSignedIn, signIn?.status]);

  const socialNetWorkLis = [
    {
      label: 'Facebook',
      icon: <FacebookFilled className="text-[20px]" />,
      providerType: 'FACEBOOK',
    },
    {
      label: 'Google',
      icon: <GoogleSquareFilled className="text-[20px]" />,
      providerType: 'GOOGLE',
    },
  ];

  const providerGG = new GoogleAuthProvider();
  const providerFB = new FacebookAuthProvider();
  const authGG = (providerType: string) => {
    signInWithPopup(auth, providerType === 'FACEBOOK' ? providerFB : providerGG)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential =
          providerType === 'FACEBOOK'
            ? FacebookAuthProvider.credentialFromResult(result)
            : GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        instanceAxios
          .post(
            `/api/auth/${providerType === 'FACEBOOK' ? 'facebook' : 'google'}/`,
            {
              access_token: token,
            }
          )
          .then((res) => {
            setCookie('access', res.data.access);
            setCookie('refresh', res.data.refresh);
            dispatch(login(res.data.user));
            route.push('/');
          })
          .catch((err) => {
            notification.error({ message: 'Đăng nhập thất bại!' });
          });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert(errorMessage);
        // ...
      });
  };

  // const signInWithGoogle = () =>
  //   signIn?.authenticateWithRedirect({
  //     strategy: 'oauth_google',
  //     redirectUrl: '/sso-callback',
  //     redirectUrlComplete: '/',
  //   });
  const onLogin = async (e: IUserLogin) => {
    await instanceAxios
      .post('/api/auth/login/', e)
      .then((res) => {
        dispatch(login(res.data.user));
        setCookie('access', res.data.access);
        setCookie('refresh', res.data.refresh);
        notification.success({
          message: 'Xin chào!!!',
          description: 'Cảm ơn bạn đã quan tâm đến chúng tôi.',
        });
        route.push('/');
      })
      .catch((err) => {
        notification.error({
          message: 'Không thể đăng nhập!!!',
          description: 'Vui lòng xem lại thông tin của bạn.',
        });
        console.log(err);
      });
  };
  const onRegister = async (e: IUserRegister) => {
    setAuthLoading(true);
    await instanceAxios
      .post('/api/user/register/', e)
      .then((res) => {
        notification.success({
          message: 'Thông báo',
          description: 'Đăng kí thành công',
        });
      })
      .catch((err) => {
        notification.error({
          message: 'Thông báo',
          description: 'Tài khoản hoặc username đã tồn tại',
        });
        console.log(err);
      })
      .finally(() => setAuthLoading(false));
  };
  const onConfirmOTP = async (e: IUserRegister) => {
    setAuthLoading(true);
    await instanceAxios
      .get(`/api/user/verify/${e.verify_code}/`)
      .then((res) => {
        route.push('/');
        notification.success({
          message: 'Thông báo',
          description: 'Đăng kí thành công',
        });
      })
      .catch((err) => {
        notification.error({
          message: 'Thông báo',
          description: 'Đã có lỗi xảy ra',
        });
        console.log(err);
      })
      .finally(() => setAuthLoading(false));
  };

  const onForgot = async (e: IUserRegister) => {
    setAuthLoading(true);
    await instanceAxios
      .post('/api/user/forgot-password/', e)
      .then((res) => {
        notification.success({
          message: 'Xác thực Email',
          description: 'Vui lòng nhập mã OTP gửi đến eamil của bạn.',
        });
        setCurrentForm('RESETPASSWORD');
      })
      .catch((err) => {
        notification.error({
          message: 'Thông báo',
          description: 'Email không tồn tại.',
        });
        console.log(err);
      })
      .finally(() => setAuthLoading(false));
  };
  const onReset = async (e: IUserRegister) => {
    setAuthLoading(true);
    await instanceAxios
      .post('/api/user/reset-password/', { ...e, email })
      .then((res) => {
        notification.success({
          message: 'Xác thực Email',
          description: 'Vui lòng nhập mã OTP gửi đến eamil của bạn',
        });
        route.push('/');
      })
      .catch((err) => {
        notification.error({
          message: 'Thông báo',
          description: 'Đã có lỗi xảy ra',
        });
        console.log(err);
      })
      .finally(() => setAuthLoading(false));
  };

  const onFinish = (e: IUserRegister) => {
    if (currentForm === 'LOGIN') {
      onLogin(e);
    }
    if (currentForm === 'FORGET') {
      onForgot(e);
    }
    if (currentForm === 'REGISTER') {
      onRegister(e);
    }
    if (currentForm === 'CONFIRMOTP') {
      onConfirmOTP(e);
    }
    if (currentForm === 'RESETPASSWORD') {
      onReset(e);
    }
  };

  return (
    <div className="w-full h-[900px] bg-cover bg-no-repeat bg-[url('https://static.chotot.com/storage/marketplace/login-background.webp')]">
      <div className="w-1/3 m-auto p-[50px] rounded-lg shadow-xl max-lg:w-[80%] bg-white mt-[100px] cursor-pointer">
        <div className="flex items-center justify-center">
          <Image
            className="m-auto"
            preview={false}
            src="https://static.chotot.com/storage/marketplace/logo.png"
            alt="Chotot Logo"
          />
        </div>
        <p className="py-[20px] text-center text-[30px] font-semibold">
          {currentForm === 'LOGIN' ? 'Đăng nhập' : 'Đăng kí'}
        </p>
        <SignIn />
        <Form onFinish={onFinish}>
          {currentForm === 'LOGIN' && (
            <>
              <Form.Item<IUserLogin>
                name={'email'}
                rules={[{ required: true }]}
              >
                <Input aria-label="adsas" placeholder="Tên đăng nhập" />
              </Form.Item>
              <Form.Item<IUserLogin>
                name={'password'}
                rules={[{ required: true }]}
              >
                <Input.Password aria-label="adsas" placeholder="******" />
              </Form.Item>
            </>
          )}
          {currentForm === 'REGISTER' && (
            <>
              <Form.Item<IUserRegister>
                name={'username'}
                rules={[{ required: true }]}
              >
                <Input placeholder="Tên đăng nhập" />
              </Form.Item>
              <Form.Item<IUserRegister>
                name={'email'}
                rules={[
                  { required: true, message: 'Email không được để trống!' },
                  { type: 'email', message: 'Email chưa đúng định dạng!' },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item<IUserRegister>
                name={'password'}
                rules={[{ required: true }]}
              >
                <Input.Password placeholder="******" />
              </Form.Item>
              <Form.Item<IUserRegister>
                name={'rePassword'}
                rules={[{ required: true }]}
              >
                <Input.Password placeholder="******" />
              </Form.Item>
            </>
          )}
          {currentForm === 'CONFIRMOTP' && (
            <Form.Item<IUserRegister>
              name={'verify_code'}
              rules={[{ required: true }]}
            >
              <Input placeholder="Mã OTP" />
            </Form.Item>
          )}
          {currentForm === 'FORGET' && (
            <Form.Item<IUserRegister>
              name={'email'}
              rules={[
                { required: true, message: 'Email không được để trống!' },
                { type: 'email', message: 'Email chưa đúng định dạng!' },
              ]}
            >
              <Input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </Form.Item>
          )}
          {currentForm === 'RESETPASSWORD' && (
            <>
              <Form.Item<IUserRegister>
                name={'verify_code'}
                rules={[{ required: true }]}
              >
                <Input placeholder="Mã OTP" />
              </Form.Item>
              <Form.Item<IUserRegister>
                name={'new_password'}
                rules={[{ required: true }]}
              >
                <Input.Password placeholder="Mật khẩu mới" />
              </Form.Item>
            </>
          )}
          <p
            className="py-[10px] text-blue-700 text-[12px]"
            onClick={() => setCurrentForm('FORGET')}
          >
            Quên mật khẩu
          </p>
          <Form.Item>
            <Button
              className={'w-full !bg-[#ffb057] !text-white'}
              //   style={{ backgroundColor: '#ffb057' }}
              htmlType="submit"
            >
              ĐĂNG NHẬP
            </Button>
          </Form.Item>
        </Form>
        <p className="w-full  relative text-center font-light before:w-1/4 before:h-[1px] before:bg-[#8c8c8c] before:absolute before:right-0 before:top-1/2 after:w-1/4 after:h-[1px] after:bg-[#8c8c8c] after:absolute after:left-0 after:top-1/2">
          Hoặc đăng nhập bằng
        </p>
        {/* <SignInButton>
          <p className="w-full text-center my-[10px] border bg-[#ffb057] rounded-md text-white py-[5px]">
            +
          </p>
        </SignInButton> */}
        <div className="flex gap-x-3 py-[20px]">
          {socialNetWorkLis.map((item, index) => (
            <div
              onClick={() => authGG(item.providerType)}
              key={index}
              className="flex px-[15px] py-[10px] items-center gap-x-3 border rounded"
            >
              {item.icon}
              <p className="text-[14px] font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="text-[14px] text-center cursor-pointer">
          {`${
            currentForm === 'LOGIN' ? 'Chưa có tài khoản' : 'Đã có tài khoản'
          }? `}
          <b
            onClick={() =>
              setCurrentForm(currentForm === 'LOGIN' ? 'REGISTER' : 'LOGIN')
            }
            className="text-[#306bd9]"
          >{`${
            currentForm === 'LOGIN' ? 'Đăng kí tài khoản mới' : 'Đăng nhập'
          }`}</b>
        </p>
      </div>
    </div>
  );
}
