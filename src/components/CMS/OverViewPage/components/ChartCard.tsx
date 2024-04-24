import { Area, AreaChart, ResponsiveContainer } from 'recharts';

export default function ChartCard(props: IChartCart) {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="w-full h-fit bg-white shadow rounded">
      <div className="flex flex-col text-black p-[10px]">
        <p className="text-[30px] font-bold">{props.value}</p>
        <p className="font-medium">{props.label}</p>
      </div>
      <ResponsiveContainer width="100%" height={150}>
        <AreaChart
          width={200}
          height={60}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient
              id={`gradient-${props.uniqueId}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor={props.color} stopOpacity={1} />
              <stop offset="100%" stopColor={props.color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="uv"
            stroke={props.color}
            fill={`url(#gradient-${props.uniqueId})`}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
