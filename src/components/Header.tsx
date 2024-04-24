import instanceAxios from '@/api/instanceAxios';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { logout } from '@/app/reducers/userReducer';
import { IJob } from '@/types/Job';
import {
  AimOutlined,
  BellFilled,
  BellOutlined,
  CloseCircleFilled,
  HeartFilled,
  ImportOutlined,
  LogoutOutlined,
  MessageOutlined,
  PlusOutlined,
  ProfileOutlined,
  QuestionCircleOutlined,
  ReconciliationOutlined,
  SearchOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Flex, Image, Input, Space } from 'antd';
import { deleteCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import NotificationItem from './common/NotificationItem';
import { SignOutButton, useAuth } from '@clerk/nextjs';

export default function Header() {
  const [showModalMenu, setShowModalMenu] = useState(false);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const [loading, setLoading] = useState(true);
  const [notificationList, setNotificationList] = useState<INotification[]>([]);
  const [currentCategoryList, setCurrentCategoryList] = useState<IJob[]>([]);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const router = useRouter();
  const ref = useRef<HTMLElement>(null);
  const { sessionId } = useAuth();

  const notificationRef = useRef<HTMLDivElement>(null);

  console.log(user);

  const fethCategoryList = async (url: string) => {
    await instanceAxios
      .get(url)
      .then((res) => setCurrentCategoryList(res.data.data || []))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const fetchNotification = async () => {
      await instanceAxios
        .get(`/notification/notification/`)
        .then((res) => {
          setNotificationList(res.data.messages);
        })
        .catch((err) => {})
        .finally(() => {
          setLoading(false);
        });
    };
    fetchNotification();
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    deleteCookie('access');
    deleteCookie('refresh');
    router.push('/auth');
    // setShowModal(true);
  };
  const redirectURL = (url: string) => {
    router.push(url);
    setOpenMenu(false);
    setOpenNotification(false);
  };
  useOnClickOutside(ref, () => {
    setOpenMenu(false);
  });
  useOnClickOutside(notificationRef, () => {
    setOpenNotification(false);
  });
  return (
    !loading && (
      <div className="w-full flex-col items-center justify-between gap-x-5 max-lg:px-[10px] py-[10px] bg-[#ffba00]">
        <div className="w-[75%] max-lg:w-full m-auto">
          <Flex className="w-full" align="center" justify="space-between">
            <Link href={'/'}>
              <Image
                className="!w-[200px] m-auto"
                loading="lazy"
                preview={false}
                src="https://static.chotot.com/storage/APP_WRAPPER/logo/chotot-logo-appwrapper.png"
                alt="Chotot Logo"
              />
            </Link>
            <Flex
              gap={20}
              justify="center"
              align="center"
              className="relative "
            >
              <div className="relative">
                <BellOutlined
                  className="text-[20px]"
                  onClick={() => setOpenNotification(true)}
                />
                {openNotification && (
                  <div
                    ref={notificationRef}
                    className="w-[400px] max-lg:w-[250px] max-lg:-translate-x-7 absolute top-[120%] -translate-x-1/2 z-[9999] bg-white rounded-lg  shadow-xl"
                  >
                    <Flex className="px-[10px] pt-[10px] justify-between">
                      <b>Thông báo</b>
                      <CloseCircleFilled
                        onClick={() => setOpenNotification(false)}
                      />
                    </Flex>
                    <Flex gap={10} className="p-[10px]">
                      <p className="bg-[#ffe9c2] px-[20px] py-[3px] text-[#ffa031] rounded-full text-[14px]">
                        Tất cả
                      </p>
                      <p className="bg-[#ffe9c2] px-[20px] py-[3px] text-[#ffa031] rounded-full text-[14px]">
                        Chưa xem
                      </p>
                    </Flex>
                    <Flex vertical className="border-t border-[#ffa031]">
                      {[...Array(5)].map((_, index) => (
                        <NotificationItem key={index} />
                      ))}
                    </Flex>
                  </div>
                )}
              </div>
              <Link className="text-black hover:text-black" href={'/chat'}>
                <MessageOutlined className="text-[20px]" />
              </Link>
              <Link
                className="text-black hover:text-black max-lg:text-[12px] text-nowrap"
                href={''}
              >
                <p>Đóng góp ý kiến</p>
              </Link>
              <Link
                className="text-black hover:text-black max-lg:text-[12px] text-nowrap"
                href={''}
              >
                Trợ giúp
              </Link>
            </Flex>
          </Flex>
          <Flex
            gap={50}
            className="w-full max-lg:text-[12px] max-lg:!gap-1"
            justify="space-between"
            align="center"
          >
            <div className="w-2/5 flex items-center gap-x-3">
              <div className="relative w-full z-30">
                <Input
                  className="!w-full max-lg:!py-[5px] !pr-[100px] max-lg:!pr-[45px] max-lg:!text-[10px]"
                  placeholder="Tìm kiếm"
                />
                <div className="absolute right-[5px] top-1/2 rounded-md -translate-y-1/2 bg-[#ffba00] px-[20px] py-[5px] max-lg:px-[10px] max-lg:py-[1px]">
                  <SearchOutlined />
                </div>
              </div>
            </div>
            <div className="w-3/5 flex gap-3 items-center justify-between max-lg:w-[200px] max-lg:gap-x-2">
              <Link
                className="text-black hover:text-black"
                href={'/post-manager'}
              >
                <Flex className="text-nowrap" gap={10} align="center">
                  <ProfileOutlined className="text-[20px]" />
                  <p className="max-lg:hidden">Quản lí tin</p>
                </Flex>
              </Link>
              <Flex className="text-nowrap" gap={10} align="center">
                <AimOutlined className="text-[20px]" />
                <p className="max-lg:hidden">Chợ tốt map</p>
              </Flex>
              <div className="relative cursor-pointer text-nowrap">
                <Flex
                  className="text-nowrap"
                  onClick={() => setOpenMenu(true)}
                  gap={10}
                  align="center"
                >
                  <UserOutlined className="text-[20px]" />
                  <p className="max-lg:hidden">Đăng nhập</p>
                </Flex>
                {openMenu && (
                  <Flex
                    ref={ref}
                    vertical
                    className="absolute min-w-[250px] -translate-x-1/2 z-[9999] text-[14px] top-full bg-white rounded-lg shadow-lg"
                  >
                    <Flex
                      gap={15}
                      align="center"
                      className="font-semibold text-[14px] p-[10px]"
                    >
                      <Avatar size={50} />
                      <p className=" uppercase font-semibold">
                        Đăng nhập / Đăng kí
                      </p>
                    </Flex>
                    <Flex vertical>
                      <p className="bg-[#f4f4f4] px-[10px] py-[5px] text-[#9b9b9b] font-semibold">
                        Tiện ích
                      </p>
                      <Space
                        onClick={() => redirectURL('/save-post')}
                        className="font-medium p-[10px] hover:bg-[#e1e1e1] "
                      >
                        <HeartFilled className="!text-white p-[5px] bg-red-500 rounded-full" />
                        Tin đã lưu
                      </Space>
                      <Space
                        onClick={() => redirectURL('/save-post')}
                        className="font-medium p-[10px] hover:bg-[#e1e1e1] "
                      >
                        <BellFilled className="!text-white p-[5px] bg-red-500 rounded-full" />
                        Danh mục theo dõi
                      </Space>
                    </Flex>
                    <Flex vertical>
                      <p className="bg-[#f4f4f4] px-[10px] py-[5px] text-[#9b9b9b] font-semibold">
                        Tiện ích
                      </p>
                      <Space
                        onClick={() => redirectURL('/create-market')}
                        className="font-medium p-[10px] hover:bg-[#e1e1e1]"
                      >
                        <PlusOutlined className="!text-white p-[5px] bg-[#ce9f3c] rounded-full" />
                        Tạo cửa hàng/Chuyên trang
                      </Space>
                      <Space className="font-medium p-[10px] hover:bg-[#e1e1e1]">
                        <ReconciliationOutlined className="!text-white p-[5px] bg-[#ce9f3c] rounded-full" />
                        Lịch sử giao dịch
                      </Space>
                    </Flex>
                    <Flex vertical>
                      <p className="bg-[#f4f4f4] px-[10px] py-[5px] text-[#9b9b9b] font-semibold">
                        Khác
                      </p>
                      <Space className="font-medium p-[10px] hover:bg-[#e1e1e1]">
                        <SettingOutlined className="!text-white p-[5px] bg-[#9b9b9b] rounded-full" />
                        Cài đặt tài khoản
                      </Space>
                      <Space className="font-medium p-[10px] hover:bg-[#e1e1e1]">
                        <QuestionCircleOutlined className="!text-white p-[5px] bg-[#9b9b9b] rounded-full" />
                        Trợ giúp
                      </Space>

                      {sessionId || user.logged ? (
                        <SignOutButton signOutCallback={handleLogout}>
                          <Space
                            onClick={handleLogout}
                            className="font-medium p-[10px] hover:bg-[#e1e1e1]"
                          >
                            <LogoutOutlined className="!text-white p-[5px] bg-[#9b9b9b] rounded-full" />
                            Đăng xuất
                          </Space>
                        </SignOutButton>
                      ) : (
                        <Space
                          className="font-medium p-[10px] hover:bg-[#e1e1e1]"
                          onClick={() => {
                            if (!sessionId && !user.logged) {
                              router.push('/auth');
                            }
                          }}
                        >
                          <UserAddOutlined className="!text-white p-[5px] bg-[#9b9b9b] rounded-full" />
                          Đăng nhập
                        </Space>
                      )}

                      {/* {!sessionId || !user.logged ? 'Đăng xuất' : 'Đăng nhập'} */}
                    </Flex>
                  </Flex>
                )}
              </div>
              <Link href={'/create-post'}>
                <Space className="bg-[#dd8500] text-white rounded-md px-[15px] py-[5px] text-nowrap">
                  <ImportOutlined />
                  <p className=" font-semibold">Đăng tin</p>
                </Space>
              </Link>
            </div>
          </Flex>
        </div>
      </div>
    )
  );
}
