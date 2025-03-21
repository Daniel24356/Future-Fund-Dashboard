import React, { useEffect, useState } from "react";
import './Homepage.css'
import Header from '../../components/Header/Header';
import { TbMoneybag } from "react-icons/tb";
import { LiaPiggyBankSolid } from "react-icons/lia";
import { IoCartOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { CiCreditCard1 } from "react-icons/ci";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);
import { Bar, Doughnut } from "react-chartjs-2";
import { RiPaypalLine } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import ProgressChart from '../../components/Chart/ProgressChart';
import { MdAccessTime } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import { TbCashBanknote } from "react-icons/tb";
import { BarElement, ArcElement, Title, Tooltip, Legend} from "chart.js";
import SalesByCountries from "../../components/Charts/SalesByCountries";
import TotalEarnings from "../../components/Charts/TotalEarnings";
import MonthlyCampaignState from "../../components/Charts/MonthlyCampaignState";
import { BsExclamationTriangle } from "react-icons/bs";
import { TiSocialAtCircular } from "react-icons/ti";
import { GrMicrophone } from "react-icons/gr";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineMail } from "react-icons/md";
import { IoOpenOutline } from "react-icons/io5";
import { CiBadgeDollar } from "react-icons/ci";
import anya from '../../assets/anya.jpg'
import Adam from '../../assets/Adam.jpg'
import chibi from '../../assets/chibi.jpg'
import webAnalytics from '../../assets/webAnalytics.png'
import { FiUsers, FiDollarSign, FiPhoneCall, FiWifi, FiExternalLink } from "react-icons/fi";
import { BsMailboxFlag } from "react-icons/bs";
import { IoChatboxEllipsesOutline, IoMegaphoneOutline, IoWarningOutline , IoMailOpenOutline} from "react-icons/io5";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const sources = [
    {
      "sourceIcon": <FiExternalLink />,
      "sourceName": "Direct Source",
      "sourceName2": "Direct link click",
      "sourceAmount": "1.2k",
    },
    {
      "sourceIcon": <IoChatboxEllipsesOutline />,
      "sourceName": "Social Networks",
      "sourceName2": "Social media",
      "sourceAmount": "21.7k",
    },
    {
      "sourceIcon": <BsMailboxFlag />,
      "sourceName": "Email Newsletter",
      "sourceName2": "Mail campaigns",
      "sourceAmount": "893",
    },
    {
      "sourceIcon": <IoMegaphoneOutline />,
      "sourceName": "ADVT",
      "sourceName2": "Youtube ADVT",
      "sourceAmount": "341",
    },
  ]

const transactions = [
  {
    id: 1,
    name: "Emma Ryan Jr.",
    type: "Electricity",
    status: "Pending",
    date: "Mar 19th, 2025",
    amount: "₦3,892",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Anya Forger",
    type: "Data",
    status: "Approved",
    date: "Feb 18th, 2025",
    amount: "₦1,073",
    img: anya,
  },
  {
    id: 3,
    name: "Zoe Woods",
    type: "Airtime",
    status: "Failed",
    date: "Feb 2nd, 2025",
    amount: "₦2,790",
    img: chibi,
  },
  {
    id: 4,
    name: "Adam Smasher",
    type: "Contribution",
    status: "Approved",
    date: "Jan 7th, 2025",
    amount: "₦4,130",
    img: Adam,
  }
];

const metrics = [
    {
      "metricIcon": <TbMoneybag />,
      "metricName": "Loans",
      "metricAmount": "545",
      color: ' #6221f3',
      bgColor: '#6221f31c'
    },
    {
      "metricIcon": <FiWifi/>,
      "metricName": "Data",
      "metricAmount": "256",
      color:'#36f4db',
      bgColor:'rgba(54, 244, 206, 0.18)'
      // color:'rgb(84, 105, 0)',
      // bgColor:'rgba(203, 244, 54, 0.2)'
    },
    {
      "metricIcon": <FiPhoneCall/>,
      "metricName": "Airtime",
      "metricAmount": "104",
      color: '#F44336',
      bgColor: '#f443361f'
    },
    {
      "metricIcon": <LiaPiggyBankSolid/>,
      "metricName": "Contributions",
      "metricAmount": "104",
      color: '#4CAF50',
      bgColor: '#4caf5026'
    }
]

