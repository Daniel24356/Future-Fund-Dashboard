
import {Link, useNavigate} from 'react-router-dom'
import './SideNav.css'
import React, { useState } from "react"; 
import { FaUsers, FaShoppingCart, FaCalendar, FaFileInvoice, FaCog } from "react-icons/fa";
import { RiHome6Line } from "react-icons/ri";
import Homepage from '../../pages/Homepage/Homepage'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  const navigate = useNavigate();

  const handleLogout = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'custom-confirm-btn', // Custom style
        cancelButton: 'custom-cancel-btn', // Custom style
        popup: 'custom-popup',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: 'You will be logged out!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, log out',
        cancelButtonText: 'No, cancel',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: 'Logged Out!',
            text: 'You have been logged out.',
            icon: 'success',
            confirmButtonText: 'OK', // Style OK button separately
          });

          // Redirect to login page after logging out
          setTimeout(() => {
            navigate('/Login');
          }, 1500);
        }
      });
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <h2 className="logo">FutureFund</h2>
        <button className="toggle-btn" 
        // onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      <ul className="sidebar-menu">
       <li className="active">
        <RiHome6Line className='icon' />
        <Link to='Homepage' className="active"> <span>Dashboard</span></Link>
          
        </li>
        <li>
          <FaUsers className="icon" />
          <span>Users</span>
        </li>
        <li>
          <FaShoppingCart className="icon" />
          <span>eCommerce</span>
        </li>
        <li>
          <FaCalendar className="icon" />
          <span>Calendar</span>
        </li>
        <li>
          <FaFileInvoice className="icon" />
          <span>Invoice</span>
        </li>
        <li>
          <FaCog className="icon" />
          <span>Settings</span>
        </li>

        <li>
          <FaCalendar className="icon" />
          <span>Calendar</span>
        </li>
        <li onClick=(handleLogout)>
          <FaFileInvoice className="icon" />
          <span>LogOut</span>
        </li>
        <li>
          <FaCog className="icon" />
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
