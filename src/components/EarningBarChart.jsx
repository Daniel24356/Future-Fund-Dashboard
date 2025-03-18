// import React, { PureComponent } from 'react';
// import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     name: 'Sep',
//     Loans: 4000,
//     Data: 2400,
//     Airtime: 30000,
//     Contributions: 500000,
//   },
//   {
//     name: 'Oct',
//     Loans: 4000,
//     Data: 2400,
//     Airtime: 30000,
//     Contributions: 500000,
//   },
//   {
//     name: 'Nov',
//     Loans: 4000,
//     Data: 2400,
//     Airtime: 30000,
//     Contributions: 500000,
//   },
//   {
//     name: 'Dec',
//     Loans: 4000,
//     Data: 2400,
//     Airtime: 30000,
//     Contributions: 500000,
//   },
//   {
//     name: 'Jan',
//     Loans: 4000,
//     Data: 2400,
//     Airtime: 30000,
//     Contributions: 500000,
//   },
//   {
//     name: 'Feb',
//     Loans: 4000,
//     Data: 2400,
//     Airtime: 30000,
//     Contributions: 500000,
//   },
//   {
//     name: 'Mar',
//     Loans: 4000,
//     Data: 2400,
//     Airtime: 30000,
//     Contributions: 500000,
//   },
// ];

// export default class EarningBarChart extends PureComponent {

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           {/* <CartesianGrid strokeDasharray="3 3" /> */}
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="Loans" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
//           <Bar dataKey="Data" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
//           <Bar dataKey="Airtime" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
//           <Bar dataKey="Contributions" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
//         </BarChart>
//       </ResponsiveContainer>
//     );
//   }
// }


// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


// const data = [
//   { name: 'Sep', Loans: 4000, Data: 2400, Airtime: 30000, Contributions: 50000 },
//   { name: 'Oct', Loans: 3200, Data: 4500, Airtime: 28000, Contributions: 48000 },
//   { name: 'Nov', Loans: 5000, Data: 3100, Airtime: 35000, Contributions: 53000 },
//   { name: 'Dec', Loans: 6000, Data: 3800, Airtime: 37000, Contributions: 55000 },
//   { name: 'Jan', Loans: 7000, Data: 2900, Airtime: 36000, Contributions: 52000 },
//   { name: 'Feb', Loans: 4300, Data: 3400, Airtime: 30000, Contributions: 51000 },
//   { name: 'Mar', Loans: 5400, Data: 4100, Airtime: 39000, Contributions: 58000 }
// ];

// // Format numbers to K format
// const formatValue = (value) => value >= 1000 ? `${(value / 1000).toFixed(1)}K` : value;

// const CustomTooltip = ({ active, payload }) => {
//   if (active && payload && payload.length) {
//     const data = payload[0].payload;
//     return (
//       <div className="custom-tooltip" style={{ padding: '10px', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '5px' }}>
//         <p>{`Month: ${data.name}`}</p>
//         <p>{`Loans: ${formatValue(data.Loans)}`}</p>
//         <p>{`Data: ${formatValue(data.Data)}`}</p>
//         <p>{`Airtime: ${formatValue(data.Airtime)}`}</p>
//         <p>{`Contributions: ${formatValue(data.Contributions)}`}</p>
//       </div>
//     );
//   }
//   return null;
// };

// const EarningBarChart = () => {
//   // Add total value to each data point
//   const chartData = data.map(item => ({
//     ...item,
//     Total: item.Loans + item.Data + item.Airtime + item.Contributions
//   }));

//   return (
//     <ResponsiveContainer width="100%" height={250}>
//       <BarChart data={chartData}>
//         <XAxis dataKey="name" />
//         <YAxis tickFormatter={formatValue} />
//         <Tooltip content={<CustomTooltip />} />
//         <Bar
//           dataKey="Total"
//           fill="#36f4db"
//           radius={[5, 5, 0, 0]} // Border top left and top right radius
//           barSize={40}
//         />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default EarningBarChart;



import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Sep', Loans: 4000, Data: 2400, Airtime: 30000, Contributions: 50000 },
  { name: 'Oct', Loans: 3200, Data: 4500, Airtime: 28000, Contributions: 48000 },
  { name: 'Nov', Loans: 5000, Data: 3100, Airtime: 35000, Contributions: 53000 },
  { name: 'Dec', Loans: 6000, Data: 3800, Airtime: 37000, Contributions: 55000 },
  { name: 'Jan', Loans: 7000, Data: 2900, Airtime: 36000, Contributions: 52000 },
  { name: 'Feb', Loans: 4300, Data: 3400, Airtime: 30000, Contributions: 51000 },
  { name: 'Mar', Loans: 5400, Data: 4100, Airtime: 39000, Contributions: 58000 }
];

// Format numbers to K format
const formatValue = (value) => value >= 1000 ? `${(value / 1000).toFixed(1)}K` : value;

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div style={{
        padding: '10px',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '14px',
        lineHeight: '1.5',
        color: '#333'
      }}>
        {/* <p><strong>Month:</strong> {data.name}</p> */}
        <p style={{ color: '#ff6384' }}>Loans: {formatValue(data.Loans)}</p>
        <p style={{ color: '#36a2eb' }}>Data: {formatValue(data.Data)}</p>
        <p style={{ color: '#ffcd56' }}>Airtime: {formatValue(data.Airtime)}</p>
        <p style={{ color: '#4bc0c0' }}>Contributions: {formatValue(data.Contributions)}</p>
        <p style={{ color: '#9966ff', fontWeight: 'bold' }}>Total: {formatValue(data.Total)}</p>
      </div>
    );
  }
  return null;
};

const EarningBarChart = () => {
  // Add total value to each data point
  const chartData = data.map(item => ({
    ...item,
    Total: item.Loans + item.Data + item.Airtime + item.Contributions
  }));

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={chartData}>
        <XAxis dataKey="name" />
        <YAxis tickFormatter={formatValue} />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="Total"
          fill="#2C14DD"
          radius={[5, 5, 0, 0]} // Rounded top corners
          barSize={40}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default EarningBarChart;
