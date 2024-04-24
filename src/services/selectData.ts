import { IJob } from '@/types/Job';

const workCarrerData: IJob[] = [
  {
    name: 'Xây dựng',
    value: 'Xây dựng',
  },
  {
    name: 'Năng lượng mặt trời',
    value: 'Năng lượng mặt trời',
  },
  {
    name: 'Nông nghiệp',
    value: 'Nông nghiệp',
  },
  {
    name: 'Nhân viên phục vụ',
    value: 'Nhân viên phục vụ',
  },
  {
    name: 'Bán hàng',
    value: 'Bán hàng',
  },
  {
    name: 'Chuyển chủ',
    value: 'Chuyển chủ',
  },
];

const workPayMethodData: IJob[] = [
  {
    name: 'Theo giờ',
    value: 'Theo giờ',
  },
  {
    name: 'Theo ngày',
    value: 'Theo ngày',
  },
  {
    name: 'Theo tháng',
    value: 'Theo tháng',
  },
  {
    name: 'Lương khoán',
    value: 'Lương khoán',
  },
];

const workTypeData: IJob[] = [
  {
    name: '24h ( Trong ngày )',
    value: '24h ( Trong ngày )',
  },
  {
    name: 'Toàn thời gian',
    value: 'Toàn thời gian',
  },
  {
    name: 'Bán thời gian',
    value: 'Bán thời gian',
  },
  {
    name: 'Thời vụ',
    value: 'Thời vụ',
  },
  {
    name: 'Làm theo ca',
    value: 'Làm theo ca',
  },
];

const genderData: IJob[] = [
  {
    name: 'Không yêu cầu',
    value: 'Không yêu cầu',
  },
  {
    name: 'Nam',
    value: 'Nam',
  },
  {
    name: 'Nữ',
    value: 'Nữ',
  },
];

const carCompanyData: IJob[] = [
  {
    name: 'Toyota',
    value: 'Toyota',
  },
  {
    name: 'Honda',
    value: 'Honda',
  },
  {
    name: 'Nissan',
    value: 'Nissan',
  },
  {
    name: 'Ford',
    value: 'Ford',
  },
  {
    name: 'Mitsubishi',
    value: 'Mitsubishi',
  },
  {
    name: 'Mazda',
    value: 'Mazda',
  },
  {
    name: 'Chevrolet',
    value: 'Chevrolet',
  },
  {
    name: 'Mercedes-Benz',
    value: 'Mercedes-Benz',
  },
  {
    name: 'Kia',
    value: 'Kia',
  },
  {
    name: 'Hãng khác',
    value: 'Hãng khác',
  },
];

const motoCompanyData: IJob[] = [
  {
    name: 'Kymco',
    value: 'Kymco',
  },
  {
    name: 'SYM',
    value: 'SYM',
  },
  {
    name: 'Yamaha',
    value: 'Yamaha',
  },
  {
    name: 'Hãng khác',
    value: 'Hãng khác',
  },
];

const yearData: IJob[] = [
  ...Array(20)
    .fill(null)
    .map((_, index) => ({
      name: `Năm ${2005 + index}`,
      value: `Năm ${2005 + index}`,
    })),
  { name: 'Trước năm 2005', value: 'Trước năm 2005' },
];

const carGearData: IJob[] = [
  {
    name: 'Tự động',
    value: 'Tự động',
  },
  {
    name: 'Số sàn',
    value: 'Số sàn',
  },
];

const carFuelData: IJob[] = [
  {
    name: 'Xăng',
    value: 'Xăng',
  },
  {
    name: 'Dầu',
    value: 'Dầu',
  },
  {
    name: 'Điện',
    value: 'Điện',
  },
];

const usageStatusData: IJob[] = [
  {
    name: 'Đã sử dụng',
    value: 'Đã sử dụng',
  },
  {
    name: 'Mới',
    value: 'Mới',
  },
];

const sellerInformationData: IJob[] = [
  {
    name: 'Cá nhân',
    value: 'Cá nhân',
  },
  {
    name: 'Bán chuyên',
    value: 'Bán chuyên',
  },
];

const motoCapacityData: IJob[] = [
  {
    name: '<50 cc',
    value: '<50 cc',
  },
  {
    name: '50 - 100 cc',
    value: '50 - 100 cc',
  },
  {
    name: '100 - 175 cc',
    value: '100 - 175 cc',
  },
  {
    name: '> 175 cc',
    value: '> 175 cc',
  },
];

const colorData: IJob[] = [
  {
    name: 'Xanh',
    value: 'Xanh',
  },
  {
    name: 'Đỏ',
    value: 'Đỏ',
  },
  {
    name: 'Tím',
    value: 'Tím',
  },
  {
    name: 'Vàng',
    value: 'Vàng',
  },
  {
    name: 'Màu khác',
    value: 'Màu khác',
  },
];

const laptopCompanyData: IJob[] = [
  {
    name: 'Apple',
    value: 'Apple',
  },
  {
    name: 'Acer',
    value: 'Acer',
  },
  {
    name: 'Dell',
    value: 'Dell',
  },
  {
    name: 'MSI',
    value: 'MSI',
  },
  {
    name: 'Asus',
    value: 'Asus',
  },
  {
    name: 'HP',
    value: 'HP',
  },
  {
    name: 'Samsung',
    value: 'Samsung',
  },
  {
    name: 'Lenovo',
    value: 'Lenovo',
  },
  {
    name: 'Khác',
    value: 'Khác',
  },
];

