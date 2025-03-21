import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './Users.css';
// import { FaPlus } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import { CiEdit } from "react-icons/ci";
// import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { LuScreenShare } from "react-icons/lu";
import { FiUserCheck, FiUserPlus, FiUser, FiSave } from "react-icons/fi";
import { TbUserExclamation } from "react-icons/tb";
import Dropdown from '../../components/Dropdown/Dropdown';
import Button from '../../components/Button';
import anya from '../../assets/anya.jpg'
import Adam from '../../assets/Adam.jpg'
import chibi from '../../assets/chibi.jpg'
import adrian from '../../assets/ai-avatar.webp'

const Users = () => {

  const [selectedExportOption, setSelectedExportOption] = useState('');

  const exportOptions = ['Png', 'Jpg', 'Pdf'];

  const handleChange = (event) => {
    setSelectedExportOption(event.target.value);
  }

  const [userDataSummary] = useState([
    {
      title: 'Session',
      amount: 21459,
      increaseDecreaseSpan: " (+25%)",
      title2: 'Total Users',
      icon: <FiUser />,
      color: ' #6221f3',
      bgColor: '#6221f31c'
    },
    {
      title: 'Paid Users',
      amount: 4567,
      increaseDecreaseSpan: " (+18%)",
      title2: 'Last week analytics',
      icon: <FiUserPlus />,
      color: '#F44336',
      bgColor: '#f443361f'
    },
    {
      title: 'Active Users',
      amount: 19860,
      increaseDecreaseSpan: " (-14%)",
      title2: 'Last week analytics',
      icon: <FiUserCheck />,
      color: '#4CAF50',
      bgColor: '#4caf5026'
    },
    {
      title: 'Inactive Users',
      amount: 237,
      increaseDecreaseSpan: " (+42%)",
      title2: 'Last week analytics',
      icon: <TbUserExclamation />,
      color: '#FFC107',
      bgColor: '#ffc10726'
    },
  ]);


  // const userListHead = ['USER', 'ROLE', 'TITLE', 'BILLING', 'STATUS', 'ACTIONS'];

  const [userData] = useState([
    {
      "userId": 1,
      "userImg": anya,
      "username": "Anya Forger",
      "userEmail": "anyaforger@gmail.com",
      "userRole": "Admin",
      "userBilling": "Auto-Debit",
      "userStatus": "Active"
    },
    {
      "userId": 2,
      "userImg": Adam,
      "username": "Adam Smasher",
      "userEmail": "whiteadam@gmail.com",
      "userRole": "User",
      "userBilling": "Paypal",
      "userStatus": "Inactive"
    },
    {
      "userId": 3,
      "userImg": chibi,
      "username": "Zoe Woods",
      "userEmail": "zoeDchibi@gmail.com",
      "userRole": "User",
      "userBilling": "ApplePay",
      "userStatus": "Inactive"
    },
    {
      "userId": 4,
      "userImg": adrian,
      "username": "Adrian Xavier",
      "userEmail": "adrianXavier@gmail.com",
      "userRole": "User",
      "userBilling": "Auto-Debit",
      "userStatus": "Active"
    }
  ])

  const options = [
    {
      optionTitle: 'Select Title',
      optionsList: ['Data', 'Airtime', 'Bet account', 'Electricity']
    },
    {
      optionTitle: 'Select Status',
      optionsList: ['Active', 'Inactive', 'Pending']
    },
    {
      optionTitle: 'Select Billing',
      optionsList: ['Auto Debit', 'Paypal', 'Cash', 'ApplePay']
    },
    {
      optionTitle: 'Select No of Users',
      optionsList: [6, 5, 4, 3, 2, 1]
    }
  ];

  return (
    <div className='users'>
      <Header />

      <div className="breadcrumbs">
        <p>Users / <span className='activeCrumb'>List</span></p>
      </div>

      <div className="userSummary">
        {userDataSummary.map((value, key) => (
          <div className="summaryInfo" key={key}>
            <div className="summaryInfoTxt">
              <p className='userSummaryTitle'>{value.title}</p>
              <p className='userSummaryValue'>
                <b style={{color: 'var(--text-color-grayTxts)'}}>{value.amount.toLocaleString()}</b>
                <span 
                  className={value.increaseDecreaseSpan.includes('+') ? 'positive' : 'negative'}
                >
                  {value.increaseDecreaseSpan}
                </span>
              </p>
              <p className='userSummaryTitle'>{value.title2}</p>
            </div>
            <div className="summaryIcon">
              <i style={{ color: value.color, backgroundColor: value.bgColor }}>{value.icon}</i>
            </div>
          </div>
        ))}
      </div>


      <div className="userBody">
        <div className="filter">
          <div className="searchFilter">
            <h3><b>Search Filter</b></h3>
          </div>
          <div className="filterOptions">
            <Dropdown options={options} index={0}/>
            <Dropdown options={options} index={1}/>
            <Dropdown options={options} index={2}/>
          </div>
          
        </div>

        <div className="filter2">
          <Dropdown options={options} index={3}/>

          <div className="exportBox">
            <div className='export'>
              <i className='exportIcon'><LuScreenShare/></i>
              <select value={selectedExportOption} onChange={handleChange} className='exportDropdown'>
                <option value="" disabled>Export</option>
                {exportOptions.map((exportOption, index) => (
                  <option key={index} value={exportOption}>
                    {exportOption}
                  </option>
                ))}
              </select>
            </div>

            {/* <button className='addUserBtn'>
              <i><FaPlus /></i>
              Add New User
            </button> */}
            <Button
                btnName="Add New User"
                // width="70%"
                borderRadius="5px"
                padding="10px"
            />
          </div>
          
        </div>

        {/* <div className="usersList">

          <div className="userListHead">
            {userListHead.map((head, index) => (
              <div 
                key={index} 
                className={`userListHeadItem ${index === 0 ? 'firstHeadItem' : ''}`}
              >
                <p><b>{head}</b></p>
              </div>
            ))}
          </div>

          {userData.map((user, index) => (
            <div className="userRow" key={index}>

              <div className='userInfo'>
                <img src={user.userImg} alt="" className='userImg'/>
                <div className="name">
                  <p className='username'><b>{user.username}</b></p>
                  <p className='userEmail'>{user.userEmail}</p>
                </div>
              </div>

              <div className='roleInfo'>
                <p><b>{user.userRole}</b></p>
              </div>

              <div className='titleInfo'>
                <p>{user.titleInfo}</p>
              </div>

              <div className='billingInfo'>
                <p>{user.userBilling}</p>
              </div>

              <div className='statusInfo'>
                <div className={`userListStatus ${user.userStatus.toLowerCase()}`}>
                  {user.userStatus}
                </div>
              </div>

              <div className='actionsInfo'>
                <div className="userListActions">
                  <i><CiEdit/></i>
                  <i><GoTrash/></i>
                  <i><PiDotsThreeOutlineVerticalFill/></i>
                </div>
              </div>
            </div>
          ))}
        </div> */}


        <div className="usersContainer">
          <div className="usersHead">
            <h2 className='h2'>Users</h2>
            <input type="text" placeholder="Search" />
          </div>
          <table>
            <thead>
              <tr>
                <th>USER</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>BILLING</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user.userId}>
                  <td className="receiver">
                    <input type="checkbox" />
                    <img src={user.userImg} alt={user.username} />
                    <span>{user.username}</span>
                  </td>
                  <td>{user.userEmail}</td>
                  <td>{user.userRole}</td>
                  <td>{user.userBilling}</td>
                  <td>
                    <span className={`userListStatus ${user.userStatus.toLowerCase()}`}>
                      {user.userStatus}
                    </span>
                  </td>
                  <td>
                    <div className="userListActions">
                      <i className='edit'><CiEdit/></i>
                      <i className='trash'><GoTrash/></i>
                      <i className='save'><FiSave/></i>
                      {/* <i><PiDotsThreeOutlineVerticalFill/></i> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Users;