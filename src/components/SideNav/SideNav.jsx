

import React from 'react';
import './SideNav.css';
import FFlogo from '../../assets/FF3.png';
import { Link, useNavigate } from 'react-router-dom';
import { CiGrid42 } from 'react-icons/ci';
import { HiOutlineChartBar } from 'react-icons/hi2';
import { PiUsersThree } from 'react-icons/pi';
import { IoSettingsOutline, IoExitOutline } from 'react-icons/io5';
import Swal from 'sweetalert2';

const SideNav = () => {
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
    <div className='sideNav'>
      <div className='sideNavLogo'>
        <img src={FFlogo} alt='' className='FFlogo' />
        <h3>Future Fund</h3>
      </div>

      <div className='sideNavLinks1'>
        <Link to='/Dashboard/Homepage' className='links'>
          <i><CiGrid42 /></i>
          <p>Dashboard</p>
        </Link>

        <Link to='/Dashboard/Analytics' className='links'>
          <i><HiOutlineChartBar /></i>
          <p>Analytics</p>
        </Link>

        <Link to='/Dashboard/Users' className='links'>
          <i><PiUsersThree /></i>
          <p>Users</p>
        </Link>
      </div>

      <div className='sideNavLinks2'>
        <Link to='/Dashboard/Settings' className='links'>
          <i><IoSettingsOutline /></i>
          <p>Settings</p>
        </Link>

        <div className='links' onClick={handleLogout}>
          <i><IoExitOutline /></i>
          <p>LogOut</p>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
