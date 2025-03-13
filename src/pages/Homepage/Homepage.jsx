import './Homepage.css'
import Search from '../../components/Search/Search'
import { IoCartOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { CiCreditCard1 } from "react-icons/ci";
import React, { useEffect, useState } from "react";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);
import { Bar, Doughnut } from "react-chartjs-2";
import { RiPaypalLine } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import ProgressChart from '../../components/Chart/ProgressChart';
import { MdAccessTime } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import { TbCashBanknote } from "react-icons/tb";
import {
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import SalesByCountries from "../../components/Charts/SalesByCountries";
import TotalEarnings from "../../components/Charts/TotalEarnings";
import MonthlyCampaignState from "../../components/Charts/MonthlyCampaignState";
import { BsExclamationTriangle } from "react-icons/bs";
import { TiSocialAtCircular } from "react-icons/ti";
import { GrMicrophone } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
import { IoOpenOutline } from "react-icons/io5";
import { CiBadgeDollar } from "react-icons/ci";


ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);


const transactions = [
  {
    id: 1,
    name: "Emma Ryan Jr.",
    type: "Salary",
    status: "Pending",
    date: "Feb 19th, 2023",
    amount: "$3,892",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Adrian Daren",
    type: "Bonus",
    status: "Done",
    date: "Feb 18th, 2023",
    amount: "$1,073",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: 3,
    name: "Roxanne Hills",
    type: "Salary",
    status: "Failed",
    date: "Apr 16th, 2023",
    amount: "$2,790",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    id: 4,
    name: "Adrian Daren",
    type: "Bonus",
    status: "Done",
    date: "Feb 18th, 2023",
    amount: "$1,073",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
  }
];

