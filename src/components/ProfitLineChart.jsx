import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'A', value: 20 },
  { name: 'B', value: 40 },
  { name: 'C', value: 30 },
  { name: 'D', value: 50 },
  { name: 'E', value: 40 },
  { name: 'F', value: 60 }
];

const ProfitLineChart = () => {
  return (
    <ResponsiveContainer width="95%" height={100}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="value"
          stroke="#00cfff" // Match color from image
          strokeWidth={3}
          dot={{ stroke: '#00cfff', strokeWidth: 2, fill: '#fff', r: 5 }} // Rounded dots
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ProfitLineChart;


// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// const ProfitLineChart = () => {
//   return (
//     <ResponsiveContainer width="80%" height="80%">
//       <LineChart width={300} height={100} data={data}>
//         <Line type="monotone" dataKey="pv" stroke="#36f4db" strokeWidth={2} />
//       </LineChart>
//     </ResponsiveContainer>
//   );
// };


// export default ProfitLineChart;


