import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import './ChartStyles.css'
import { FaDollarSign } from "react-icons/fa";
import { RiPaypalLine } from "react-icons/ri";

const data = [
  { name: "A", uv: 80, pv: -40 },
  { name: "B", uv: 60, pv: -30 },
  { name: "C", uv: 120, pv: -50 },
  { name: "D", uv: 90, pv: -45 },
  { name: "E", uv: 110, pv: -55 },
  { name: "F", uv: 140, pv: -70 },
  { name: "G", uv: 100, pv: -50 },
  { name: "H", uv: 20, pv: -10 },
];



const TotalEarnings = () => {
  return (
    <div className="card">
      <h3 className="h3">Total Earning</h3>
      <p className="percentage">87% <span className="positive2">+25.8%</span></p>
      
      <ResponsiveContainer width="100%" height={250}>
      <BarChart 
        data={data} 
        barGap={5} 
        barCategoryGap="30%" // Ensures the bars are centered
      > 
        <XAxis dataKey="name" hide />
        <YAxis hide domain={[-100, 150]} />
        {/* Purple bars stretch UP with animation */}
        <Bar
          dataKey="uv"
          fill="#6C63FF"
          barSize={10} // Slightly increased size
          radius={[5, 5, 5, 5]}
          isAnimationActive={true}
          animationDuration={1500}
          animationEasing="ease-in-out"
        />
        {/* Gray bars stretch DOWN with animation */}
        <Bar
          dataKey="pv"
          fill="#807F89"
          barSize={10} // Slightly increased size
          radius={[5, 5, 5, 5]}
          isAnimationActive={true}
          animationDuration={800}
          animationEasing="ease-in-out"
        />
      </BarChart>
    </ResponsiveContainer>

      <div className="stats2">
        <div className="stat-item">
          <div className="total-E">
            <div className="double-icon">
              <FaDollarSign color='#6957DA' size={20} />
            </div>
          <span>
          <p className="amount02">Total Sales</p>
          <p className="name">Refund</p>
          </span>
          </div>
          <span className="positive2">+ $98</span>
        </div>

        <div className="stat-item">
          <div className="total-E1">
            <div className="double-icon1">
              <RiPaypalLine color='black' size={20} />
            </div>
          <span>
          <p className="amount02">Remove Revenue</p>
          <p className="name">Client Payment</p>
          </span>
          </div>
          <span className="positive2">+ $126</span>
        </div>
       
      </div>
    </div>
  );
};

export default TotalEarnings;
