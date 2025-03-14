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

const Analytics = () => {

  const [statsData] = useState([
    {
      "statIcon": <FiUsers/>,
      "statValue": "8.549K",
      "statName": "Customers",
      color: ' #6221f3',
      bgColor: '#6221f31c'
    },
    {
      "statIcon": <LiaPiggyBankSolid />,
      "statValue": "230K",
      "statName": "Contributions",
      color:'#36f4db',
      bgColor:'rgba(54, 244, 206, 0.18)'
    },
    {
      "statIcon": <TbMoneybag />,
      "statValue": "1.423K",
      "statName": "Loans",
      color: '#F44336',
      bgColor: '#f443361f'
    },
    {
      "statIcon": <FiDollarSign />,
      "statValue": "₦500K",
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

  const [transactionState] = useState([
    {
      "transIcon": <FaCheck />,
      "transName": "Approved",
      "transAmount": "3.1k",
      color: '#4CAF50',
      bgColor: '#4caf5026'
    },
    {
      "transIcon":  <IoWarningOutline />,
      "transName": "Pending",
      "transAmount": "11.7k",
      color: '#FFC107',
      bgColor: '#ffc10726'
    },
    {
      "transIcon": <TbCancel />,
      "transName": "Cancelled",
      "transAmount": "14",
      color: '#F44336',
      bgColor: '#f443361f'
      
    }
  ])

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

  const invoiceHead = ['ID', 'STATUS', 'TOTAL', 'ISSUED DATE', 'ACTIONS'];

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
              <p><b>Congratulations Williams <span style={{fontSize: "23px"}}>🎉</span></b></p>
              <p>Top Borrower of the month</p>
            </div>

            <div className="highestBorrowerTxt" id='highestBorrowerTxt2'>
              <p className='highestBorrowerAmount'><b>₦500.2K</b></p>
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
              <p><b>Statistics</b></p>
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
          <p className='loanAmount'>
            <b>82.5K</b>
            <br />
            Loans
          </p>
          <SemiCircularProgressBar value={78}/>
          <p className='loanAmount'>46.3k more than last month</p>
        </div>
        
        <div className="profit">
          <p className='profitTxt'>
            <b>Profit</b>
            <br />
            Last Month
          </p>
          <ProfitLineChart/>

          <div className="profitSummary">
            <p><b>624k</b></p>
            <p style={{color: "#52c41a"}}>+8.24%</p>
          </div>
          
        </div>

        <div className="earningReports">

          <div className="earningReportsHead">
            <p><b>Earning Reports</b></p>
            <p style={{color: "rgb(108, 108, 108)"}}>Monthly Earnings Overview</p>
          </div>
          

          <div className="earningReportsBox">
            {earningReports.map((reports, key) => (
              <div className="earningReportsIcon" key={key}>
                <i>{reports.earningIcon}</i>
                <p><b>{reports.earningName}</b></p>
              </div>
            ))}
          </div>
          
          <EarningBarChart/>
        </div>

        <div className="sourceVisits">
          <div className="sourceHead">
            <p><b>Source Visits</b></p>
            <p style={{color: "rgb(108, 108, 108)"}}>38.4K Visitors</p>
          </div>
          
          <div className="sourceBody">
            {sources.map((source, key) => (
              <div className="source" key={key}>
                <i className='sourceIcon'>{source.sourceIcon}</i>
                <div className="sourceTxt">
                  <p><b>{source.sourceName}</b></p>
                  <p style={{color: "rgb(108, 108, 108)", fontSize: "13px"}}>
                    {source.sourceName2}
                  </p>
                </div>
                <p>{source.sourceAmount}</p>
              </div>
            ))}
          </div>
          
        </div>

        <div className="transactions">
          <div className="transactionHead">
              <p><b>Transactions</b></p>
              <p style={{color: "rgb(108, 108, 108)"}}>
                31.4k transactions last month
              </p>
            </div>
            
            <div className="transactionBody">
              {transactionState.map((state, key) => (
                <div className="transaction" key={key}>
                  <i 
                    className='transactionIcon'
                    style={{
                      color: state.color,
                      backgroundColor: state.bgColor
                    }}
                  >
                    {state.transIcon}
                  </i>
                  <p style={{color: state.color}}><b>{state.transName}</b></p>
                  <p>{state.transAmount}</p>
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

          <div className="invoiceList">
            <div className="invoiceHead">
              {invoiceHead.map((head, index) => (
                <div 
                  key={index} 
                  // className={`userListHeadItem ${index === 0 ? 'firstHeadItem' : ''}`}
                >
                  <p><b>{head}</b></p>
                </div>
              ))}
            </div>

            {invoiceData.map((invoice, index) => (
              <div className="invoiceRow" key={index}>
               
               <div className='ID'>
                  <p><b>{invoice.invoiceID}</b></p>
                </div>

                {/* Role */}
                <div className='invoiceStatus'>
                  <i style={{color: invoice.color, backgroundColor: invoice.bgColor}}>{invoice.invoiceStatus}</i>
                </div>

                <div className='invoiceTotal'>
                  <p>{`₦${invoice.invoiceTotal.toLocaleString()}`}</p>
                </div>

                <div className='issuedDate'>
                  <p>{invoice.issuedDate}</p>
                </div>

              
                {/* Actions */}
                <div className='actionsInfo'>
                  <div className="userListActions">
                    <i><IoMailOpenOutline/></i>
                    <i><FaRegEye/></i>
                    <i><PiDotsThreeOutlineVerticalFill/></i>
                  </div>
                </div>
              </div>
            ))}
            {/* </div> */}
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default Analytics