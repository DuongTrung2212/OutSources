interface IChartCart {
  uniqueId: string | number;
  label: string;
  value: string;
  color: string;
  datasets: object;
}
interface INotification {
  user: IUser;
  user_send: IUser;
  content: string;
}
interface ITableDataType {
  key: React.Key;
  name?: string;
  email?: string;
  address?: string;
}

interface IUserLogin {
  email: string;
  password: string;
}
interface IUserRegister {
  username: string;
  email: string;
  password: string;
  verify_code: string;
  new_password: string;
  rePassword: string;
}

interface IAPIRespone {
  onSuccess?: (res: AxiosResponse<any, any>) => void;
  onError?: (err: any) => void;
  onFinally?: () => void;
}

interface IListDataRespose<T> {
  status: number;
  message: string;
  data?: {
    count: number;
    next: number | null;
    previous: number | null;
    results: T[];
  };
}

interface IUser {
  id?: number;
  registration_type?: string;
  avatar?: string | null; // Có thể là đường dẫn đến ảnh đại diện hoặc null nếu không có
  username?: string;
  email?: string | null; // Có thể là địa chỉ email hoặc null nếu không có
  first_name?: string;
  last_name?: string;
  is_staff?: boolean;
  is_superuser?: boolean;
  last_updated?: string; // Dạng chuỗi đại diện cho thời điểm cập nhật gần nhất
  last_login?: string | null; // Dạng chuỗi đại diện cho thời điểm đăng nhập gần nhất hoặc null nếu chưa đăng nhập
  last_logout?: string | null; // Dạng chuỗi đại diện cho thời điểm đăng xuất gần nhất hoặc null nếu chưa đăng xuất
  date_joined?: string; // Dạng chuỗi đại diện cho thời điểm tham gia hệ thống
}
