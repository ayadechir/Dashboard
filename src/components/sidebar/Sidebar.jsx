import React,{ useState } from 'react';
import Logo from '../img/logo-1.png';
import './Sidebar.css';
import { SideBarData } from '../../Data/Data';
import {UilSignOutAlt} from '@iconscout/react-unicons'
const Sidebar = () => {
    const [selected, setSelected] = useState(0)
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
                    <div className={selected===index?'menuItem active':'menuItem'}
                    key={index}
                    onClick={()=> setSelected(index)}>
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

export default Sidebar