const Homepage = () => {
  // const [isDarkMode, setIsDarkMode] = useState(
  //   document.body.classList.contains('dark-mode')
  // );

  // useEffect(() => {
  //   const observer = new MutationObserver(() => {
  //     setIsDarkMode(document.body.classList.contains('dark-mode'));
  //   });

  //   observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

  //   return () => observer.disconnect();
  // }, []);

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
    labels: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
    datasets: [
      {
        label: "Earnings",
        data: [200, 400, 350, 700, 900, 450, 500],
        // backgroundColor: "var(--barChart-color)",
        backgroundColor: "#8879ff",
        borderRadius: 5,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        // ticks: {
        //   color: isDarkMode ? '#000000' : '#ffffff', 
        // },
      },
      y: { display: false },
    },
    plugins: { legend: { display: false } },
  };

  // const barOptions = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   scales: {
  //     x: { 
  //       grid: { display: false } ,
  //     },
  //     y: { display: false },
  //   },
  //   plugins: { legend: { display: false } },
  // };





  return (
    <div className='homepage'>
      <Header/>

      <div className="homePageBox">


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

        {/* <div className="webAnalytics">
          <img src={webAnalytics} alt="" />

          <div className="webAnalyticsDetails">
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
        </div> */}



        <div className='sales-overview'>
          <div className='sales-report'>
            <span className='sales'>
              <p>Sales Overview</p>
              <h2>₦42.5k</h2>
            </span>

            <span className='sales2'>+18.2%</span>
          </div>

          <div className="loanVsContribution">
            <div className="loanVsContribution1">
              <i><TbMoneybag/></i>
              <span>|</span>
              <i><LiaPiggyBankSolid/></i>
            </div>
            {/* </div> */}

            {/* <div className="vs"> 
              <p>VS</p> 
            </div> */}

            <div className='loanVsContribution2'>
              <div>
                <h3>1.423k</h3>
                <p>6.4%</p>
              </div>
              {/* <span>|</span> */}
              <div>
                <h3>230k</h3>
                <p>6.44%</p>
              </div>
            </div>
          </div>

          <div className='progress'>
            <div className={`progress-bar progress-₦{progress}`}></div>
          </div>
        </div>




        {/* <div className="revenue">
          <div className="revenue-card">
            <div className="icon1">
              <CiCreditCard1 color='green' size={30} />
            </div>

            <h3>97.5k</h3>
             <p className='RG'>Revenue Generated</p>

            <div className="chart-container">
             <Line data={data} options={options} />
            </div>

          </div>
        </div> */}




        <div className="earningReport">
          <div className="earningReportHead">
            <h3 className="title">Earning Reports</h3>
            <p className="subtitle">Weekly Earnings Overview</p>
          </div>
          

          <div className='warraper'>
            <span className='text-wraper'>
              <h2 className="amount">₦468 <span className="growth">+4.2%</span></h2>
              <p className="info-New1">You informed of this week compared to last week</p>
            </span>
            <div className="chart-container2">
              <Bar data={barData} options={barOptions} />
            </div>
          </div>

          <div className="metrics">
            {metrics.map((metric, key) => (
              <div className="metric" key={key}>
                <div className="metricName">
                    <i style={{color: metric.color, backgroundColor: metric.bgColor}}>{metric.metricIcon}</i> 
                    <p>{metric.metricName}</p>
                </div>
                
                <span className='metricAmount'>
                  <p>₦{metric.metricAmount}</p>
                  <div className='progress-span-earnings'></div>
                </span>
              </div>
            ))}

          </div>
        </div>




        {/* <div className="support">
          <span className='title-header'>  
            <h3 className="title">Support Tracker</h3>
            <p className="subtitle">Last 7 Days</p>
          </span>

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
              <p>142</p>
            </span>
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

          <div className="chart-container3">
            <ProgressChart progress={85} />
          </div>
        </div> */}

          
        {/* </div> */}



        {/* <div className="salesByCountries">
          <SalesByCountries />
        </div>

        <div className="totalEarnings">
          <TotalEarnings />
        </div> */}

        {/* <div className="monthlyCampaign">
          <MonthlyCampaignState />
        </div> */}

        <div className="sourceVisits2">
          <div className="sourceHead">
            <h3 className="sourceHeadTitle"><b>Source Visits (Weekly)</b></h3>
            <p style={{color: "rgb(108, 108, 108)"}}>38.4k Visitors</p>
          </div>
          
          <div className="sourceBody">
            {sources.map((source, key) => (
              <div className="source" key={key}>
                <i className='sourceIcon'>{source.sourceIcon}</i>
                <div className="sourceTxt">
                  <p className="sourceName"><b>{source.sourceName}</b></p>
                  <p style={{color: "gray", fontSize: "13px"}}>
                    {source.sourceName2}
                  </p>
                </div>
                <p className="sourceAmount">{source.sourceAmount}</p>
              </div>
            ))}
          </div>
          
        </div>



        <div className="transactions-container">
          <div className="transactionsHead">
            <h2 className='h2'>Transactions</h2>
            <input type="text" placeholder="Search" />
          </div>
          <table>
            <thead>
              <tr>
                <th>USER</th>
                <th>TYPE</th>
                <th>STATUS</th>
                <th>DATE</th>
                <th>AMOUNT</th>
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