const phoneCompanyData: IJob[] = [
  {
    name: 'Apple',
    value: 'Apple',
  },
  {
    name: 'Samsung',
    value: 'Samsung',
  },
  {
    name: 'Oppo',
    value: 'Oppo',
  },
  {
    name: 'Nokia',
    value: 'Nokia',
  },
  {
    name: 'Sony',
    value: 'Sony',
  },
  {
    name: 'Realme',
    value: 'Realme',
  },
  {
    name: 'Khác',
    value: 'Khác',
  },
];

const laptopRamData: IJob[] = [
  {
    name: '4 GB',
    value: '4 GB',
  },
  {
    name: '6 GB',
    value: '6 GB',
  },
  {
    name: '8 GB',
    value: '8 GB',
  },
  {
    name: '16 GB',
    value: '16 GB',
  },
  {
    name: '32 GB',
    value: '32 GB',
  },
  {
    name: '> 32 GB',
    value: '> 32 GB',
  },
];

const laptopCardData: IJob[] = [
  {
    name: 'Onboard',
    value: 'Onboard',
  },
  {
    name: 'AMD',
    value: 'AMD',
  },
  {
    name: 'NVIDIA',
    value: 'NVIDIA',
  },
  {
    name: 'Khác',
    value: 'Khác',
  },
];

const laptopScreenSizeData: IJob[] = [
  {
    name: '9 inch',
    value: '9 inch',
  },
  {
    name: '9 - 10.9 inch',
    value: '9 - 10.9 inch',
  },
  {
    name: '11 - 12.9 inch',
    value: '11 - 12.9 inch',
  },
  {
    name: '13 - 14.9 inch',
    value: '13 - 14.9 inch',
  },
  {
    name: '17 - 18.9 inch',
    value: '17 - 18.9 inch',
  },
  {
    name: '19 - 20.9 inch',
    value: '19 - 20.9 inch',
  },
];

const goodHouseUsageStatus: IJob[] = [
  {
    name: 'Nội thất đầy đủ',
    value: 'Nội thất đầy đủ',
  },
  {
    name: 'Nội thất cao cấp',
    value: 'Nội thất cao cấp',
  },
  {
    name: 'Nhà trống',
    value: 'Nhà trống',
  },
];

const guaranteeData: IJob[] = [
  {
    name: 'Hết bảo hành',
    value: 'Hết bảo hành',
  },
  {
    name: '1 tháng',
    value: '1 tháng',
  },
  {
    name: '2 tháng',
    value: '2 tháng',
  },
  {
    name: '3 tháng',
    value: '3 tháng',
  },
  {
    name: '4-6 tháng',
    value: '4-6 tháng',
  },
  {
    name: '7-12 tháng',
    value: '7-12 tháng',
  },
  {
    name: 'Còn bảo hành',
    value: 'Còn bảo hành',
  },
];

const fridgeVolumeData: IJob[] = [
  {
    name: '< 100 lít',
    value: '< 100 lít',
  },
  {
    name: '100 -149 lít',
    value: '100 -149 lít',
  },
  {
    name: '150 - 199 lít',
    value: '150 - 199 lít',
  },
  {
    name: '200 - 299 lít',
    value: '200 - 299 lít',
  },
  {
    name: '300 - 399 lít',
    value: '300 - 399 lít',
  },
  {
    name: '> 400 lít',
    value: '> 400 lít',
  },
];

const fridgeWattageData: IJob[] = [
  {
    name: '1 HP',
    value: '1 HP',
  },
  {
    name: '1.5 HP',
    value: '1.5 HP',
  },
  {
    name: '2 HP',
    value: '2 HP',
  },
  {
    name: '> 2 HP',
    value: '> 2 HP',
  },
  {
    name: 'Khác',
    value: 'Khác',
  },
];

const washingWeightData: IJob[] = [
  {
    name: '< 7 kg>',
    value: '< 7 kg>',
  },
  {
    name: '7 - 7.9 kg',
    value: '7 - 7.9 kg',
  },
  {
    name: '8 - 8.9 kg',
    value: '8 - 8.9 kg',
  },
  {
    name: '9 - 9.9 kg',
    value: '9 - 9.9 kg',
  },
  {
    name: '> 10 kg',
    value: '> 10 kg',
  },
];

const selectData = {
  workCarrerData,
  workPayMethodData,
  workTypeData,
  genderData,
  carCompanyData,
  motoCompanyData,
  yearData,
  carGearData,
  carFuelData,
  usageStatusData,
  sellerInformationData,
  motoCapacityData,
  colorData,
  laptopCompanyData,
  laptopRamData,
  laptopCardData,
  laptopScreenSizeData,
  goodHouseUsageStatus,
  guaranteeData,
  fridgeVolumeData,
  fridgeWattageData,
  washingWeightData,
  phoneCompanyData,
};

export default selectData;
