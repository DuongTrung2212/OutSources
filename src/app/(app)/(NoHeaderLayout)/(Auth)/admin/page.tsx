'use client';
import AdminInforPage from '@/components/CMS/AdminInforPage/AdminInforPage';
import FollowUserManagerPage from '@/components/CMS/FollowUserManagerPage/FollowUserManagerPage';
import ChartCard from '@/components/CMS/OverViewPage/components/ChartCard';
import OverViewPage from '@/components/CMS/OverViewPage/OverViewPage';
import BannerManagerPage from '@/components/CMS/ToolsPage/BannerManagerPage';
import MenuSlidePage from '@/components/CMS/ToolsPage/MenuSlidePage';
import CategoryPage from '@/components/CMS/PostManagerPage/CategoryPage';
import ListPage from '@/components/CMS/PostManagerPage/ListPage';
import UserManagerPage from '@/components/CMS/UserManagerPage/UserManagerPage';
import {
  BellOutlined,
  DesktopOutlined,
  ExportOutlined,
  FileOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Layout, Menu, MenuProps, theme } from 'antd';
import { useState } from 'react';
import SliderPage from '@/components/CMS/ToolsPage/SliderPage';
import SEOoptimization from '@/components/CMS/ToolsPage/SEOoptimization';
import CMSCategory from '@/components/common/CMSCategory';
import UserPage from '@/components/CMS/PostManagerPage/Product/User/UserPage';
import IndustryWorkPage from '@/components/CMS/PostManagerPage/Product/Work/IndustryWorkPage';
import WorkTypePage from '@/components/CMS/PostManagerPage/Product/Work/WorkTypePage';
import PayFormsPage from '@/components/CMS/PostManagerPage/Product/Work/PayFormsPage';
import ExperienceWorkPage from '@/components/CMS/PostManagerPage/Product/Work/ExperienceWorkPage';
import PostWorkPage from '@/components/CMS/PostManagerPage/Product/Work/PostWorkPage';
import CategoryGoodHousePage from '@/components/CMS/PostManagerPage/Product/GoodHouse/CategoryGoodHousePage';
import InteriorConditionGoodHousePage from '@/components/CMS/PostManagerPage/Product/GoodHouse/InteriorConditionGoodHousePage';
import PostGoodHousePage from '@/components/CMS/PostManagerPage/Product/GoodHouse/PostGoodHousePage';
import SellerInformationPage from '@/components/CMS/PostManagerPage/Product/GoodHouse/SellerInformationPage';
import GuaranteeMachineryPage from '@/components/CMS/PostManagerPage/Product/Machinery/GuaranteeMachineryPage';
import PostMachineryPage from '@/components/CMS/PostManagerPage/Product/Machinery/PostMachineryPage';
import SellerInformationMachineryMachineryPage from '@/components/CMS/PostManagerPage/Product/Machinery/SellerInformationMachineryPage';
import UsageStatusMachineryPage from '@/components/CMS/PostManagerPage/Product/Machinery/UsageStatusMachineryPage';
import CategoryRefrigeratorPage from '@/components/CMS/PostManagerPage/Product/Refrigerator/CategoryRefrigeratorPage';
import GuaranteeRefrigeratorPage from '@/components/CMS/PostManagerPage/Product/Refrigerator/GuaranteeRefrigeratorPage';
import PostRefrigeratorPage from '@/components/CMS/PostManagerPage/Product/Refrigerator/PostRefrigeratorPage';
import UsageStatusRefrigeratorPage from '@/components/CMS/PostManagerPage/Product/Refrigerator/UsageStatusRefrigeratorPage';
import VolumeRefrigeratorPage from '@/components/CMS/PostManagerPage/Product/Refrigerator/VolumeRefrigeratorPage';
import WashingVolumePage from '@/components/CMS/PostManagerPage/Product/Refrigerator/WashingVolumePage';
import WattageRefrigeratorPage from '@/components/CMS/PostManagerPage/Product/Refrigerator/WattageRefrigeratorPage';
import SellerInformationRefrigerator from '@/components/CMS/PostManagerPage/Product/Refrigerator/SellerInformationRefrigeratorPage';
import PostTaxiPage from '@/components/CMS/PostManagerPage/Product/Taxi/PostTaxiPage';
import PosterTaxiPage from '@/components/CMS/PostManagerPage/Product/Taxi/PosterTaxiPage';
import PosterInformationTaxiPage from '@/components/CMS/PostManagerPage/Product/Taxi/PosterInformationTaxiPage';
import GenderWorkPage from '@/components/CMS/PostManagerPage/Product/Work/GenderWorkPage';
import GeographicalAreaAddressPage from '@/components/CMS/PostManagerPage/Product/GeographicalArea/GeographicalAreaAddressPage';
import GeographicalAreaPage from '@/components/CMS/PostManagerPage/Product/GeographicalArea/GeographicalAreaPage';
import CapacitiesElectronicDevicePage from '@/components/CMS/PostManagerPage/Product/ElectronicDevice/CapacitiesElectronicDevicePage';
import CategoryElectronicDevicePage from '@/components/CMS/PostManagerPage/Product/ElectronicDevice/CategoryElectronicDevicePage';
import UsageStatusElectronicDevicePage from '@/components/CMS/PostManagerPage/Product/ElectronicDevice/UsageStatusElectronicDevicePage';
import ColorElectronicDevicePage from '@/components/CMS/PostManagerPage/Product/ElectronicDevice/ColorElectronicDevicePage';
import RamElectronicDevicePage from '@/components/CMS/PostManagerPage/Product/ElectronicDevice/RamElectronicDevicePage';
import SellerInformationElectronicDevicePage from '@/components/CMS/PostManagerPage/Product/ElectronicDevice/SellerInformationElectronicDevicePage';
import PostElectronicDevicePage from '@/components/CMS/PostManagerPage/Product/ElectronicDevice/PostElectronicDevicePage';
import ScreenSizeElectronicDevicePage from '@/components/CMS/PostManagerPage/Product/ElectronicDevice/ScreenSizeElectronicDevicePage';
import HardDriveElectronicDevicePage from '@/components/CMS/PostManagerPage/Product/ElectronicDevice/HardDriveElectronicDevicePage';
import GuaranteeElectronicDevicePage from '@/components/CMS/PostManagerPage/Product/ElectronicDevice/GuaranteeElectronicDevicePage';
import MicroprocessorElectronicDevicePage from '@/components/CMS/PostManagerPage/Product/ElectronicDevice/MicroprocessorElectronicDevicePage';
import MonitorCardElectronicDevicePage from '@/components/CMS/PostManagerPage/Product/ElectronicDevice/MonitorCardElectronicDevicePage';
import CompaniesElectronicDevicePage from '@/components/CMS/PostManagerPage/Product/ElectronicDevice/CompaniesElectronicDevicePage';
import UsageStatusSeatVehiclePage from '@/components/CMS/PostManagerPage/Product/Vehicle/UsageStatusSeatVehiclePage';
import CapacitiesVehiclePage from '@/components/CMS/PostManagerPage/Product/Vehicle/CapacitiesVehiclePage';
import SellerInfoVehiclePage from '@/components/CMS/PostManagerPage/Product/Vehicle/SellerInfoVehiclePage';
import NumberSeatVehiclePage from '@/components/CMS/PostManagerPage/Product/Vehicle/NumberSeatVehiclePage';
import GuaranteeVehiclePage from '@/components/CMS/PostManagerPage/Product/Vehicle/GuaranteeVehiclePage';
import FuelsVehiclePage from '@/components/CMS/PostManagerPage/Product/Vehicle/FuelsVehiclePage';
import GearBoxesVehiclePage from '@/components/CMS/PostManagerPage/Product/Vehicle/GearBoxesVehiclePage';
import FactoryYearVehiclePage from '@/components/CMS/PostManagerPage/Product/Vehicle/FactoryYearVehiclePage';
import CompanyVehiclePage from '@/components/CMS/PostManagerPage/Product/Vehicle/CompanyVehiclePage';
import PostVehiclePage from '@/components/CMS/PostManagerPage/Product/Vehicle/PostVehiclePage';
import CategoryVehiclePage from '@/components/CMS/PostManagerPage/Product/Vehicle/CategoryVehiclePage';
import CategoryBonsaiFurniturePage from '@/components/CMS/PostManagerPage/Product/BonsaiFurniture/CategoryBonsaiFurniturePage';
import GuaranteeBonsaiFurniturePage from '@/components/CMS/PostManagerPage/Product/BonsaiFurniture/GuaranteeBonsaiFurniturePage';
import UsageStatusBonsaiFurniturePage from '@/components/CMS/PostManagerPage/Product/BonsaiFurniture/UsageStatusBonsaiFurniturePage';
import SellerInformationBonsaiFurniturePage from '@/components/CMS/PostManagerPage/Product/BonsaiFurniture/SellerInformationBonsaiFurniturePage';
import PostBonsaiFurniturePage from '@/components/CMS/PostManagerPage/Product/BonsaiFurniture/PostBonsaiFurniturePage';
import CategoryVietShopPage from '@/components/CMS/PostManagerPage/Product/VietShop/CategoryVietShopPage';
import PostVietShopPage from '@/components/CMS/PostManagerPage/Product/VietShop/PostVietShopPage';
import SellerietShopPage from '@/components/CMS/PostManagerPage/Product/VietShop/SellerietShopPage';
import CategoryProductServicePage from '@/components/CMS/PostManagerPage/Product/ProductService/CategoryProductServicePage';
import GuaranteeProductServicePage from '@/components/CMS/PostManagerPage/Product/ProductService/GuaranteeProductServicePage';
import PostProductServicePage from '@/components/CMS/PostManagerPage/Product/ProductService/PostProductServicePage';
import UsageStatusProductServicePage from '@/components/CMS/PostManagerPage/Product/ProductService/UsageStatusProductServicePage';
import SellerInformationServicePage from '@/components/CMS/PostManagerPage/Product/ProductService/SellerInformationServicePage';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const Bonsai_Furniture_Sub_List = [
  {
    key: 'Bonsai_Furniture_Sub_Category',
    icon: <DesktopOutlined />,
    label: 'Danh mục',
    component: <CategoryBonsaiFurniturePage />,
  },
  {
    key: 'Bonsai_Furniture_Sub_Condition',
    icon: <DesktopOutlined />,
    label: 'Tình trạng',
    component: <UsageStatusBonsaiFurniturePage />,
  },
  {
    key: 'Bonsai_Furniture_Sub_Warranty',
    icon: <DesktopOutlined />,
    label: 'Bảo hành',
    component: <GuaranteeBonsaiFurniturePage />,
  },
  {
    key: 'Bonsai_Furniture_Sub_SellerInfo',
    icon: <DesktopOutlined />,
    label: 'Thông tin người bán',
    component: <SellerInformationBonsaiFurniturePage />,
  },
  {
    key: 'Bonsai_Furniture_Sub_Post',
    icon: <DesktopOutlined />,
    label: 'Bài đăng',
    component: <PostBonsaiFurniturePage />,
  },
];
const VietShopList = [
  {
    key: 'VietShop_Category',
    icon: <DesktopOutlined />,
    label: 'Danh mục',
    component: <CategoryVietShopPage />,
  },
  {
    key: 'VietShop_Category_Seller',
    icon: <DesktopOutlined />,
    label: 'Người bán',
    component: <SellerietShopPage />,
  },
  {
    key: 'VietShop_Post',
    icon: <DesktopOutlined />,
    label: 'Bài đăng',
    component: <PostVietShopPage />,
  },
];