function Homepage() {


  



  const data = {
    labels: ["", "", "", "", "", ""], 
    datasets: [
      {
        data: [5, 10, 6, 12, 8, 15], 
        borderColor: "#28c76f", 
        backgroundColor: "rgba(7, 240, 112, 0.1)",
        fill: true,
        tension: 0.4, 
        pointRadius: 0, 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { display: false },
      y: { display: false }, 
    },
    elements: {
      line: { borderWidth: 3 },
    },
    plugins: { legend: { display: false } }, 
  };

  
  
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1)); 
    }, 30); 

    return () => clearInterval(interval);
  }, []);





  const barData = {
    labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    datasets: [
      {
        label: "Earnings",
        data: [200, 400, 350, 700, 900, 450, 500],
        backgroundColor: "#6957DA",
        borderRadius: 5,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { grid: { display: false } },
      y: { display: false },
    },
    plugins: { legend: { display: false } },
  };





  return (
    <div className='main'>
        <Search></Search>

        <div className="advert">
            <div className="advert-box">
              <div className="advert-box-details">
                <span className='website_info'>
                  <h3>Website Analytics</h3>
                  <p>Total 28.5% Conversion Rate</p>
                </span>
                <span className='website_info1'><h3>Traffic</h3></span>

                <div className='session'>
                    <div className="session-details">
                      <span className='num'>28%</span>
                      <p>Leads</p>
                    </div>


                    <div className="session-details">
                      <span className='num'>31K</span>
                      <p>Sessions</p>
                    </div>

                    <div className="session-details">
                      <span className='num'>1.2K</span>
                      <p>Page Views</p>
                    </div>

                    <div className="session-details">
                      <span className='num'>12%</span>
                      <p>Conversions</p>
                    </div>
                </div>
              </div>
            </div>

            <div className="advert-box1">
                <div className='sales-overview'>
                  <div className='sales-report'>
                  <span className='sales'>
                    <p>Sales Overview</p>
                    <h2>$42.5K</h2>
                  </span>

                  <span className='sales2'>+18.2%</span>
                  </div>

                  <div className="revenue-generate">
                    <div className="order-visit">
                      <div className='visit'>
                        <span className='gapin'> <span className='cart-red'><IoCartOutline color='red' /></span> <p>Order</p> </span> | <span className='gapin'> Visits <span className='anchor'><IoIosLink color='#2C14DD' /></span> </span>
                      </div>
                    </div>
                    <span> <p>VS</p> </span>
                    <div className='vs-report'>
                      <span>
                        <h3>62.2%</h3>
                        <p>6.440</p>
                      </span> | <span>
                      <h3>62.2%</h3>
                      <p>6.440</p>
                      </span>
                    </div>

                   

                  </div>
                  <div className='progress'>
                    <div className={`progress-bar progress-${progress}`}></div>
                    </div>
                </div>

                

                <div className="revenue">
                <div className="revenue-card">
                    <div className="icon1">
                    <CiCreditCard1 color='green' size={30} />
                    </div>
                    <h3>97.5k</h3>
                    <p className='RG'>Revenue Generated</p>
                  </div>
                  <div className="chart-container">
                    <Line data={data} options={options} />
                  </div>
                </div>
            </div>
        </div>



        <div className="dashboard">
      {/* Earnings Report */}
      <div className="card1">
        <h3 className="title">Earning Reports</h3>
        <p className="subtitle">Weekly Earnings Overview</p>
        <div className='warraper'>
        <span className='text-wraper'>
        <h2 className="amount">$468 <span className="growth">+4.2%</span></h2>
        <p className="info-New1">You informed of this week compared to last week</p>
        </span>
        <div className="chart-container2">
          <Bar data={barData} options={barOptions} />
        </div>
        </div>
        <div className="metrics1">
          <div className="metric">
          <div className="icon2 expense">
            <span><div className='cart-reform-earnings'><FaDollarSign color='#6957DA' size={18} /></div> Earnings</span>
            </div>
            <span className='price-tag'>
            <h4>$545.69</h4>
            <div className='progress-span-earnings'></div>
            </span>
          </div>
          <div className="metric">
          <div className="icon2 expense">
            <span><div className='cart-reform-profit'><IoTimeOutline color='#1ebc89' size={18} /></div> Profit</span>
            </div>
            <span className='price-tag'>
            <h4>$256.34</h4>
            <span className='progress-span-profit'></span>
            </span>
          </div>
          <div className="metric">
            <div className="icon2 expense">
            <span><div className='cart-reform-expense'><RiPaypalLine color='red' size={18} /></div> Expense</span>
            </div>
            <span className='price-tag'>
            <h4>$74.19</h4>
            <div className='progress-span'></div>
            </span>
          </div>
        </div>
      </div>

      {/* Support Tracker */}
      <div className="card23">
        
        
        
      <div className="metrics">

        <span className='title-header'>  <h3 className="title">Support Tracker</h3>
        <p className="subtitle">Last 7 Days</p></span>

          <span>
          <h2 className="amount">164</h2>
          <p className="info-New">Total Tickets</p>
          </span>
          <div className="metric2">
            <span className="icon new-tickets">
            <div className='cart-New-ticket'><TbCashBanknote color='#6957DA' size={20} /></div>
            </span>
            <span>
            <h4> New Tickets</h4>
            <p>142</p></span>
          </div>
          <div className="metric2">
            <span className="icon open-tickets">
            <div className='cart-open-ticket'><GrStatusGood color='aqua' size={20} /></div>
            </span>
            <span><h4>Open Tickets</h4>
            <p> 28 </p>
            </span>
          </div>
          <div className="metric2">
            <span className="icon response-time">
              <div className='cart-response-time'><MdAccessTime color='orange' size={20} /></div>
            </span>
            <span>
            <h4>Response Time</h4>
              <p>1 Day</p>
            </span>
          </div>
        </div>

        <div className="chart-container3">
        <ProgressChart progress={85} />
        </div>
      </div>
    </div>


    <div className="dashboard2">
      <SalesByCountries />
      <TotalEarnings />
      <MonthlyCampaignState />
    </div>


    <div className='dashboard2'>
      <div className="card">
      <h3 className="h3">Source Visit</h3>
      <p className="sub-title-little">38.4k Visitors</p><br />

      <div className="country-row">
      <div className="Source-content">
        <div className="monthly-icon"><TiSocialAtCircular size={20} /></div>
        <div className="country-percent">
        <p className="amount02">Direct Source</p>
        <p className="name">Direct link click</p>
        </div>

        <p>1.2k</p>

        <span className="growth1">+4.2%</span>
      </div>
      </div>




      <div className="country-row">
      <div className="Source-content">
        <div className="monthly-icon"><GrMicrophone size={20} /></div>
        <div className="country-percent">
        <p className="amount02">Social Network</p>
        <p className="name">Social Channels</p>
        </div>

        <p>12.5k</p>

        <span className="growth1">+8.2%</span>
      </div>
      </div>



      <div className="country-row">
      <div className="Source-content">
        <div className="monthly-icon"><MdOutlineMail size={20} /></div>
        <div className="country-percent">
        <p className="amount02">Social Network</p>
        <p className="name">Mail Campaign</p>
        </div>

        <p>2.15k</p>

        <span className="growth1">+2.4%</span>
      </div>
      </div>



      <div className="country-row">
      <div className="Source-content">
        <div className="monthly-icon"><IoOpenOutline size={20} /></div>
        <div className="country-percent">
        <p className="amount02">Social Network</p>
        <p className="name">Impact Radius Visits</p>
        </div>

        <p>342</p>

        <span className="growth2">-0.4%</span>
      </div>
      </div>


      <div className="country-row">
      <div className="Source-content">
        <div className="monthly-icon"><CiBadgeDollar size={20} /></div>
        <div className="country-percent">
        <p className="amount02">Social Network</p>
        <p className="name">Google AVDT</p>
        </div>

        <p>893</p>

        <span className="growth1">+9.1%</span>
      </div>
      </div>


      <div className="country-row">
      <div className="Source-content">
        <div className="monthly-icon"><BsExclamationTriangle size={20} /></div>
        <div className="country-percent">
        <p className="amount02">Social Network</p>
        <p className="name">Many Sources</p>
        </div>

        <p>31.5k</p>

        <span className="growth1">+6.2%</span>
      </div>
      </div>
      </div>


      <div className="transactions-container">
      <h2 className='h2'>Transactions</h2>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Receiver</th>
            <th>Type</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="receiver">
                <input type="checkbox" />
                <img src={transaction.img} alt={transaction.name} />
                <span>{transaction.name}</span>
              </td>
              <td>{transaction.type}</td>
              <td>
                <span className={`status ${transaction.status.toLowerCase()}`}>
                  {transaction.status}
                </span>
              </td>
              <td>{transaction.date}</td>
              <td className="amount11">{transaction.amount}</td>
              <td>
                <button className="details-btn">Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </div>
    </div>
  )  
}

export default Homepage;