import { ReactNode } from 'react';

interface IJob {
  id?: number;
  name?: string;
  value?: string;
  Url?: string;
  keyForm?: string;
  Creation_time?: string; // Nếu bạn muốn xử lý ngày thì có thể sử dụng kiểu Date
  Update_time?: string; // Tương tự, nếu muốn xử lý ngày thì có thể sử dụng kiểu Date
}

interface ICategory {
  key: string;
  label: string;
  children?: boolean;
  img?: string;
  url?: string;
  urlSub?: string;
  icon: ReactNode;
  form?: ReactNode;
}

interface IShop {
  id?: number;
  name?: string;
  address?: string;
  activate?: boolean;
  contact?: object;
  user?: IUser;
  email?: string;
  description?: string;
}

interface IImage {
  id: number;
  Image: string;
  Creation_time: string;
  Update_time: string;
  Job: number;
  Items: number;
}

interface ILocation {
  id: number;
  Name: string;
  Url: string | null;
  Creation_time: string;
  Update_time: string;
}

interface ILocationResponse {
  id: 1;
  Address_Location: IAddress[];
  Name: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
}

interface IAddress {
  id: number;
  Name: string;
  Name_en: string;
  Url: string | null;
  Creation_time: string;
  Update_time: string;
  Location: ILocation;
}

interface IPost {
  id?: string;
  name?: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
  quantity?: string;
  shop?: string;
  brand?: string;
  item_category?: string;
  infor?: {
    image: IImage[];
    location?: ILocation;
    category?: string;
    address?: IAddress;
    career?: string;
    type_of_work?: string;
    pay_forms?: string;
    sex?: string;
    experience?: string;
    map?: string;
    title?: string;
    number_of_recruitment?: string;
    wage?: string;
    detailed_description?: string;
    minimum_age?: string;
    maximum_age?: string;
    video?: string;
    contact_phone_number?: string;
    url?: string;
    usage_status?: string;
    seller_information?: string;
    guarantee?: string;
    volume?: string;
    wattage?: string;
    washing_volume?: string;
    free_giveaway?: string;
    price?: string;
    company?: string;
    capacity?: string;
    map?: string | number;
    color?: string;
    microprocessor?: string;
    ram?: string;
    hardDrive?: string;
    monitorCard?: string;
    screenSize?: string;
    acreage?: string;
    depositAmount?: string;
    year_produce?: string;
    seatNumber?: number;
    walked?: number;
    numberBathrooms?: number;
    numberBedrooms?: number;
    recruitment?: number;
    workType?: string;
    minAge?: string;
    maxAge?: string;
  };
  // payMethod?:string;
}

interface IJobPost {
  id: number;
  User: IUser;
  images_A1: IImage[];
  Location: ILocation;
  Category?: IJob;
  Address: IAddress;
  Career: IJob;
  Type_of_work: IJob;
  Pay_forms: IJob;
  Sex: IJob;
  Experience: IJob;
  Map: string;
  Title: string;
  Number_of_recruitment: string;
  Wage: string;
  Detailed_description: string;
  Minimum_age: string;
  Maximum_age: string;
  Video: string;
  Contact_phone_number: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
}
interface IJobPostCreate {
  images_A1_data?: UploadFile<any>[];
  Location?: number | string;
  Address?: number | string;
  Career?: number | string;
  Type_of_work?: number | string;
  Pay_forms?: number | string;
  Sex?: number | string;
  Experience?: number | string;
  Map?: number | string;
  Title?: string;
  Number_of_recruitment?: number;
  Wage?: number;
  Detailed_description?: string;
  Minimum_age?: number;
  Maximum_age?: number;
  Video?: UploadFile<any>[];
  Contact_phone_number?: string;
  Url?: string;
}
interface IGoodHousePostCreate {
  images_A2_data?: UploadFile<any>[];
  Location?: number | string;
  Address?: number | string;
  Category?: number | string;
  Acreage?: number | string;
  Price?: number | string;
  Deposit_amount?: number | string;
  Interior_condition?: number | string;
  Title?: string;
  Seller_information?: number | string;
  Number_of_bedrooms?: number;
  Number_of_bathrooms?: string;
  Detailed_description?: number | string;
  Video?: UploadFile;
  Contact_phone_number?: string;
  Url?: string;
}

interface IGoodHousePost {
  id: number;
  User: IUser;
  images_A2: IImage[];
  Location: {
    id: number;
    Address_Location: IAddress & { Location: ILocation }[];
    Name: string;
    Url: string | null;
    Creation_time: string;
    Update_time: string;
  };
  Address: IAddress & { Location: ILocation };
  Category: IJob;
  Interior_condition: IJob;
  Seller_information: IJob;
  Usage_status: IJob;
  Guarantee: IJob;
  Map: string;
  Acreage: string;
  Price: number | null;
  Deposit_amount: string;
  Title: string;
  Number_of_bedrooms: number;
  Number_of_bathrooms: number;
  Detailed_description: string;
  Video: string;
  Contact_phone_number: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
}

interface IRefrigeratorPost {
  id: number;
  User: IUser;
  images_A3: IImage[];
  Location: ILocation & { Address_Location: IAddress[] };
  Address: IAddress;
  Category: IJob;
  Usage_status: IJob;
  Seller_information: IJob;
  Guarantee: IJob;
  Volume: IJob;
  Wattage: IJob;
  Washing_volume: IJob;
  Map: string;
  Free_giveaway: string;
  Price: string;
  Title: string;
  Detailed_description: string;
  Video: string;
  Contact_phone_number: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
}

