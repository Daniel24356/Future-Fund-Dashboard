import React from "react";
import { FaAngleDown, FaAngleUp  } from "react-icons/fa";
import usaFlag from "../../assets/Flag_of_the_United_States.svg.png";
import nigeriaFlag from "../../assets/Flag_of_Nigeria.svg.png";
import indiaFlag from "../../assets/Flag_of_India.svg.webp";
import australiaFlag from "../../assets/Flag-Australia.webp";
import franceFlag from "../../assets/Flag_of_France.svg.png";
import chinaFlag from "../../assets/China_flage.jpg";
import "./ChartStyles.css";

const countryData = [
  { name: "United States", amount: "$8.45k", flag: usaFlag, change: "25.8%", isPositive: true },
  { name: "Brazil", amount: "$7.78k", flag: nigeriaFlag, change: "16.2%", isPositive: false },
  { name: "India", amount: "$6.48k", flag: indiaFlag, change: "12.3%", isPositive: true },
  { name: "Australia", amount: "$5.12k", flag: australiaFlag, change: "11.9%", isPositive: false },
  { name: "France", amount: "$4.45k", flag: franceFlag, change: "16.2%", isPositive: true },
  { name: "China", amount: "$3.90k", flag: chinaFlag, change: "14.8%", isPositive: true },
];

const SalesByCountries = () => {
  return (
    <div className="card">
      <h3 className="h3">Sales by Countries</h3>
      <p className="sub-title-little">Monthly Sales Overview</p>
      {countryData.map((country, index) => (
        <div key={index} className="country-row">
          <img src={country.flag} alt={country.name} className="flag-icon" />
          <div className="country-info">
            <p className="amount02">{country.amount}</p>
            <p className="name">{country.name}</p>
          </div>
          <span className={country.isPositive ? "positive2" : "negative2"}>
          {country.isPositive ? <FaAngleUp  className="icon-up" /> : <FaAngleDown  className="icon-down" />}
            {country.change}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SalesByCountries;