const serviceList = [
  {
    key: 'Sevice_category',
    icon: <DesktopOutlined />,
    label: 'Danh muc',
    component: <CategoryProductServicePage />,
  },
  {
    key: 'Sevice_guaran',
    icon: <DesktopOutlined />,
    label: 'Bảo hành',
    component: <GuaranteeProductServicePage />,
  },
  {
    key: 'Sevice_uasangStatus',
    icon: <DesktopOutlined />,
    label: 'Tình trạng sử dụng',
    component: <UsageStatusProductServicePage />,
  },
  {
    key: 'Sevice_serler',
    icon: <DesktopOutlined />,
    label: 'Thông tin người bán',
    component: <SellerInformationServicePage />,
  },
  {
    key: 'Sevice_post',
    icon: <DesktopOutlined />,
    label: 'Bài đăng',
    component: <PostProductServicePage />,
  },
];

const items: MenuItem[] = [
  getItem('Tổng quan', 'OVERVIEW', <PieChartOutlined />),
  getItem('Doanh thu', 'REVENUE', <DesktopOutlined />),
  getItem('Giao dịch an toàn', 'SAFE_TRANSACTIONS', <DesktopOutlined />),
  getItem('Giao dịch nạp thẻ', 'RECHARGE_TRANSACTIONS', <DesktopOutlined />),
  getItem('Vòng quay may mắn', 'ROTATION_LUCK', <DesktopOutlined />),
  getItem('Quản lý tin đăng', 'POST_MANAGER_SUB', <UserOutlined />, [
    // ...test.map((item, index) =>
    //   getItem('Danh sách', 'POST_MANAGER_SUB_LIST', <TeamOutlined />)
    // ),
    getItem('Danh sách', 'POST_MANAGER_SUB_LIST', <TeamOutlined />),
    getItem('Danh mục', 'POST_MANAGER_SUB_CATEGORY', <TeamOutlined />),
    getItem('Thuộc tính', 'POST_MANAGER_SUB_PROPERTIES', <TeamOutlined />),
    getItem(
      'Dịch vụ trả phí',
      'POST_MANAGER_SUB_PAID_SERVICE',
      <TeamOutlined />
    ),
    getItem('Khiếu nại', 'POST_MANAGER_SUB_COMPLAIN', <TeamOutlined />),
    getItem('Sản phẩm', 'PRODUCT_SUB', <TeamOutlined />, [
      getItem('A0 - Người dùng', 'USER_SUB', <TeamOutlined />, [
        getItem('Người dùng', 'USER_SUB_USER', <TeamOutlined />),
      ]),
      getItem('A1 - Khu vực địa lý', 'Geographical_Area', <TeamOutlined />, [
        getItem('Khu vực', 'Geographical_Area_Area', <TeamOutlined />),
        getItem('Địa chỉ', 'Geographical_Area_Address', <TeamOutlined />),
      ]),
      getItem('A2 - Việc làm', 'JOB_SUB', <TeamOutlined />, [
        getItem('Nghành làm', 'JOB_SUB_INDUSTRY_DOES', <TeamOutlined />),
        getItem('Loại công việc', 'JOB_SUB_WORK_TYPE', <TeamOutlined />),
        getItem('Hình thức trả lương', 'JOB_SUB_PAY_FORMS', <TeamOutlined />),
        getItem('Giới tính', 'JOB_SUB_GENDER', <TeamOutlined />),
        getItem('Kinh nghiệm', 'JOB_SUB_EXPERIENCE', <TeamOutlined />),
        getItem('Bài đăng', 'JOB_SUB_POST', <TeamOutlined />),
      ]),
      getItem('A3 - Nhà tốt', 'GOOD_HOUSE_SUB', <TeamOutlined />, [
        getItem('Doanh mục', 'GOOD_HOUSE_SUB_CATEGORY', <TeamOutlined />),
        getItem(
          'Tình trạng nội thất',
          'GOOD_HOUSE_SUB_INTERIOR_CONDITION',
          <TeamOutlined />
        ),
        getItem(
          'Thông tin người bán',
          'GOOD_HOUSE_SUB_Seller_Information',
          <TeamOutlined />
        ),
        getItem('Bài đăng', 'GOOD_HOUSE_SUB_Post', <TeamOutlined />),
      ]),
      getItem(
        'A4 - Tủ lạnh - Máy lạnh - Máy giặt',
        'Fridge_Sub',
        <TeamOutlined />,
        [
          getItem('Danh mục', 'Fridge_Sub_CATEGORY', <TeamOutlined />),
          getItem('Tình trạng', 'Fridge_Sub_CONDITION', <TeamOutlined />),
          getItem('Bảo hành', 'Fridge_Sub_Guarantee', <TeamOutlined />),
          getItem('Người bán', 'Fridge_Sub_Manage_Seller', <TeamOutlined />),
          getItem('Thể tích', 'Fridge_Sub_Volume', <TeamOutlined />),
          getItem('Công suất', 'Fridge_Sub_Wattage', <TeamOutlined />),
          getItem(
            'Khối lượng giặt',
            'Fridge_Sub_Washing_volume',
            <TeamOutlined />
          ),
          getItem(
            'Quản lý bài đăng',
            'Fridge_Sub_Manage_posts',
            <TeamOutlined />
          ),
        ]
      ),
      getItem(
        'A5 - Máy móc - thiết bị chuyên dụng',
        'Specialized_Sub',
        <TeamOutlined />,
        [
          getItem('Tình trạng', 'Specialized_Sub_CONDITION', <TeamOutlined />),
          getItem(
            'Thông tin người bán',
            'Specialized_Sub_Seller_Infor',
            <TeamOutlined />
          ),
          getItem('Bảo hành', 'Specialized_Sub_Guarantee', <TeamOutlined />),
          getItem('Bài đăng', 'Specialized_Sub_Post', <TeamOutlined />),
        ]
      ),
      getItem('A6 - Taxi', 'Taxi_Sub', <TeamOutlined />, [
        getItem('Tình trạng', 'Taxi_Sub_CONDITION', <TeamOutlined />),
        getItem(
          'Thông tin người đăng',
          'PosterInformationTaxiPage',
          <TeamOutlined />
        ),
        getItem('Loại tin đăng', 'PostTaxiPage', <TeamOutlined />),
        getItem('Bài đăng', 'PosterTaxiPage', <TeamOutlined />),
      ]),
      getItem('B1 - Xe cộ', 'Vehicle_Sub', <TeamOutlined />, [
        getItem('Danh mục', 'Vehicle_Sub_Category', <TeamOutlined />),
        getItem('Hãng xe', 'Vehicle_Sub_Brand', <TeamOutlined />),
        getItem(
          'Năm sản xuất',
          'Vehicle_Sub_ManufacturingYear',
          <TeamOutlined />
        ),
        getItem('Hộp số', 'Vehicle_Sub_Transmission', <TeamOutlined />),
        getItem('Nhiên liệu', 'Vehicle_Sub_FuelType', <TeamOutlined />),
        getItem('Bảo hành', 'Vehicle_Sub_Warranty', <TeamOutlined />),
        getItem('Số chổ', 'Vehicle_Sub_SeatingCapacity', <TeamOutlined />),
        getItem('Tình trạng', 'Vehicle_Sub_Condition', <TeamOutlined />),
        getItem(
          'Thông tin người bán',
          'Vehicle_Sub_SellerInfo',
          <TeamOutlined />
        ),
        getItem('Dung tích', 'Vehicle_Sub_Capacity', <TeamOutlined />),
        getItem('Sản Phẩm', 'Vehicle_Sub_Product', <TeamOutlined />),
      ]),
      getItem('B2 - Đồ điện tử', 'Electronice_Device_Sub', <TeamOutlined />, [
        getItem(
          'Danh mục',
          'Electronice_Device_Sub_Category',
          <TeamOutlined />
        ),
        getItem(
          'Tình trạng',
          'Electronice_Device_Sub_Condition',
          <TeamOutlined />
        ),
        getItem('Hãng xe', 'Electronice_Device_Sub_Brand', <TeamOutlined />),
        getItem('Màu sắc', 'Electronice_Device_Sub_Color', <TeamOutlined />),
        getItem(
          'Dung lượng',
          'Electronice_Device_Sub_Capacity',
          <TeamOutlined />
        ),
        getItem(
          'Bảo hành',
          'Electronice_Device_Sub_Warranty',
          <TeamOutlined />
        ),
        getItem(
          'Bộ vi xử lí',
          'Electronice_Device_Sub_Processor',
          <TeamOutlined />
        ),
        getItem('Ram', 'Electronice_Device_Sub_Ram', <TeamOutlined />),
        getItem('Ổ cứng', 'Electronice_Device_Sub_HardDrive', <TeamOutlined />),
        getItem(
          'Card màn hình',
          'Electronice_Device_Sub_GraphicsCard',
          <TeamOutlined />
        ),
        getItem(
          'Kích cỡ màn hình',
          'Electronice_Device_Sub_ScreenSize',
          <TeamOutlined />
        ),
        getItem(
          'Thông tin người bán',
          'Electronice_Device_Sub_SellerInfo',
          <TeamOutlined />
        ),
        getItem('Sản phẩm', 'Electronice_Device_Sub_Product', <TeamOutlined />),
      ]),
      getItem('B3 - Dịch vụ', 'Services_Sub', <TeamOutlined />, [
        ...serviceList.map((item) => getItem(item.label, item.key, item.icon)),
      ]),
      getItem(
        'B4 - Nội thất cây cảnh',
        'Bonsai_Furniture_Sub',
        <TeamOutlined />,
        [
          ...Bonsai_Furniture_Sub_List.map((item) =>
            getItem(item.label, item.key, item.icon)
          ),
        ]
      ),
      getItem('B5 - Cửa hàng Việt', 'Viet_Shop_Sub', <TeamOutlined />, [
        ...VietShopList.map((item) => getItem(item.label, item.key, item.icon)),
      ]),
    ]),
  ]),
  getItem('Người dùng', 'User_Manager', <TeamOutlined />),
  getItem('Người theo dõi', 'Follow_User_Manager', <FileOutlined />),
  getItem('Blog', 'Blog_Manager', <FileOutlined />),
  getItem('Thành phố', 'City_Manager', <FileOutlined />),
  getItem('Quản lý trang', 'Page_Manager', <FileOutlined />),
  getItem('Công cụ', 'Tools_Page', <FileOutlined />, [
    getItem('Menu Slide', 'Tools_Page_Menu_Slide', <TeamOutlined />),
    getItem('Banner / Quảng cáo', 'Tools_Page_Banner', <TeamOutlined />),
    getItem('Slider', 'Tools_Page_Slider', <TeamOutlined />),
    getItem('Tối ưu SEO', 'Tools_Page_SEO_Optimal', <TeamOutlined />),
    getItem('Bộ lọc SEO', 'Tools_Page_SEO_Filter', <TeamOutlined />),
    getItem('Feeds', 'Tools_Page_Feeds', <TeamOutlined />),
    getItem('RSS Feeds', 'Tools_Page_RSS_Feeds', <TeamOutlined />),
  ]),
];
const pageList = [
  { key: 'OVERVIEW', children: <OverViewPage /> },
  { key: 'REVENUE', children: <div>Doanh thu</div> },
  { key: 'SAFE_TRANSACTIONS', children: <div>Giao dịch an toàn</div> },
  { key: 'RECHARGE_TRANSACTIONS', children: <div>Giao dịch nạp thẻ</div> },
  { key: '5', children: <div>Vòng quay may mắn</div> },
  { key: 'POST_MANAGER_SUB_LIST', children: <ListPage /> },
  { key: 'POST_MANAGER_SUB_CATEGORY', children: <CategoryPage /> },
  { key: '8', children: <div>Thuộc tính</div> },
  { key: '9', children: <div>Dịch vụ trả phí</div> },
  { key: '10', children: <div>Khiếu nại</div> },
  { key: 'User_Manager', children: <UserManagerPage /> },
  { key: 'Follow_User_Manager', children: <FollowUserManagerPage /> },
  { key: '13', children: <div>Blog</div> },
  { key: '14', children: <div>Thành phố</div> },
  { key: '15', children: <div>Quản lý trang</div> },
  { key: 'Tools_Page_Menu_Slide', children: <MenuSlidePage /> },
  { key: 'Tools_Page_Banner', children: <BannerManagerPage /> },
  { key: 'Tools_Page_Slider', children: <SliderPage /> },
  { key: 'Tools_Page_SEO_Optimal', children: <SEOoptimization /> },
  { key: '20', children: <div>Feeds</div> },
  { key: '21', children: <div>RSS Feeds</div> },
  { key: 'admin', children: <AdminInforPage /> },

  { key: 'USER_SUB_USER', children: <UserPage /> },
  // Cong viec
  { key: 'JOB_SUB_INDUSTRY_DOES', children: <IndustryWorkPage /> },
  { key: 'JOB_SUB_WORK_TYPE', children: <WorkTypePage /> },
  { key: 'JOB_SUB_PAY_FORMS', children: <PayFormsPage /> },
  { key: 'JOB_SUB_EXPERIENCE', children: <ExperienceWorkPage /> },
  { key: 'JOB_SUB_POST', children: <PostWorkPage /> },
  { key: 'JOB_SUB_GENDER', children: <GenderWorkPage /> },

  // Geographical_Area
  { key: 'Geographical_Area_Area', children: <GeographicalAreaPage /> },
  {
    key: 'Geographical_Area_Address',
    children: <GeographicalAreaAddressPage />,
  },

  // Good House
  { key: 'GOOD_HOUSE_SUB_CATEGORY', children: <CategoryGoodHousePage /> },
  {
    key: 'GOOD_HOUSE_SUB_INTERIOR_CONDITION',
    children: <InteriorConditionGoodHousePage />,
  },
  {
    key: 'GOOD_HOUSE_SUB_Seller_Information',
    children: <SellerInformationPage />,
  },
  {
    key: 'GOOD_HOUSE_SUB_Post',
    children: <PostGoodHousePage />,
  },

  // Tu lanh
  { key: 'Fridge_Sub_CONDITION', children: <UsageStatusRefrigeratorPage /> },
  { key: 'Fridge_Sub_CATEGORY', children: <CategoryRefrigeratorPage /> },
  { key: 'Fridge_Sub_Guarantee', children: <GuaranteeRefrigeratorPage /> },
  { key: 'Fridge_Sub_Manage_posts', children: <PostRefrigeratorPage /> },
  {
    key: 'Fridge_Sub_Manage_Seller',
    children: <SellerInformationRefrigerator />,
  },
  // { key: 'JOB_SUB_POST', children: <UsageStatusRefrigeratorPage /> },
  { key: 'Fridge_Sub_Volume', children: <VolumeRefrigeratorPage /> },
  { key: 'Fridge_Sub_Washing_volume', children: <WashingVolumePage /> },
  { key: 'Fridge_Sub_Wattage', children: <WattageRefrigeratorPage /> },
  // Máy móc
  { key: 'Specialized_Sub_CONDITION', children: <UsageStatusMachineryPage /> },
  {
    key: 'Specialized_Sub_Seller_Infor',
    children: <SellerInformationMachineryMachineryPage />,
  },
  { key: 'Specialized_Sub_Guarantee', children: <GuaranteeMachineryPage /> },
  { key: 'Specialized_Sub_Post', children: <PostMachineryPage /> },
  // Taxi
  { key: 'PosterInformationTaxiPage', children: <PosterInformationTaxiPage /> },
  { key: 'PosterTaxiPage', children: <PosterTaxiPage /> },
  { key: 'PostTaxiPage', children: <PostTaxiPage /> },
  // do dien tu
  {
    key: 'Electronice_Device_Sub_Category',
    children: <CategoryElectronicDevicePage />,
  },
  {
    key: 'Electronice_Device_Sub_Condition',
    children: <UsageStatusElectronicDevicePage />,
  },
  {
    key: 'Electronice_Device_Sub_Brand',
    children: <CompaniesElectronicDevicePage />,
  },
  {
    key: 'Electronice_Device_Sub_Color',
    children: <ColorElectronicDevicePage />,
  },
  {
    key: 'Electronice_Device_Sub_Capacity',
    children: <CapacitiesElectronicDevicePage />,
  },
  {
    key: 'Electronice_Device_Sub_Warranty',
    children: <GuaranteeElectronicDevicePage />,
  },
  {
    key: 'Electronice_Device_Sub_Processor',
    children: <MicroprocessorElectronicDevicePage />,
  },
  { key: 'Electronice_Device_Sub_Ram', children: <RamElectronicDevicePage /> },
  {
    key: 'Electronice_Device_Sub_HardDrive',
    children: <HardDriveElectronicDevicePage />,
  },
  {
    key: 'Electronice_Device_Sub_GraphicsCard',
    children: <MonitorCardElectronicDevicePage />,
  },
  {
    key: 'Electronice_Device_Sub_ScreenSize',
    children: <ScreenSizeElectronicDevicePage />,
  },
  {
    key: 'Electronice_Device_Sub_SellerInfo',
    children: <SellerInformationElectronicDevicePage />,
  },
  {
    key: 'Electronice_Device_Sub_Product',
    children: <PostElectronicDevicePage />,
  },
  //xe co
  {
    key: 'Vehicle_Sub_Category',
    children: <CategoryVehiclePage />,
  },
  {
    key: 'Vehicle_Sub_Brand',
    children: <CompanyVehiclePage />,
  },
  {
    key: 'Vehicle_Sub_ManufacturingYear',
    children: <FactoryYearVehiclePage />,
  },
  {
    key: 'Vehicle_Sub_Transmission',
    children: <GearBoxesVehiclePage />,
  },
  {
    key: 'Vehicle_Sub_FuelType',
    children: <FuelsVehiclePage />,
  },
  {
    key: 'Vehicle_Sub_Warranty',
    children: <GuaranteeVehiclePage />,
  },
  {
    key: 'Vehicle_Sub_SeatingCapacity',
    children: <NumberSeatVehiclePage />,
  },
  {
    key: 'Vehicle_Sub_Condition',
    children: <UsageStatusSeatVehiclePage />,
  },
  {
    key: 'Vehicle_Sub_SellerInfo',
    children: <SellerInfoVehiclePage />,
  },
  {
    key: 'Vehicle_Sub_Capacity',
    children: <CapacitiesVehiclePage />,
  },
  {
    key: 'Vehicle_Sub_Product',
    children: <PostVehiclePage />,
  },
  ...Bonsai_Furniture_Sub_List.map((item) => ({
    key: item.key,
    children: item.component,
  })),
  ...VietShopList.map((item) => ({
    key: item.key,
    children: item.component,
  })),
  ...serviceList.map((item) => ({
    key: item.key,
    children: item.component,
  })),
];

