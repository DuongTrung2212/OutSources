import React from 'react';
import ChartCard from './components/ChartCard';
import OverViewCard from './components/OverViewCard';

export default function OverViewPage() {
  const staticticalData: IChartCart[] = [
    {
      label: 'Người dùng',
      value: '12',
      color: '#8884d8',
      datasets: {},
      uniqueId: 'staticticalData-1',
    },
    {
      label: 'Người theo dõi',
      value: '12',
      color: '#2ee0c9',
      datasets: {},
      uniqueId: 'staticticalData-2',
    },
    {
      label: 'Người đăng tin',
      value: '12',
      color: '#5be7d5',
      datasets: {},
      uniqueId: 'staticticalData-3',
    },
    {
      label: 'Doanh thu',
      value: '12',
      color: '#2c304d',
      datasets: {},
      uniqueId: 'staticticalData-4',
    },
  ];
  return (
    <div className="w-full">
      <div className="w-full font-medium flex justify-end space-x-2 p-[30px] text-black">
        <p>Báo cáo: </p>
        <p className="text-orange-600 font-bold">Tất cả</p>
        <p>Hôm nay</p>
      </div>
      <div className="w-full flex justify-around">
        {staticticalData.map((item, index) => (
          <div key={index} className="w-1/5">
            <ChartCard
              label={item.label}
              value={item.value}
              color={item.color}
              datasets={{}}
              uniqueId={index}
            />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center gap-x-10 py-[30px]">
        <div className="w-1/4">
          <ChartCard
            label={'Lượt truy vập hôm nay'}
            value={'10'}
            color={'#1a3ad9ff'}
            datasets={{}}
            uniqueId={'access-count'}
          />
        </div>
        <div className="w-1/4">
          <OverViewCard type="POST" value={''} />
        </div>
        <div className="w-1/4">
          <OverViewCard type="USER" value={''} />
        </div>
      </div>
    </div>
  );
}
