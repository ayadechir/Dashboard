import React from 'react';
import Logo from './img/logo-2.png';
import './Sidebar.css';
import { SideBarData } from '../Data/Data';
import {UilSignOutAlt} from '@iconscout/react-unicons'
const sidebar = () => {
  return (
    <div className="sidebar">
        {/*logo*/}
        <div className="logo">
            <img src={Logo}  alt="logo"/>
            <span> St<span>o</span>re</span>
        </div>
        <div className="menu">
            {SideBarData.map((item,index)=>{
                return(
                    <div className="menuItem active">
                        <item.icon/>
                        <span>
                            {item.heading}
                        </span>
                    </div>
                )
            })}
            <div className="menuItem">
                <UilSignOutAlt/>
            </div>
        </div>
        
    </div>
  )
}

export default sidebar
