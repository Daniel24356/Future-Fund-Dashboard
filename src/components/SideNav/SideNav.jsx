import React from 'react'
import './SideNav.css'
import FFlogo from '../../assets/FF3.png'
import { Link } from 'react-router-dom';
import { CiGrid42 } from "react-icons/ci";
import { HiOutlineChartBar } from "react-icons/hi2";
import { PiUsersThree } from "react-icons/pi";
import { IoSettingsOutline, IoExitOutline } from "react-icons/io5";

const SideNav = () => {
  return (
    <div className='sideNav'>
        <div className="sideNavLogo">
            <img src={FFlogo} alt="" className='FFlogo'/>
            <h3>Future Fund</h3>
        </div>

        <div className="sideNavLinks">
            
            <Link to='Users' className='links'>
                <i><CiGrid42 /></i>
                <p>Dashboard</p>
            </Link>
            
            <Link to='Analytics' className="links">
                <i><HiOutlineChartBar /></i>
                <p>Analytics</p>
            </Link>

            <Link to='Users' className="links">
                <i><PiUsersThree /></i>
                <p>Users</p>
            </Link>

            <Link to='Users' className="links">
                <i><IoSettingsOutline /></i>
                <p>Settings</p>
            </Link>

            <Link to='Users' className="links">
                <i><IoExitOutline /></i>
                <p>LogOut</p>
            </Link>           
        </div>
    </div>
  )
}

export default SideNav