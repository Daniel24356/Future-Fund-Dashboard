import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
];

const Apiechart = () => {
  return (
    <PieChart width={250} height={220}>
      <Pie 
        data={data01} 
        dataKey="value" 
        cx="50%" 
        cy="50%" 
        outerRadius={60} 
        fill="rgb(136,187,239)" 
        animationDuration={3000} // Slows down animation (3 seconds)
      />
      <Pie 
        data={data02} 
        dataKey="value" 
        cx="50%" 
        cy="50%" 
        innerRadius={70} 
        outerRadius={90} 
        fill="#6957DA" 
        label 
        animationDuration={3000} // Slows down animation (3 seconds)
      />
    </PieChart>
  );
};

export default Apiechart;
