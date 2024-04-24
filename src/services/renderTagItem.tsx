import TagItem from '@/components/common/TagItem';
import { IProduct } from '@/types/Job';
import { textDefault } from './dataDefault';
import {
  AlertOutlined,
  AuditOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  BorderInnerOutlined,
  BoxPlotOutlined,
  FilterOutlined,
  FunnelPlotOutlined,
  InsertRowBelowOutlined,
  MergeCellsOutlined,
  PictureOutlined,
  ScheduleOutlined,
  UserOutlined,
} from '@ant-design/icons';

const renderTagItem = (data: IProduct) => {
  let tabList = [];
  for (let index = 0; index < Object.keys(data).length; index++) {
    switch (Object.keys(data)[index]) {
      case 'Usage_status':
        tabList.push(
          <TagItem
            icon={<ScheduleOutlined />}
            title={`Tình trạng sử dụng: ${
              data.Usage_status?.name || textDefault
            } `}
          />
        );
        break;
      case 'Seller_information':
        tabList.push(
          <TagItem
            icon={<UserOutlined />}
            title={`Thông tin người bán: ${
              data.Seller_information?.name || textDefault
            }`}
          />
        );
        break;
      case 'Guarantee':
        tabList.push(
          <TagItem
            icon={<BarcodeOutlined />}
            title={`Bảo hành: ${data.Guarantee?.name || textDefault}`}
          />
        );
        break;
      case 'Company':
        tabList.push(
          <TagItem
            icon={<AuditOutlined />}
            title={`Công ty: ${data.Company?.name || textDefault}`}
          />
        );
        break;
      case 'Capacity':
        tabList.push(
          <TagItem
            icon={<AlertOutlined />}
            title={`Dung tích: ${data.Capacity?.name || textDefault}`}
          />
        );
        break;
      case 'Volume':
        tabList.push(
          <TagItem
            icon={<FilterOutlined />}
            title={`Khối lượng: ${data.Volume?.name || textDefault}`}
          />
        );
        break;
      case 'Wattage':
        tabList.push(
          <TagItem
            icon={<FunnelPlotOutlined />}
            title={`Công suất: ${data.Wattage?.name || textDefault}`}
          />
        );
        break;
      case 'Washing_volume':
        tabList.push(
          <TagItem
            icon={undefined}
            title={`Khối lượng giặt: ${
              data.Washing_volume?.name || textDefault
            }`}
          />
        );
        break;
      case 'Color':
        tabList.push(
          <TagItem
            icon={<BgColorsOutlined />}
            title={`Màu: ${data.Color?.name || textDefault}`}
          />
        );
        break;
      case 'Microprocessor':
        tabList.push(
          <TagItem
            icon={<BorderInnerOutlined />}
            title={`Bộ vi xử lí: ${data.Microprocessor?.name || textDefault}`}
          />
        );
        break;
      case 'Ram':
        tabList.push(
          <TagItem
            icon={<InsertRowBelowOutlined />}
            title={`Ram: ${data.Ram?.name || textDefault}`}
          />
        );
        break;
      case 'HardDrive':
        tabList.push(
          <TagItem
            icon={<MergeCellsOutlined />}
            title={`Ổ cứng: ${data.HardDrive?.name || textDefault}`}
          />
        );
        break;
      case 'MonitorCard':
        tabList.push(
          <TagItem
            icon={<BoxPlotOutlined />}
            title={`Card màn hình: ${data.MonitorCard?.name || textDefault}`}
          />
        );
        break;
      case 'ScreenSize':
        tabList.push(
          <TagItem
            icon={<PictureOutlined />}
            title={`Kích thước màn hình ${
              data.ScreenSize?.name || textDefault
            }`}
          />
        );
        break;

      default:
        break;
    }
  }
  return tabList;
};

export default renderTagItem;
