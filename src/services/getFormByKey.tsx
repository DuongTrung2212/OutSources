import CreatePostAirConditionForm from '@/components/common/Form/CreatePostAirConditionForm';
import CreatePostBusinessPremisesForm from '@/components/common/Form/CreatePostBusinessPremisesForm';
import CreatePostCarForm from '@/components/common/Form/CreatePostCarForm';
import CreatePostCommonVehicleForm from '@/components/common/Form/CreatePostCommonVehicleForm';
import CreatePostDesktopForm from '@/components/common/Form/CreatePostDesktopForm';
import CreatePostElectronicDeviceForm from '@/components/common/Form/CreatePostElectronicDeviceForm';
import CreatePostFridgeForm from '@/components/common/Form/CreatePostFridgeForm';
import CreatePostHomeApplianceForm from '@/components/common/Form/CreatePostHomeApplianceForm';
import CreatePostLaptopForm from '@/components/common/Form/CreatePostLaptopForm';
import CreatePostMachineryEquipmentForm from '@/components/common/Form/CreatePostMachineryEquipmentForm';
import CreatePostMotobikeForm from '@/components/common/Form/CreatePostMotobikeForm';
import CreatePostPhoneForm from '@/components/common/Form/CreatePostPhoneForm';
import CreatePostServiceForm from '@/components/common/Form/CreatePostServiceForm';
import CreatePostTabletForm from '@/components/common/Form/CreatePostTabletForm';
import CreatePostTaxiForm from '@/components/common/Form/CreatePostTaxiForm';
import CreatePostWholeHouse from '@/components/common/Form/CreatePostWholeHouse';
import CreatePostWorkForm from '@/components/common/Form/CreatePostWorkForm';

const getFormByKey = (key: string, data?: any, edit?: boolean) => {
  switch (key) {
    case 'CAR':
      return <CreatePostCarForm data={data} edit={edit} />;
    case 'MOTEL-ROOM-DORMITORY':
      return <CreatePostWholeHouse data={data} edit={edit} />;
    case 'WHOLE-HOUSE':
      return <CreatePostWholeHouse data={data} edit={edit} />;
    case 'BUSINESS-PREMISES':
      return <CreatePostBusinessPremisesForm data={data} edit={edit} />;
    case 'FRIDGE':
      return <CreatePostFridgeForm data={data} edit={edit} />;
    case 'AIR-CONDITIONING-AIR-CONDITIONING':
      return <CreatePostAirConditionForm data={data} edit={edit} />;
    case 'WASHING-MACHINE':
      return <CreatePostFridgeForm data={data} edit={edit} />;
    case 'MOTORBIKE':
      return <CreatePostMotobikeForm data={data} edit={edit} />;
    case 'COMMON-VEHICLE':
      return <CreatePostCommonVehicleForm data={data} edit={edit} />;
    case 'PHONE':
      return <CreatePostPhoneForm data={data} edit={edit} />;
    case 'LAPTOP':
      return <CreatePostLaptopForm data={data} edit={edit} />;
    case 'TABLET':
      return <CreatePostTabletForm data={data} edit={edit} />;
    case 'DESKTOP':
      return <CreatePostDesktopForm data={data} edit={edit} />;
    case 'COMMON-ELECTRONICE-DEVICE':
      return <CreatePostElectronicDeviceForm data={data} edit={edit} />;
    case 'COMMON-SERVICE':
      return <CreatePostServiceForm data={data} edit={edit} />;
    case 'COMMON-FURNITURE-APPLIANCES':
      return <CreatePostHomeApplianceForm data={data} edit={edit} />;
    case 'COMMON-VIETSHOP':
      return;
    case 'MACHINE':
      return <CreatePostMachineryEquipmentForm data={data} edit={edit} />;
    case 'WORK':
      return <CreatePostWorkForm data={data} edit={edit} />;
    case 'TAXI':
      return <CreatePostTaxiForm data={data} edit={edit} />;
    // case 'CAR':
    //   return;
    // case 'CAR':
    //   return;

    default:
      break;
  }
};
export default getFormByKey;
