import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { TbClick } from "react-icons/tb";
import { TbUsers } from "react-icons/tb";
import { BsExclamationTriangle } from "react-icons/bs";
import { IoBan } from "react-icons/io5";


import './ChartStyles.css'

const campaignData = [
  { icon: <div className="monthly-icon4"><MdOutlineMail size={25} color="green" /></div>, label: "Emails", value: "12,346", change: "+0.3%", isPositive: true },
  { icon: <div className="monthly-icon3"><IoIosLink size={25} color="aqua"  /></div>, label: "Opened", value: "8,734", change: "+2.1%", isPositive: true },
  { icon: <div className="monthly-icon2"><TbClick  size={25} color="orange" /></div>, label: "Clicked", value: "967", change: "-1.4%", isPositive: false },
  { icon: <div className="monthly-icon1"><TbUsers size={25} color="#2C14DD" /></div>, label: "Subscribe", value: "345", change: "+8.5%", isPositive: true },
  { icon: <div className="monthly-icon"><BsExclamationTriangle size={25} /></div>, label: "Complaints", value: "10", change: "-1.5%", isPositive: false },
  { icon: <div className="monthly-icon5"><IoBan size={25} color="red" /></div>, label: "Unsubscribe", value: "86", change: "-0.8%", isPositive: false },
];

const MonthlyCampaignState = () => {
  return (
    <div className="card">
      <h3 className="h3">Monthly Campaign State</h3>
      <p className="sub-title-little">8.52k Social Visitors</p>
      {campaignData.map((item, index) => (
        <div key={index} className="campaign-row">
          <span className="month-seperate">
          <span>{item.icon}</span>
          <p className="label">{item.label}</p>
          </span>
          <p className="value">{item.value}</p>
          <span className={item.isPositive ? "positive2" : "negative2"}>
            {item.change}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MonthlyCampaignState;
