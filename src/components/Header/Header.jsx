import React from 'react'
import './Header.css'
import admin from '../../assets/admin.jpg'
import { IoMdSearch } from "react-icons/io";
import { PiMoonStars } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbLayoutGridAdd } from "react-icons/tb";
const Header = () => {
  return (
    <div className='header'>
        <div className="search">
            <i><IoMdSearch /></i>
            <input type="text" placeholder='Search(Ctrl+/)'/>
        </div>
        

        <div className="controls">
            <i><PiMoonStars /></i>
            <i><IoMdNotificationsOutline /></i>
            <i><TbLayoutGridAdd /></i>   
            <img src={admin} alt="" className='adminPic'/>
        </div>
        
    </div>
  )
}

export default Header