export default function AdminPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('1');
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        theme="light"
        width={350}
        className="max-h-[900px] overflow-auto"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div
          className="flex items-center text-black px-[10px]"
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        >
          {!collapsed && <p className="font-medium">CMS</p>}
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          onSelect={(e) => {
            // window.scrollTo(0, 0);
            setCurrentPage(e.key);
          }}
          selectedKeys={[currentPage]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          className="shadow flex justify-between !p-0 !pr-[30px]"
          style={{ background: colorBgContainer }}
        >
          <Button
            className="-translate-x-full"
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className="w-fit flex gap-x-7 items-center text-[20px] text-[#b1acc5]">
            <WarningOutlined />
            <div className="relative">
              <div className="absolute right-0 translate-x-5 top-1/5 w-[30px] h-[30px] rounded-full bg-[#ff000023] before:absolute before:content-[''] before:w-[15px] before:h-[15px] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-red-500 before:border-white before:border-2"></div>
              <BellOutlined />
            </div>
            <Avatar onClick={() => setCurrentPage('admin')} src={''} />
            <ExportOutlined />
          </div>
        </Header>
        <Content
          className="bg-[#f2f3f8]"
          style={{
            // margin: '24px 16px',
            // padding: 24,
            minHeight: 280,
            // background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <div className="py-[10px] px-[20px]">
            {pageList.find((item) => item.key === currentPage)?.children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
