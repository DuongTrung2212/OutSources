import instanceAxios from '@/api/instanceAxios';
import { Button, Form, Input, notification } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function RegisterForm() {
  const [registerLoading, setRegisterLoading] = useState(false);
  const [step, setStep] = useState<'LOGIN' | 'CONFIRM'>('LOGIN');
  const route = useRouter();

  const onFinish = async (e: IUserRegister) => {
    setRegisterLoading(true);
    delete instanceAxios.defaults.headers.common.Authorization;
    await instanceAxios
      .post('/api/user/register/', e)
      .then((res) => {
        notification.success({
          message: 'Thông báo',
          description: 'Đăng kí thành công',
        });
        setStep('CONFIRM');
      })
      .catch((err) => {
        notification.error({
          message: 'Thông báo',
          description: 'Tài khoản hoặc username đã tồn tại',
        });
        console.log(err);
      })
      .finally(() => setRegisterLoading(false));
  };
  const onConfirmOTP = async (e: IUserRegister) => {
    setRegisterLoading(true);
    await instanceAxios
      .post('/api/user/register/', e)
      .then((res) => {
        // dispatch(login(res.data.data.user));
        // setCookie('access', res.data.data.access);
        // setCookie('refresh', res.data.data.refresh);
        route.push('/');
        notification.success({
          message: 'Thông báo',
          description: 'Đăng kí thành công',
        });
        setStep('CONFIRM');
      })
      .catch((err) => {
        notification.error({
          message: 'Thông báo',
          description: 'Tài khoản hoặc username đã tồn tại',
        });
        console.log(err);
      })
      .finally(() => setRegisterLoading(false));
  };

  return (
    <div>
      <Form onFinish={step === 'LOGIN' ? onFinish : onConfirmOTP}>
        {step === 'LOGIN' ? (
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
        ) : (
          <Form.Item<IUserRegister>
            name={'verify_code'}
            rules={[{ required: true }]}
          >
            <Input placeholder="Mã OTP" />
          </Form.Item>
        )}
        <p className="py-[10px] text-blue-700 text-[12px]">Quên mật khẩu</p>
        <Form.Item>
          <Button
            loading={registerLoading}
            className={'w-full !bg-[#ffb057] !text-white'}
            //   style={{ backgroundColor: '#ffb057' }}
            htmlType="submit"
          >
            ĐĂNG KÍ
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
