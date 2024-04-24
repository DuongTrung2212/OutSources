import getParentUrl from './getUrl';

const getPrefixUrl = (key: string) => {
  switch (key) {
    case getParentUrl.ElectroDevice:
      return 'ElectronicDevice';
    case getParentUrl.Fridge:
      return 'refrigerator-airconditioner-washingmachine';
    case getParentUrl.GoodHouse:
      return 'good-house';
    case getParentUrl.HomeAppliance:
      return 'home-appliance';
    case getParentUrl.Machine:
      return 'machinery-equipment';
    case getParentUrl.Service:
      return 'service';
    case getParentUrl.Taxi:
      return 'taxi';
    case getParentUrl.Vehicle:
      return 'vehicle';
    case getParentUrl.Work:
      return 'job';
    default:
      break;
  }
};
export default getPrefixUrl;
