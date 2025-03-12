import React from 'react'
import './SideNav.css'
import { Link } from 'react-router-dom';
import { CiGrid42 } from "react-icons/ci";
import { HiOutlineChartBar } from "react-icons/hi2";
import { PiUsersThree } from "react-icons/pi";

const SideNav = () => {
  return (
    <div className='sideNav'>
        <div className="sideNavLogo">
            <h3>Future Fund</h3>
        </div>

        <div className="sideNavLinks">

            <div className="links">
                <i><CiGrid42 /></i>
                <Link to='Users'>Dashboard</Link>
            </div>
            
            <div className="links">
                <i><HiOutlineChartBar /></i>
                <Link to='Users'>Analytics</Link>
            </div>

            <div className="links">
                <i><PiUsersThree /></i>
                <Link to='Users'>Users</Link>
            </div>

        </div>
    </div>
  )
}

export default SideNav