interface IMachinePost {
  id: number;
  User: IUser;
  images_A4: IImage[];
  Location: {
    id: number;
    Name: string;
    Url: string | null;
    Creation_time: string;
    Update_time: string;
    Address_Location: IAddress[];
  };
  Address: IAddress;
  Usage_status: IJob;
  Seller_information: IJob;
  Guarantee: IJob;
  Map: string;
  Free_giveaway: string;
  Price: string;
  Title: string;
  Detailed_description: string;
  Video: string;
  Contact_phone_number: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
}

interface ITaxiPost {
  id: number;
  User: IUser;
  images_A5: IImage[];
  Location: ILocation & { Address_Location: IAddress[] };
  Address: IAddress;
  Usage_status: IJob;
  Seller_information: IJob;
  Guarantee: IJob;
  Map: string;
  Free_giveaway: string;
  Price: string;
  Title: string;
  Detailed_description: string;
  Video: string;
  Contact_phone_number: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
}

// Vehicle

interface IVehicle {
  id: number;
  User: User;
  images_A3: IImage[];
  Location: ILocation;
  Address: IAddress;
  Category: IJob;
  Guarantee: IJob;
  Company: IJob;
  Year_of_manufacture: IJob;
  Gearbox: IJob;
  Seat_number: IJob;
  Capacity: IJob;
  Map: IJob;
  Fuel: IJob;
  Map: string;
  Free_giveaway: string;
  Price: string;
  Title: string;
  Detailed_description: string;
  Video: string;
  Contact_phone_number: string;
  Seller_information: IJob;
  Usage_status: IJob;
  Url: string;
  Creation_time: string;
  Update_time: string;
}

interface IElectroDevice extends IVehicle {
  Color: Color;
  Hard_drive: HardDrive;
  Monitor_card: MonitorCard;
  Screen_size: ScreenSize;
  Microprocessor: IJob;
  Ram: IJob;
}

interface IServices {
  id: number;
  User: User;
  images_A3: Image[];
  Location: ILocation;
  Address: IAddress;
  Category: IJob;
  Usage_status: IJob;
  Seller_information: IJob;
  Guarantee: IJob;
  Map: null | string;
  Free_giveaway: null | string;
  Price: null | string;
  Title: null | string;
  Detailed_description: null | string;
  Video: null | string;
  Contact_phone_number: null | string;
  Url: null | string;
  Creation_time: string;
  Update_time: string;
}

interface IHomeAppliance {
  id: number;
  User: IUser;
  images_A3: IImage[];
  Location: ILocation;
  Address: IAddress & {
    Location: ILocation;
  };
  Category: IJob;
  Usage_status: IJob;
  Seller_information: IJob;
  Guarantee: IJob;
  Map: null | string;
  Free_giveaway: null | string;
  Price: null | string;
  Title: null | string;
  Detailed_description: null | string;
  Video: null | string;
  Contact_phone_number: null | string;
  Url: null | string;
  Creation_time: string;
  Update_time: string;
}

interface IShopViet {
  id: number;
  User: IUser;
  images_A3: {
    id: number;
    Image: string;
    Creation_time: string;
    Update_time: string;
    Items: number;
  }[];
  Location: ILocation;
  Address: IAddress & {
    Location: ILocation;
  };
  Category: IJob;
  Usage_status: IJob;
  Seller_information: IJob;
  Guarantee: IJob;
  Map: null | string;
  Free_giveaway: null | string;
  Price: null | string;
  Title: null | string;
  Detailed_description: null | string;
  Video: null | string;
  Contact_phone_number: null | string;
  Url: null | string;
  Creation_time: string;
  Update_time: string;
}

interface IProduct {
  id?: number;
  User?: IUser;
  Location?: ILocationResponse;
  Address?: IAddress;
  Category?: IJob;
  images_A1?: IImage[];
  images_A2?: IImage[];
  images_A2_data?: IImage[];
  images_A3?: IImage[];
  images_A3_data?: IImage[];
  images_A4?: IImage[];
  images_A5?: IImage[];
  images_B1?: IImage[];
  images_B2?: IImage[];
  images_B3?: IImage[];
  images_B4?: IImage[];
  images_B5?: IImage[];
  Usage_status?: IJob;
  Seller_information?: IJob;
  Guarantee?: IJob;
  Company?: IJob;
  Capacity?: IJob;
  Map?: string | number;
  Volume?: IJob;
  Wattage?: IJob;
  Washing_volume?: IJob;
  Color?: IJob;
  Microprocessor?: IJob;
  Ram?: IJob;
  HardDrive?: IJob;
  MonitorCard?: IJob;
  ScreenSize?: IJob;
  Free_giveaway?: IJob;
  Price?: number;
  Title?: number;
  Detailed_description?: string;
  Video?: string;
  Contact_phone_number?: string;
  Url?: string;
  Creation_time?: string;
  Update_time?: string;
}

// interface IPost {
//   id?: string | number;
//   images_A3_data?: any[];
//   Location?: number;
//   Address?: number;
//   Category?: number;
//   Usage_status?: number;
//   Seller_information?: number;
//   Guarantee?: number;
//   Volume?: number;
//   Wattage?: number;
//   Washing_volume?: number;
//   Map?: string;
//   Free_giveaway?: string | number;
//   Price?: number;
//   Title?: string;
//   Detailed_description?: string;
//   Contact_phone_number?: string;
//   Url?: string;
// }
