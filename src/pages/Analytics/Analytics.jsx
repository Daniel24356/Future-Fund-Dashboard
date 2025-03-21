import React, {useState} from 'react'
import './Analytics.css'
import Header from '../../components/Header/Header'
import SemiCircularProgressBar from '../../components/SemiCircularProgressBar';
import { FaCheck, FaRegEye } from "react-icons/fa";
import { TbMoneybag, TbCancel } from "react-icons/tb";
import { FiUsers, FiDollarSign, FiPhoneCall, FiWifi, FiExternalLink } from "react-icons/fi";
import { LiaPiggyBankSolid } from "react-icons/lia";
import { BsMailboxFlag } from "react-icons/bs";
import { IoChatboxEllipsesOutline, IoMegaphoneOutline, IoWarningOutline , IoMailOpenOutline} from "react-icons/io5";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import borrower from '../../assets/ai-avatar.webp'
import ProfitLineChart from '../../components/ProfitLineChart';
import EarningBarChart from '../../components/EarningBarChart';
import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown/Dropdown';
import anya from '../../assets/anya.jpg'
import Adam from '../../assets/Adam.jpg'
import chibi from '../../assets/chibi.jpg'

const Analytics = () => {

  const [statsData] = useState([
    {
      "statIcon": <FiUsers/>,
      "statValue": "8.549k",
      "statName": "Customers",
      color: ' #6221f3',
      bgColor: '#6221f31c'
    },
    {
      "statIcon": <LiaPiggyBankSolid />,
      "statValue": "230k",
      "statName": "Contributions",
      color:'#36f4db',
      bgColor:'rgba(54, 244, 206, 0.18)'
    },
    {
      "statIcon": <TbMoneybag />,
      "statValue": "1.423k",
      "statName": "Loans",
      color: '#F44336',
      bgColor: '#f443361f'
    },
    {
      "statIcon": <FiDollarSign />,
      "statValue": "₦500k",
      "statName": "Revenue",
      color: '#4CAF50',
      bgColor: '#4caf5026'
    },
  ])


  const [earningReports] = useState([
    {
      "earningIcon": <TbMoneybag />,
      "earningName": "Loans",
    },
    {
      "earningIcon": <FiWifi />,
      "earningName": "Data",
    },
    {
      "earningIcon": <FiPhoneCall />,
      "earningName": "Airtime",
    },
    {
      "earningIcon": <LiaPiggyBankSolid />,
      "earningName": "Contributions",
    },
  ])

  const [sources] = useState([
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
  ])

  const [invoiceState] = useState([
    {
      "invoiceStateIcon": <FaCheck />,
      "invoiceStateName": "Approved",
      "invoiceStateAmount": "3.1k",
      color: '#4CAF50',
      bgColor: '#4caf5026'
    },
    {
      "invoiceStateIcon":  <IoWarningOutline />,
      "invoiceStateName": "Pending",
      "invoiceStateAmount": "11.7k",
      color: '#FFC107',
      bgColor: '#ffc10726'
    },
    {
      "invoiceStateIcon": <TbCancel />,
      "invoiceStateName": "Cancelled",
      "invoiceStateAmount": "14",
      color: '#F44336',
      bgColor: '#f443361f'
      
    }
  ])

  const invoices = [
    {
      id: 1,
      name: "Emma Ryan Jr.",
      type: "Electricity",
      status: "Issued",
      date: "Mar 19th, 2025",
      amount: "₦3,892",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Anya Forger",
      type: "Data",
      status: "Issued",
      date: "Feb 18th, 2025",
      amount: "₦1,073",
      img: anya,
    },
    {
      id: 3,
      name: "Zoe Woods",
      type: "Airtime",
      status: "Pending",
      date: "Feb 2nd, 2025",
      amount: "₦2,790",
      img: chibi,
    },
    {
      id: 4,
      name: "Adam Smasher",
      type: "Contribution",
      status: "Issued",
      date: "Jan 7th, 2025",
      amount: "₦4,130",
      img: Adam,
    }
  ];

  const options = [
    {
      optionTitle: 'Select No of Users',
      optionsList: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    },
    {
      optionTitle: 'Select Status',
      optionsList: ['Approved', 'Cancelled', 'Pending']
    }
  ];

  const [invoiceData] = useState([
      {
        "invoiceID": "#445",
        "invoiceStatus": <FaCheck/>,
        "invoiceTotal": 3000,
        "issuedDate": "13 March 2025",
        color: '#4CAF50',
        bgColor: '#4caf5026'
      },
      {
        "invoiceID": "#446",
        "invoiceStatus": <IoWarningOutline/>,
        "invoiceTotal": 1700,
        "issuedDate": "7 March 2025",
        color: '#FFC107',
        bgColor: '#ffc10726'
      },
      {
        "invoiceID": "#447",
        "invoiceStatus": <TbCancel/>,
        "invoiceTotal": 12000,
        "issuedDate": "28 Februrary 2025",
        color: '#F44336',
        bgColor: '#f443361f'
      },
    ])

  return (
    <div className='analytics'>
      <Header/>

      <div className="analyticsBox">

        <div className="highestBorrower">
          <div className="highestBorrowerTxtBox">

            <div className="highestBorrowerTxt" id='highestBorrowerTxt1'>
              <h3 className='congrats'><b>Congratulations Adrian <span style={{fontSize: "23px"}}>🎉</span></b></h3>
              <p className='borrower'>Top Borrower of the month</p>
            </div>

            <div className="highestBorrowerTxt" id='highestBorrowerTxt2'>
              <p className='highestBorrowerAmount'><b>₦500.2k</b></p>
              {/* <button className='loanHistoryBtn'>
                View Loan History
              </button> */}
              <Button
                btnName="View Loan History"
                width="70%"
                borderRadius="5px"
                padding="10px"
              />

            </div>
          </div>
          <div className="highestBorrowerImg">
            <img src={borrower} alt="" />
          </div>
        </div>

        
        <div className="stats">
            <div className="statsHead">
              <h3 className='statsHeadTitle'><b>Statistics</b></h3>
              <p className='update'>Updated 1 month ago</p>
            </div>
            <div className="statsBody">
              {statsData.map((data, key) => (
                <div className="statsBox" key={key}>
                  <i className='statIcon' style={{color: data.color, backgroundColor: data.bgColor}}>
                    {data.statIcon}
                  </i>

                  <div className="statsTxt">
                    <p className='statValue'><b>{data.statValue}</b></p>
                    <p className='statName'>{data.statName}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
        
        <div className="semiCircularBar">
          <div className="loanAmount1">
            <h3>82.5k</h3>
            <p style={{color: 'gray'}}>Loans</p>
          </div>
          <SemiCircularProgressBar value={47}/>
          <p className='loanAmount2'>46.3k less than last month</p>
        </div>
        
        <div className="profit">
          <div className="profitTxt">
            <h3>Profit</h3>
            <p style={{color: 'gray'}}>Last Month</p>
          </div>

          <ProfitLineChart/>

          <div className="profitSummary">
            <p className='profitSummaryValue'><b>624k</b></p>
            <p style={{color: "#52c41a"}}>+8.24%</p>
          </div>
          
        </div>

        <div className="earningReports">

          <div className="earningReportsHead">
            <h3><b>Earning Reports</b></h3>
            <p style={{color: "gray"}}>Monthly Earnings Overview</p>
          </div>
          

          <div className="earningReportsBox">
            {earningReports.map((reports, key) => (
              <div className="earningReportsIcon" key={key}>
                <i>{reports.earningIcon}</i>
                <p className='earningName'><b>{reports.earningName}</b></p>
              </div>
            ))}
          </div>
          
          <EarningBarChart/>
        </div>

        <div className="sourceVisits">
          <div className="sourceHead">
            <h3 className='sourceHeadTitle'><b>Source Visits</b></h3>
            <p style={{color: "gray"}}>38.4k Visitors</p>
          </div>
          
          <div className="sourceBody">
            {sources.map((source, key) => (
              <div className="source" key={key}>
                <i className='sourceIcon'>{source.sourceIcon}</i>
                <div className="sourceTxt">
                  <p className='sourceName'><b>{source.sourceName}</b></p>
                  <p style={{color: "gray", fontSize: "13px"}}>
                    {source.sourceName2}
                  </p>
                </div>
                <p className='sourceAmount'>{source.sourceAmount}</p>
              </div>
            ))}
          </div>
          
        </div>

        <div className="invoiceStates">
          <div className="invoiceStateHead">
              <h3><b>Invoices</b></h3>
              <p style={{color: "gray"}}>
                31.4k invoices last month
              </p>
            </div>
            
            <div className="invoiceStateBody">
              {invoiceState.map((state, key) => (
                <div className="invoiceState" key={key}>
                  <i 
                    className='invoiceStateIcon'
                    style={{
                      color: state.color,
                      backgroundColor: state.bgColor
                    }}
                  >
                    {state.invoiceStateIcon}
                  </i>
                  <p style={{color: state.color}}><b>{state.invoiceStateName}</b></p>
                  <p className='invoiceAmount'>{state.invoiceStateAmount}</p>
                </div>
              ))}
            </div>

            <Button
                btnName="Get More Insight"
                width="70%"
                borderRadius="5px"
                padding="10px"
            />
        </div>

        <div className="invoice">
          <div className="invoiceFilter">
            <div className="invoiceFilter1">
              <Dropdown options={options} index={0} width={160}/> 
              <Dropdown options={options} index={1} width={160}/>
            </div>

            <div className="invoiceFilter2">
              <input type="text" placeholder='Search Invoice' className='invoiceInput'/>
              <Button
                  btnName="Create Invoice"
                  width="200px"
                  height="60%"
                  borderRadius="5px"
                  padding="10px"
              />
            </div>
          </div>

          <div className="invoiceContainer">
          <div className="invoiceHead">
            <h2 className='h2'>Invoice</h2>
            <input type="text" placeholder="Search" />
          </div>
          <table>
            <thead>
              <tr>
                <th>USER</th>
                <th>TYPE</th>
                <th>STATUS</th>
                <th>ISSUED DATE</th>
                <th>AMOUNT</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td className="receiver">
                    <input type="checkbox" />
                    <img src={invoice.img} alt={invoice.name} />
                    <span>{invoice.name}</span>
                  </td>
                  <td>{invoice.type}</td>
                  <td>
                    <span className={`status ${invoice.status.toLowerCase()}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td>{invoice.date}</td>
                  <td className="amount11">{invoice.amount}</td>
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
      
    </div>
  )
}

export default Analytics